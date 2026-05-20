// ─────────────────────────────────────────────────────────────────────────────
//  KNOWLEDGE WELL — RENDERING & INTERACTION
//  You should never need to edit this file.
//  All content lives in data.js.
// ─────────────────────────────────────────────────────────────────────────────

let active = null;
let activeDepth = 0;
let scrollObserver = null;

// ── LANDING ───────────────────────────────────────────────────────────────────

function renderLanding() {
  document.getElementById('method-count').textContent =
    `${CONCEPTS.length} concept${CONCEPTS.length !== 1 ? 's' : ''}`;

  const grid = document.getElementById('method-grid');
  grid.innerHTML =
    CONCEPTS.map(c => `
      <div class="method-card" onclick="openConcept('${c.id}')">
        <div class="card-icon">${c.icon}</div>
        <div class="card-tag">${c.tag}</div>
        <div class="card-name">${c.name}</div>
        <div class="card-full-name">${c.fullName}</div>
        <div class="card-tagline">${c.tagline}</div>
        <span class="card-arrow">→</span>
      </div>
    `).join('') +
    `<div class="method-card-add">
       <div class="add-icon">+</div>
       <div class="add-label">Add concept</div>
     </div>`;
}

// ── DETAIL ────────────────────────────────────────────────────────────────────

function openConcept(id) {
  active = CONCEPTS.find(c => c.id === id);
  activeDepth = 0;

  document.getElementById('panel-name').textContent = active.name;
  document.getElementById('panel-label').textContent = active.layers[0].level;

  document.getElementById('depth-dots').innerHTML =
    active.layers.map((_, i) =>
      `<div class="depth-dot ${i === 0 ? 'active' : ''}" data-i="${i}"></div>`
    ).join('');

  document.getElementById('img-container').innerHTML =
    active.layers.map((layer, i) =>
      `<div class="layer-img ${i === 0 ? 'active' : ''}" data-i="${i}">${layer.img}</div>`
    ).join('');

  document.getElementById('scroll-panel').innerHTML =
    active.layers.map((layer, i) => `
      <section class="depth-section" data-i="${i}">
        <div class="depth-tag">Layer ${i + 1} of ${active.layers.length} — ${layer.level}</div>
        <h2 class="depth-title">${layer.title}</h2>
        <div class="depth-body">${layer.body}</div>
      </section>
    `).join('');

  document.getElementById('scroll-panel').scrollTop = 0;

  const landing = document.getElementById('landing');
  const detail  = document.getElementById('detail');
  landing.classList.add('hidden');
  setTimeout(() => {
    landing.style.display = 'none';
    detail.style.display  = 'block';
    detail.style.opacity  = '0';
    requestAnimationFrame(() => {
      detail.style.transition = 'opacity 0.35s ease';
      detail.style.opacity    = '1';
    });
    setupScrollObserver();
  }, 300);
}

function closeConcept() {
  const landing = document.getElementById('landing');
  const detail  = document.getElementById('detail');
  detail.style.opacity = '0';
  setTimeout(() => {
    detail.style.display = 'none';
    landing.style.display = 'block';
    landing.classList.remove('hidden');
    if (scrollObserver) scrollObserver.disconnect();
  }, 300);
}

// ── DEPTH SYNC ────────────────────────────────────────────────────────────────

function setDepth(idx) {
  if (idx === activeDepth) return;
  activeDepth = idx;
  document.getElementById('panel-label').textContent = active.layers[idx].level;
  document.querySelectorAll('.layer-img').forEach((el, i) =>
    el.classList.toggle('active', i === idx));
  document.querySelectorAll('.depth-dot').forEach((el, i) =>
    el.classList.toggle('active', i === idx));
}

function setupScrollObserver() {
  if (scrollObserver) scrollObserver.disconnect();
  const panel = document.getElementById('scroll-panel');
  scrollObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
        setDepth(parseInt(entry.target.dataset.i));
      }
    });
  }, { root: panel, threshold: 0.4 });
  document.querySelectorAll('.depth-section').forEach(s => scrollObserver.observe(s));
}

// ── INIT ──────────────────────────────────────────────────────────────────────

document.getElementById('back-btn').addEventListener('click', closeConcept);
renderLanding();
