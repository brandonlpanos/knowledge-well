// ─────────────────────────────────────────────────────────────────────────────
//  KNOWLEDGE WELL — CONCEPTS
//
//  To add a new concept, copy the template below and append it to CONCEPTS.
//  That is the ONLY file you need to edit.
//
//  ┌─────────────────────────────────────────────────────────────────────────┐
//  │  TEMPLATE                                                               │
//  │                                                                         │
//  │  {                                                                      │
//  │    id:       'my-concept',        // unique slug, no spaces             │
//  │    name:     'Short Name',        // large text on the card             │
//  │    fullName: 'Full Expanded Name',                                      │
//  │    tag:      'Category',          // small label above the name         │
//  │    tagline:  'One-line hook.',    // italic description on the card     │
//  │                                                                         │
//  │    // 72×72 SVG shown on the grid card                                  │
//  │    icon: `<svg viewBox="0 0 72 72" fill="none" ...>...</svg>`,          │
//  │                                                                         │
//  │    layers: [                                                            │
//  │      {                                                                  │
//  │        level: 'Intuition',        // depth label (any text you want)   │
//  │        title: 'Section heading',                                        │
//  │        body: `                                                          │
//  │          <p>Explanation. Use <strong>bold</strong> and <em>italic</em>. │
//  │          </p>                                                           │
//  │          <div class="math-block">formula or code here</div>            │
//  │        `,                                                               │
//  │        // 340×260 SVG -OR- an img tag pointing to a file:              │
//  │        img: `<svg viewBox="0 0 340 260" fill="none" ...>...</svg>`,     │
//  │        // img: `<img src="images/my-concept-intuition.png" alt="...">` │
//  │      },                                                                 │
//  │      { level: 'Core Mechanism', title: '...', body: '...', img: '...' },│
//  │      { level: 'Architecture',   title: '...', body: '...', img: '...' },│
//  │      { level: 'Mathematics',    title: '...', body: '...', img: '...' },│
//  │    ]                                                                    │
//  │  }                                                                      │
//  └─────────────────────────────────────────────────────────────────────────┘
//
//  Image tips:
//   • Keep SVG viewBox at "0 0 340 260" so the sticky panel scales it nicely.
//   • For raster images, drop them in an images/ folder and reference them as
//     `<img src="images/filename.png" alt="description">`.
//   • Fewer than 2 layers works, as does more than 4 — any length is fine.
// ─────────────────────────────────────────────────────────────────────────────

const CONCEPTS = [

  // ── JEPA ──────────────────────────────────────────────────────────────────
  {
    id: 'jepa',
    name: 'JEPA',
    fullName: 'Joint Embedding Predictive Architecture',
    tag: 'Self-Supervised Learning',
    tagline: 'World models that predict in representation space',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="26" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
      <text x="6" y="36" font-family="monospace" font-size="7" fill="currentColor">ctx</text>
      <rect x="48" y="26" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
      <text x="50" y="36" font-family="monospace" font-size="7" fill="currentColor">pred</text>
      <rect x="26" y="32" width="20" height="14" rx="2" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="1.2"/>
      <text x="29" y="42" font-family="monospace" font-size="7" fill="currentColor">enc</text>
      <line x1="24" y1="33" x2="26" y2="33" stroke="currentColor" stroke-width="1.5"/>
      <line x1="46" y1="33" x2="48" y2="33" stroke="currentColor" stroke-width="1.5"/>
      <path d="M36 12 C 50 12 62 22 62 26" stroke="currentColor" stroke-width="1" stroke-dasharray="3 2" opacity="0.5" fill="none"/>
      <circle cx="36" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
      <text x="38" y="10" font-family="monospace" font-size="5.5" fill="currentColor" opacity="0.7">z</text>
      <text x="26" y="60" font-family="monospace" font-size="6" fill="currentColor">d(z, ẑ) → 0</text>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'Predict the abstract, not the pixels',
        body: `<p>Imagine trying to learn about the world by watching a video with half the frames blacked out. One approach: reconstruct every missing pixel — exhausting and mostly useless, since most pixel-level variation is noise, lighting, or texture that carries no meaning.</p>
<p>JEPA takes a different approach: instead of predicting <em>what things look like</em>, it learns to predict <em>what things mean</em>. It builds internal representations of the world, then trains itself to predict those representations for unseen parts — all without labeled data.</p>
<p>The core insight from Yann LeCun: a good world model predicts in <strong>latent space</strong>, not pixel space. This forces the model to learn genuinely useful abstractions rather than regressing surface statistics.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="90" cy="130" rx="60" ry="60" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="5 4" opacity="0.3"/>
  <circle cx="90" cy="130" r="20" fill="#0a0a0a" opacity="0.07" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="82" y="135" font-family="Georgia,serif" font-size="20" fill="#0a0a0a">x</text>
  <text x="52" y="88" font-family="Georgia,serif" font-size="11" fill="#888" font-style="italic">context</text>
  <ellipse cx="250" cy="130" rx="60" ry="60" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="5 4" opacity="0.3"/>
  <circle cx="250" cy="130" r="20" fill="none" stroke="#0a0a0a" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="241" y="135" font-family="Georgia,serif" font-size="20" fill="#0a0a0a" opacity="0.4">?</text>
  <text x="222" y="88" font-family="Georgia,serif" font-size="11" fill="#888" font-style="italic">target region</text>
  <path d="M 120 122 C 155 105 195 105 228 122" stroke="#0a0a0a" stroke-width="1.5" fill="none" marker-end="url(#j0m)"/>
  <text x="152" y="100" font-family="'JetBrains Mono',monospace" font-size="10" fill="#0a0a0a">predict</text>
  <text x="148" y="114" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888">in latent space</text>
  <text x="90" y="218" font-family="'JetBrains Mono',monospace" font-size="9" fill="#888" text-anchor="middle">known context</text>
  <text x="250" y="218" font-family="'JetBrains Mono',monospace" font-size="9" fill="#888" text-anchor="middle">predicted rep.</text>
  <defs>
    <marker id="j0m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Core Mechanism',
        title: 'Two encoders, one predictor, no negatives',
        body: `<p>JEPA has three learned components. A <strong>context encoder</strong> maps visible patches to a latent. A <strong>predictor</strong> takes that latent and a positional query (which region?) and outputs a predicted representation. A <strong>target encoder</strong> applied to the masked region provides the ground-truth latent.</p>
<p>Training minimizes distance between predictor output and target encoder output. The target encoder is updated via <strong>exponential moving average (EMA)</strong> — no gradient flows through it. This prevents representational collapse without requiring contrastive negatives or data augmentation pipelines.</p>
<p>The key: the predictor must solve a genuine conditional prediction problem, making trivial constant solutions impossible. The model is forced to learn the geometry of the embedding space.</p>`,
        img: `<svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="55" width="52" height="28" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="36" y="73" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">x_ctx</text>
  <path d="M62 69 L80 69" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#j1m)"/>
  <rect x="80" y="44" width="66" height="50" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="113" y="68" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">Context</text>
  <text x="113" y="82" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">Encoder</text>
  <path d="M146 69 L164 69" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#j1m)"/>
  <text x="155" y="62" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">s_x</text>
  <rect x="164" y="44" width="66" height="50" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="197" y="68" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">Predictor</text>
  <text x="197" y="82" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">g_θ</text>
  <rect x="164" y="118" width="66" height="28" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2"/>
  <text x="197" y="136" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">pos(target)</text>
  <path d="M197 118 L197 94" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#j1m)"/>
  <path d="M230 69 L252 69" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#j1m)"/>
  <text x="241" y="62" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">ŝ_y</text>
  <circle cx="265" cy="69" r="14" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="265" y="74" font-family="'JetBrains Mono',monospace" font-size="11" fill="#0a0a0a" text-anchor="middle">L</text>
  <rect x="10" y="185" width="52" height="28" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2"/>
  <text x="36" y="203" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">x_tgt</text>
  <path d="M62 199 L80 199" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#j1m)"/>
  <rect x="80" y="174" width="66" height="50" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" opacity="0.8"/>
  <text x="113" y="198" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">Target</text>
  <text x="113" y="211" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">Enc. (EMA)</text>
  <path d="M146 199 L240 199 L248 82" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#j1m)" opacity="0.7"/>
  <text x="190" y="193" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">s_y  no-grad</text>
  <path d="M113 174 L113 94" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="2 3" opacity="0.35" marker-end="url(#j1m)"/>
  <text x="118" y="140" font-family="'JetBrains Mono',monospace" font-size="7" fill="#aaa">EMA</text>
  <defs>
    <marker id="j1m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Architecture',
        title: 'I-JEPA: patch masking on images',
        body: `<p>In <strong>I-JEPA</strong>, the image is tokenized into non-overlapping patches. Context patches are passed through a ViT encoder. One or more rectangular target blocks are masked; learned mask tokens (encoding target positions) let the narrow predictor output one representation per target patch.</p>
<p>The loss is per-patch MSE in latent space of the EMA target encoder. Because targets are <em>semantic</em> (not pixels), the predictor must reason about structure — what <em>kind</em> of patch belongs there — rather than regressing color. Representations transfer strongly to downstream tasks with minimal fine-tuning.</p>
<p>V-JEPA extends this to video with space-time tube masking, predicting 3D latent volumes.</p>`,
        img: `<svg viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="14" width="108" height="108" stroke="#0a0a0a" stroke-width="1.5"/>
  <line x1="14" y1="41" x2="122" y2="41" stroke="#0a0a0a" stroke-width="0.5" opacity="0.4"/>
  <line x1="14" y1="68" x2="122" y2="68" stroke="#0a0a0a" stroke-width="0.5" opacity="0.4"/>
  <line x1="14" y1="95" x2="122" y2="95" stroke="#0a0a0a" stroke-width="0.5" opacity="0.4"/>
  <line x1="41" y1="14" x2="41" y2="122" stroke="#0a0a0a" stroke-width="0.5" opacity="0.4"/>
  <line x1="68" y1="14" x2="68" y2="122" stroke="#0a0a0a" stroke-width="0.5" opacity="0.4"/>
  <line x1="95" y1="14" x2="95" y2="122" stroke="#0a0a0a" stroke-width="0.5" opacity="0.4"/>
  <rect x="41" y="41" width="54" height="54" fill="#0a0a0a" opacity="0.12" stroke="#0a0a0a" stroke-width="1.5" stroke-dasharray="4 2"/>
  <text x="68" y="72" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">target</text>
  <rect x="14" y="14" width="27" height="27" fill="#0a0a0a" opacity="0.05"/>
  <rect x="95" y="14" width="27" height="27" fill="#0a0a0a" opacity="0.05"/>
  <rect x="14" y="95" width="27" height="27" fill="#0a0a0a" opacity="0.05"/>
  <rect x="95" y="95" width="27" height="27" fill="#0a0a0a" opacity="0.05"/>
  <text x="68" y="145" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">image patches</text>
  <path d="M125 68 L148 68" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#j2m)"/>
  <rect x="150" y="48" width="55" height="40" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="177" y="70" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">ViT-L</text>
  <text x="177" y="82" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">encoder</text>
  <path d="M205 68 L228 68" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#j2m)"/>
  <rect x="230" y="48" width="55" height="40" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="257" y="70" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">Narrow</text>
  <text x="257" y="82" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">ViT  g_θ</text>
  <path d="M285 68 L322 68" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#j2m)"/>
  <text x="330" y="65" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888">ŝ_y</text>
  <rect x="150" y="175" width="55" height="40" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" opacity="0.8"/>
  <text x="177" y="196" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">ViT (EMA)</text>
  <text x="177" y="208" font-family="'JetBrains Mono',monospace" font-size="7" fill="#aaa" text-anchor="middle">target enc.</text>
  <path d="M205 195 L310 195 L320 82 L330 75" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#j2m)" opacity="0.6"/>
  <path d="M68 155 L68 170 L148 195" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.5" marker-end="url(#j2m)"/>
  <text x="60" y="165" font-family="'JetBrains Mono',monospace" font-size="7" fill="#aaa">full img</text>
  <text x="257" y="148" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">MSE in</text>
  <text x="257" y="160" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">latent space</text>
  <defs>
    <marker id="j2m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Mathematics',
        title: 'Formal objective and the JEPA hierarchy',
        body: `<p>The I-JEPA training objective for image <em>x</em> with M target blocks:</p>
<div class="math-block">L(θ,φ) = Σ_{B∈{y₁..yM}} ‖g_θ(f_φ(x̃), p_B) − sg[f_φ̄(x)]_B‖²₂</div>
<p>where <em>f_φ</em> is the context encoder, <em>g_θ</em> the predictor, <em>f_φ̄</em> the EMA target encoder, <em>sg[·]</em> stop-gradient, and <em>p_B</em> positional encoding for block <em>B</em>. The EMA rule:</p>
<div class="math-block">φ̄ ← τφ̄ + (1−τ)φ,   τ ∈ [0.996, 1.0]</div>
<p>The <strong>collapse problem</strong> — encoders mapping all inputs to the same vector — is prevented by the asymmetric predictor architecture: the predictor must solve a conditional prediction problem, making the trivial constant solution impossible without the positional query varying.</p>
<p>This sits within LeCun's <strong>autonomous machine intelligence</strong> hierarchy: stacked JEPA modules at increasing temporal/semantic abstraction, each predicting the level above it. Empirically, I-JEPA requires ~10× fewer views than DINO/SimCLR for comparable linear-probing accuracy and excels at counting and structural tasks where MAE (pixel reconstruction) underperforms.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="18" font-family="'JetBrains Mono',monospace" font-size="9" fill="#888" text-anchor="middle">JEPA Hierarchy (LeCun 2022)</text>
  <rect x="16" y="28" width="308" height="36" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="47" font-family="'JetBrains Mono',monospace" font-size="9" fill="#0a0a0a" text-anchor="middle">L3 — Abstract world model  (plans, goals)</text>
  <text x="170" y="59" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">slow temporal scale</text>
  <rect x="16" y="72" width="308" height="36" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#f8f8f6"/>
  <text x="170" y="91" font-family="'JetBrains Mono',monospace" font-size="9" fill="#0a0a0a" text-anchor="middle">L2 — Semantic model  (objects, relations)</text>
  <text x="170" y="103" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">medium temporal scale</text>
  <rect x="16" y="116" width="308" height="36" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="170" y="135" font-family="'JetBrains Mono',monospace" font-size="9" fill="#0a0a0a" text-anchor="middle">L1 — Perceptual  (I-JEPA / V-JEPA)</text>
  <text x="170" y="147" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">fast temporal scale — patches, frames</text>
  <path d="M170 64 L170 72" stroke="#0a0a0a" stroke-width="1" opacity="0.4" marker-end="url(#j3m)"/>
  <path d="M170 108 L170 116" stroke="#0a0a0a" stroke-width="1" opacity="0.4" marker-end="url(#j3m)"/>
  <rect x="16" y="168" width="308" height="76" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="5 3" fill="#eeeeea"/>
  <text x="26" y="186" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a">Objective:</text>
  <text x="26" y="203" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a">min Σ_B ‖g_θ(f_φ(x̃), p_B) − sg[f_φ̄(x)]_B‖²</text>
  <text x="26" y="220" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#555">EMA:  φ̄ ← τφ̄ + (1−τ)φ</text>
  <text x="26" y="236" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#aaa">sg[·] = stop-gradient    τ ≈ 0.999</text>
  <defs>
    <marker id="j3m" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      }
    ]
  },

  // ── DIFFUSION ──────────────────────────────────────────────────────────────
  {
    id: 'diffusion',
    name: 'Diffusion',
    fullName: 'Denoising Diffusion Probabilistic Models',
    tag: 'Generative Models',
    tagline: 'Learning to reverse a gradual corruption process',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="36" r="9" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/>
      <circle cx="14" cy="36" r="4" fill="currentColor" opacity="0.2"/>
      <circle cx="36" cy="36" r="9" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.7"/>
      <circle cx="36" cy="36" r="4" fill="currentColor" opacity="0.12"/>
      <circle cx="58" cy="36" r="9" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="58" cy="36" r="5" fill="currentColor" opacity="0.22"/>
      <path d="M8 54 L64 54" stroke="currentColor" stroke-width="1" marker-end="url(#dico)"/>
      <text x="36" y="67" font-family="monospace" font-size="6" fill="currentColor" text-anchor="middle">denoise t→0</text>
      <defs>
        <marker id="dico" markerWidth="5" markerHeight="5" refX="3" refY="2" orient="auto">
          <path d="M0,0 L0,4 L4,2 z" fill="currentColor"/>
        </marker>
      </defs>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'Destroy gradually, learn to rebuild',
        body: `<p>Start with a photograph. Add noise — grain, static — a little at a time, until nothing recognizable remains. What you have is pure Gaussian noise. Now flip this: if you could learn to <strong>reverse each small noising step</strong>, you could start from noise and produce a photograph.</p>
<p>Diffusion models do exactly this. The forward process is trivial math — adding noise at each of T steps. The interesting part is the <strong>reverse process</strong>: a neural network trained to look at a noisy image and predict the noise added, enabling a denoising step.</p>
<p>At inference, you sample pure noise and iteratively apply the learned denoiser. No encoder, no decoder — just a sculptor progressively removing material.</p>`,
        img: `<svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="20" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">forward process (trivial, fixed)</text>
  <circle cx="36" cy="75" r="24" stroke="#0a0a0a" stroke-width="1.5"/>
  <circle cx="36" cy="75" r="14" fill="#0a0a0a" opacity="0.13"/>
  <circle cx="116" cy="75" r="24" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="4 2"/>
  <circle cx="116" cy="75" r="10" fill="#0a0a0a" opacity="0.09"/>
  <circle cx="196" cy="75" r="24" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.8"/>
  <circle cx="196" cy="75" r="7" fill="#0a0a0a" opacity="0.07"/>
  <circle cx="276" cy="75" r="24" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.6"/>
  <circle cx="276" cy="75" r="4" fill="#0a0a0a" opacity="0.05"/>
  <path d="M62 75 L90 75" stroke="#0a0a0a" stroke-width="1" marker-end="url(#dfw)"/>
  <path d="M142 75 L170 75" stroke="#0a0a0a" stroke-width="1" marker-end="url(#dfw)"/>
  <path d="M222 75 L250 75" stroke="#0a0a0a" stroke-width="1" marker-end="url(#dfw)"/>
  <text x="36" y="115" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">x₀</text>
  <text x="276" y="115" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">x_T ~ N(0,I)</text>
  <text x="170" y="148" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">reverse process (learned)</text>
  <circle cx="276" cy="195" r="24" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.6"/>
  <circle cx="196" cy="195" r="24" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.8"/>
  <circle cx="196" cy="195" r="7" fill="#0a0a0a" opacity="0.07"/>
  <circle cx="116" cy="195" r="24" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="4 2"/>
  <circle cx="116" cy="195" r="10" fill="#0a0a0a" opacity="0.09"/>
  <circle cx="36" cy="195" r="24" stroke="#0a0a0a" stroke-width="1.5"/>
  <circle cx="36" cy="195" r="14" fill="#0a0a0a" opacity="0.13"/>
  <path d="M250 195 L222 195" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#drv)"/>
  <path d="M170 195 L142 195" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#drv)"/>
  <path d="M90 195 L62 195" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#drv)"/>
  <text x="36" y="231" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">x₀ (sample)</text>
  <text x="276" y="231" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">start: noise</text>
  <rect x="140" y="175" width="62" height="14" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1"/>
  <text x="171" y="185" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">ε_θ(x_t, t)</text>
  <defs>
    <marker id="dfw" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
    <marker id="drv" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Core Mechanism',
        title: 'Noise schedules and the denoiser',
        body: `<p>The forward process adds Gaussian noise according to a variance schedule {β₁,...,βT}. A key property: we can jump to any timestep directly, without iterating:</p>
<p style="font-family:'JetBrains Mono',monospace; font-size:0.82rem; margin:0.8rem 0; color:#333">x_t = √ᾱ_t · x₀ + √(1−ᾱ_t) · ε,   ε ~ N(0,I)</p>
<p>where ᾱ_t = ∏_{i=1}^t (1−β_i). The network ε_θ(x_t, t) is trained to predict the noise ε given noisy x_t and timestep t. At inference, you iteratively apply the denoiser starting from x_T ~ N(0,I).</p>
<p>Timestep conditioning is crucial — at high noise the model must reconstruct coarse structure; at low noise it refines fine detail. <strong>DDIM</strong> reformulates the reverse as a deterministic ODE, enabling generation in ~20 steps instead of 1000.</p>`,
        img: `<svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="18" font-family="'JetBrains Mono',monospace" font-size="9" fill="#0a0a0a" text-anchor="middle">Noise schedule: ᾱ_t = ∏(1−βᵢ)</text>
  <line x1="40" y1="125" x2="320" y2="125" stroke="#0a0a0a" stroke-width="1"/>
  <line x1="40" y1="28" x2="40" y2="125" stroke="#0a0a0a" stroke-width="1"/>
  <path d="M40,32 C80,33 140,48 200,82 S290,120 320,124" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <path d="M40,124 C80,122 140,106 200,76 S290,36 320,32" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="5 3" fill="none"/>
  <text x="325" y="32" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888">noise</text>
  <text x="325" y="126" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a">signal</text>
  <text x="36" y="26" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">1</text>
  <text x="30" y="127" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">0</text>
  <text x="32" y="140" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">0</text>
  <text x="316" y="140" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">T</text>
  <text x="175" y="140" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">timestep t</text>
  <rect x="72" y="162" width="196" height="64" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="170" y="185" font-family="'JetBrains Mono',monospace" font-size="10" fill="#0a0a0a" text-anchor="middle" font-weight="500">ε_θ(x_t , t)</text>
  <text x="170" y="202" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">U-Net + time embedding</text>
  <text x="170" y="218" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">predicts added noise ε</text>
  <text x="54" y="167" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">x_t</text>
  <path d="M64 164 L72 172" stroke="#0a0a0a" stroke-width="1" marker-end="url(#dme)"/>
  <text x="274" y="167" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">t</text>
  <path d="M278 164 L268 172" stroke="#0a0a0a" stroke-width="1" marker-end="url(#dme)"/>
  <defs>
    <marker id="dme" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Architecture',
        title: 'U-Net backbone and score matching',
        body: `<p>Diffusion models connect to <strong>score matching</strong>: ε_θ is proportional to the score function ∇_x log p(x_t). Learning to denoise is equivalent to learning the gradient of the log-density — the direction of increasing probability — without ever evaluating p(x) explicitly.</p>
<p>The backbone is a time-conditioned <strong>U-Net</strong> with residual blocks and multi-head self-attention at lower resolutions. Timestep t is encoded via sinusoidal embeddings, injected via AdaGN (learned scale/shift on group norm). For text-to-image, cross-attention layers inject CLIP or T5 embeddings at each resolution.</p>
<p><strong>Latent diffusion</strong> (Stable Diffusion) runs the diffusion process in the latent of a pretrained VAE — reducing compute by ~64× while preserving quality. <strong>Classifier-free guidance</strong> allows steering at inference without a separate classifier.</p>`,
        img: `<svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="16" font-family="'JetBrains Mono',monospace" font-size="9" fill="#0a0a0a" text-anchor="middle">U-Net Denoiser (DDPM)</text>
  <rect x="16" y="26" width="52" height="22" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="42" y="41" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">64×64</text>
  <path d="M42 48 L42 60" stroke="#0a0a0a" stroke-width="1" marker-end="url(#due)"/>
  <rect x="16" y="62" width="52" height="22" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="42" y="77" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">32×32</text>
  <path d="M42 84 L42 96" stroke="#0a0a0a" stroke-width="1" marker-end="url(#due)"/>
  <rect x="16" y="98" width="52" height="22" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="42" y="113" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">16×16</text>
  <path d="M42 120 L42 132" stroke="#0a0a0a" stroke-width="1" marker-end="url(#due)"/>
  <rect x="10" y="134" width="64" height="28" rx="2" stroke="#0a0a0a" stroke-width="2" fill="#0a0a0a" opacity="0.09"/>
  <text x="42" y="148" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">8×8 + Attn</text>
  <text x="42" y="158" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">bottleneck</text>
  <path d="M74 148 L100 148" stroke="#0a0a0a" stroke-width="1" marker-end="url(#due)"/>
  <rect x="102" y="134" width="58" height="28" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="131" y="148" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">8→16×16</text>
  <text x="131" y="158" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">+ResBlock</text>
  <path d="M131 134 L131 122" stroke="#0a0a0a" stroke-width="1" marker-end="url(#due)"/>
  <rect x="102" y="98" width="58" height="22" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="131" y="113" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">16→32×32</text>
  <path d="M131 98 L131 86" stroke="#0a0a0a" stroke-width="1" marker-end="url(#due)"/>
  <rect x="102" y="62" width="58" height="22" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="131" y="77" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">32→64×64</text>
  <path d="M68 37 C 88 37 88 73 102 73" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.5"/>
  <path d="M68 73 C 88 73 88 109 102 109" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.5"/>
  <text x="80" y="55" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa">skip</text>
  <rect x="218" y="60" width="106" height="52" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2"/>
  <text x="271" y="78" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">timestep t</text>
  <text x="271" y="91" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">sinusoidal emb.</text>
  <text x="271" y="103" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">→ AdaGN scale/shift</text>
  <rect x="218" y="125" width="106" height="38" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2"/>
  <text x="271" y="143" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">text embedding</text>
  <text x="271" y="155" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa" text-anchor="middle">→ cross-attention</text>
  <path d="M218 84 L168 100" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.5" marker-end="url(#due)"/>
  <path d="M218 140 L168 145" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.5" marker-end="url(#due)"/>
  <path d="M131 62 L131 46 L165 46" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#due)"/>
  <rect x="166" y="26" width="68" height="34" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="200" y="44" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">ε_θ output</text>
  <text x="200" y="55" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">predicted noise</text>
  <defs>
    <marker id="due" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Mathematics',
        title: 'ELBO, score matching, and guidance',
        body: `<p>The DDPM training objective is a reweighted ELBO on the log-likelihood. Ho et al. show the simplified loss suffices in practice:</p>
<div class="math-block">L_simple(θ) = E_{t,x₀,ε} [‖ε − ε_θ(√ᾱ_t·x₀ + √(1−ᾱ_t)·ε, t)‖²]</div>
<p>The connection to score matching: since ε_θ ≈ −√(1−ᾱ_t) · ∇_{x_t} log q(x_t), the denoiser implicitly approximates the score function. Song et al.'s SDE formulation unifies all diffusion models as discretizations of a forward SDE whose reverse is solved via a score-conditioned neural ODE.</p>
<p><strong>Classifier-free guidance (CFG)</strong> scales the conditional score shift at inference:</p>
<div class="math-block">ε̂_θ(x_t, c) = (1+w)·ε_θ(x_t, c) − w·ε_θ(x_t, ∅)</div>
<p>where w controls guidance strength (diversity vs. quality tradeoff). CFG is the mechanism behind "prompt strength" in Stable Diffusion. The guidance scale effectively moves samples toward modes of the conditional distribution p(x|c), at the cost of lower entropy.</p>`,
        img: `<svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="16" font-family="'JetBrains Mono',monospace" font-size="9" fill="#0a0a0a" text-anchor="middle">Score field: ∇_x log p(x_t)</text>
  <path d="M40,40 L58,50" stroke="#0a0a0a" stroke-width="0.8" opacity="0.25" marker-end="url(#dsm)"/>
  <path d="M85,30 L94,50" stroke="#0a0a0a" stroke-width="0.8" opacity="0.25" marker-end="url(#dsm)"/>
  <path d="M130,25 L125,50" stroke="#0a0a0a" stroke-width="0.8" opacity="0.25" marker-end="url(#dsm)"/>
  <path d="M175,20 L168,50" stroke="#0a0a0a" stroke-width="0.8" opacity="0.25" marker-end="url(#dsm)"/>
  <path d="M220,25 L210,50" stroke="#0a0a0a" stroke-width="0.8" opacity="0.25" marker-end="url(#dsm)"/>
  <path d="M265,30 L246,50" stroke="#0a0a0a" stroke-width="0.8" opacity="0.25" marker-end="url(#dsm)"/>
  <path d="M305,40 L282,53" stroke="#0a0a0a" stroke-width="0.8" opacity="0.25" marker-end="url(#dsm)"/>
  <path d="M40,90 L65,85" stroke="#0a0a0a" stroke-width="0.9" opacity="0.3" marker-end="url(#dsm)"/>
  <path d="M300,90 L278,86" stroke="#0a0a0a" stroke-width="0.9" opacity="0.3" marker-end="url(#dsm)"/>
  <path d="M40,130 L68,122" stroke="#0a0a0a" stroke-width="1" opacity="0.35" marker-end="url(#dsm)"/>
  <path d="M300,130 L274,122" stroke="#0a0a0a" stroke-width="1" opacity="0.35" marker-end="url(#dsm)"/>
  <path d="M50,165 L80,152" stroke="#0a0a0a" stroke-width="1.1" opacity="0.4" marker-end="url(#dsm)"/>
  <path d="M290,165 L262,152" stroke="#0a0a0a" stroke-width="1.1" opacity="0.4" marker-end="url(#dsm)"/>
  <circle cx="170" cy="105" r="34" fill="#0a0a0a" opacity="0.07" stroke="#0a0a0a" stroke-width="1.5"/>
  <circle cx="170" cy="105" r="16" fill="#0a0a0a" opacity="0.12"/>
  <text x="170" y="110" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">p_data</text>
  <rect x="16" y="188" width="308" height="44" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="26" y="207" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a">CFG: ε̂(x_t,c) = (1+w)·ε(x_t,c) − w·ε(x_t,∅)</text>
  <text x="26" y="223" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#555">w=0: unguided    w→∞: mode-seeking (less diverse)</text>
  <defs>
    <marker id="dsm" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      }
    ]
  },

  // ── ATTENTION ─────────────────────────────────────────────────────────────
  {
    id: 'attention',
    name: 'Attention',
    fullName: 'Transformer / Self-Attention',
    tag: 'Sequence Modeling',
    tagline: 'Every token attends to every other token',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="12" width="11" height="11" fill="currentColor" opacity="0.75" rx="1"/>
      <rect x="25" y="12" width="11" height="11" fill="currentColor" opacity="0.20" rx="1"/>
      <rect x="38" y="12" width="11" height="11" fill="currentColor" opacity="0.08" rx="1"/>
      <rect x="51" y="12" width="11" height="11" fill="currentColor" opacity="0.05" rx="1"/>
      <rect x="12" y="25" width="11" height="11" fill="currentColor" opacity="0.18" rx="1"/>
      <rect x="25" y="25" width="11" height="11" fill="currentColor" opacity="0.70" rx="1"/>
      <rect x="38" y="25" width="11" height="11" fill="currentColor" opacity="0.25" rx="1"/>
      <rect x="51" y="25" width="11" height="11" fill="currentColor" opacity="0.06" rx="1"/>
      <rect x="12" y="38" width="11" height="11" fill="currentColor" opacity="0.05" rx="1"/>
      <rect x="25" y="38" width="11" height="11" fill="currentColor" opacity="0.20" rx="1"/>
      <rect x="38" y="38" width="11" height="11" fill="currentColor" opacity="0.72" rx="1"/>
      <rect x="51" y="38" width="11" height="11" fill="currentColor" opacity="0.15" rx="1"/>
      <rect x="12" y="51" width="11" height="11" fill="currentColor" opacity="0.04" rx="1"/>
      <rect x="25" y="51" width="11" height="11" fill="currentColor" opacity="0.08" rx="1"/>
      <rect x="38" y="51" width="11" height="11" fill="currentColor" opacity="0.22" rx="1"/>
      <rect x="51" y="51" width="11" height="11" fill="currentColor" opacity="0.68" rx="1"/>
      <text x="36" y="70" font-family="monospace" font-size="6" fill="currentColor" text-anchor="middle">attention</text>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'Every word looks at every other word',
        body: `<p>To understand "The animal didn't cross the street because <em>it</em> was too tired", you need to resolve what "it" refers to — which requires looking both forward and backward simultaneously. RNNs struggle: they push meaning through a sequential bottleneck, degrading over distance.</p>
<p>The attention mechanism gives each element in a sequence the ability to <strong>directly query every other element</strong>, regardless of distance. The strength of each connection is content-dependent and learned. A token can simultaneously attend strongly to a nearby subject, weakly to a distant modifier, and ignore the rest.</p>
<p>Stacking many such layers — each with multiple parallel "heads" specializing in different relationship types — produces a model that captures syntax, coreference, and long-range dependencies in parallel.</p>`,
        img: `<svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="60" width="46" height="24" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="33" y="76" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">The</text>
  <rect x="65" y="60" width="46" height="24" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="88" y="76" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">cat</text>
  <rect x="120" y="60" width="46" height="24" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="143" y="76" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">sat</text>
  <rect x="175" y="60" width="46" height="24" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="198" y="76" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">on</text>
  <rect x="230" y="60" width="46" height="24" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="253" y="76" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">mat</text>
  <path d="M33 60 C 33 36 88 36 88 60" stroke="#0a0a0a" stroke-width="2" fill="none" opacity="0.6"/>
  <path d="M33 60 C 33 22 143 22 143 60" stroke="#0a0a0a" stroke-width="1.2" fill="none" opacity="0.4"/>
  <path d="M88 60 C 88 38 143 38 143 60" stroke="#0a0a0a" stroke-width="1.6" fill="none" opacity="0.5"/>
  <path d="M143 60 C 143 30 253 30 253 60" stroke="#0a0a0a" stroke-width="1" fill="none" opacity="0.35"/>
  <path d="M198 60 C 198 42 253 42 253 60" stroke="#0a0a0a" stroke-width="1.8" fill="none" opacity="0.55"/>
  <text x="170" y="128" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#555" text-anchor="middle">arc weight = attention strength</text>
  <text x="170" y="143" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#555" text-anchor="middle">every pair communicates directly</text>
  <rect x="44" y="170" width="252" height="54" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="5 3" fill="#eeeeea"/>
  <text x="170" y="190" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">Query — "what am I looking for?"</text>
  <text x="170" y="206" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">Key   — "what do I advertise?"</text>
  <text x="170" y="221" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">Value — "what do I contribute?"</text>
</svg>`
      },

      {
        level: 'Core Mechanism',
        title: 'Scaled dot-product attention',
        body: `<p>Each token produces three vectors: <strong>Query</strong> Q (what it seeks), <strong>Key</strong> K (what it broadcasts), and <strong>Value</strong> V (what it contributes). Scores are Q·Kᵀ/√d_k — divided by √d_k to prevent softmax saturation in high dimensions. Softmax converts scores to a distribution; the output is a weighted sum of all V vectors.</p>
<p>The entire computation is a single matrix multiplication: Attention(Q,K,V) = softmax(QKᵀ/√d_k)V. All positions compute in parallel — this is why transformers are GPU-efficient in a way sequential RNNs are not.</p>
<p>The price: O(n²d) memory and compute in sequence length n. FlashAttention bypasses this by IO-aware tiling — computing the exact result without materializing the full n×n matrix.</p>`,
        img: `<svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="16" font-family="'JetBrains Mono',monospace" font-size="9" fill="#0a0a0a" text-anchor="middle">Attention(Q,K,V) = softmax(QKᵀ/√d_k)·V</text>
  <rect x="16" y="30" width="32" height="60" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="32" y="65" font-family="'JetBrains Mono',monospace" font-size="12" fill="#0a0a0a" text-anchor="middle">Q</text>
  <text x="32" y="78" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">n×d_k</text>
  <rect x="54" y="30" width="32" height="60" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="70" y="65" font-family="'JetBrains Mono',monospace" font-size="12" fill="#0a0a0a" text-anchor="middle">K</text>
  <text x="70" y="78" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">n×d_k</text>
  <rect x="92" y="30" width="32" height="60" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="108" y="65" font-family="'JetBrains Mono',monospace" font-size="12" fill="#0a0a0a" text-anchor="middle">V</text>
  <text x="108" y="78" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">n×d_v</text>
  <text x="190" y="30" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">QKᵀ/√d_k</text>
  <rect x="164" y="34" width="15" height="15" fill="#0a0a0a" opacity="0.75" rx="1"/>
  <rect x="181" y="34" width="15" height="15" fill="#0a0a0a" opacity="0.18" rx="1"/>
  <rect x="198" y="34" width="15" height="15" fill="#0a0a0a" opacity="0.08" rx="1"/>
  <rect x="215" y="34" width="15" height="15" fill="#0a0a0a" opacity="0.04" rx="1"/>
  <rect x="164" y="51" width="15" height="15" fill="#0a0a0a" opacity="0.15" rx="1"/>
  <rect x="181" y="51" width="15" height="15" fill="#0a0a0a" opacity="0.68" rx="1"/>
  <rect x="198" y="51" width="15" height="15" fill="#0a0a0a" opacity="0.22" rx="1"/>
  <rect x="215" y="51" width="15" height="15" fill="#0a0a0a" opacity="0.06" rx="1"/>
  <rect x="164" y="68" width="15" height="15" fill="#0a0a0a" opacity="0.05" rx="1"/>
  <rect x="181" y="68" width="15" height="15" fill="#0a0a0a" opacity="0.20" rx="1"/>
  <rect x="198" y="68" width="15" height="15" fill="#0a0a0a" opacity="0.65" rx="1"/>
  <rect x="215" y="68" width="15" height="15" fill="#0a0a0a" opacity="0.14" rx="1"/>
  <rect x="164" y="85" width="15" height="15" fill="#0a0a0a" opacity="0.04" rx="1"/>
  <rect x="181" y="85" width="15" height="15" fill="#0a0a0a" opacity="0.06" rx="1"/>
  <rect x="198" y="85" width="15" height="15" fill="#0a0a0a" opacity="0.28" rx="1"/>
  <rect x="215" y="85" width="15" height="15" fill="#0a0a0a" opacity="0.72" rx="1"/>
  <path d="M190 104 L190 117" stroke="#0a0a0a" stroke-width="1" marker-end="url(#atm)"/>
  <text x="190" y="130" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">softmax →</text>
  <rect x="164" y="134" width="15" height="15" fill="#0a0a0a" opacity="0.85" rx="1"/>
  <rect x="181" y="134" width="15" height="15" fill="#0a0a0a" opacity="0.10" rx="1"/>
  <rect x="198" y="134" width="15" height="15" fill="#0a0a0a" opacity="0.03" rx="1"/>
  <rect x="215" y="134" width="15" height="15" fill="#0a0a0a" opacity="0.02" rx="1"/>
  <rect x="164" y="151" width="15" height="15" fill="#0a0a0a" opacity="0.08" rx="1"/>
  <rect x="181" y="151" width="15" height="15" fill="#0a0a0a" opacity="0.80" rx="1"/>
  <rect x="198" y="151" width="15" height="15" fill="#0a0a0a" opacity="0.10" rx="1"/>
  <rect x="215" y="151" width="15" height="15" fill="#0a0a0a" opacity="0.02" rx="1"/>
  <rect x="164" y="168" width="15" height="15" fill="#0a0a0a" opacity="0.02" rx="1"/>
  <rect x="181" y="168" width="15" height="15" fill="#0a0a0a" opacity="0.12" rx="1"/>
  <rect x="198" y="168" width="15" height="15" fill="#0a0a0a" opacity="0.78" rx="1"/>
  <rect x="215" y="168" width="15" height="15" fill="#0a0a0a" opacity="0.08" rx="1"/>
  <rect x="164" y="185" width="15" height="15" fill="#0a0a0a" opacity="0.02" rx="1"/>
  <rect x="181" y="185" width="15" height="15" fill="#0a0a0a" opacity="0.04" rx="1"/>
  <rect x="198" y="185" width="15" height="15" fill="#0a0a0a" opacity="0.14" rx="1"/>
  <rect x="215" y="185" width="15" height="15" fill="#0a0a0a" opacity="0.82" rx="1"/>
  <text x="246" y="166" font-family="'JetBrains Mono',monospace" font-size="9" fill="#888">× V</text>
  <path d="M234 160 L260 160" stroke="#0a0a0a" stroke-width="1" marker-end="url(#atm)"/>
  <rect x="264" y="134" width="30" height="66" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="279" y="170" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">out</text>
  <text x="279" y="183" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">n×d_v</text>
  <path d="M32 90 C32 106 80 106 80 106" stroke="#0a0a0a" stroke-width="0.7" opacity="0.4"/>
  <path d="M70 90 C70 106 120 106 120 106" stroke="#0a0a0a" stroke-width="0.7" opacity="0.4"/>
  <path d="M100 106 L162 90" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.5" marker-end="url(#atm)"/>
  <defs>
    <marker id="atm" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Architecture',
        title: 'Multi-head, transformer block, and the FFN',
        body: `<p><strong>Multi-head attention</strong> runs h independent attention operations in parallel, each with learned projections W^Q_i, W^K_i, W^V_i of dimension d_k = d_model/h. The h outputs are concatenated and projected. Different heads specialize: syntactic heads track subject-verb agreement, semantic heads track coreference, positional heads track local context.</p>
<p>A transformer block wraps multi-head attention with: (1) residual connection, (2) LayerNorm, (3) a feedforward network (FFN: Linear → GELU → Linear, with hidden size 4×d_model), (4) another residual + LayerNorm. Position enters via sinusoidal or learned positional embeddings added to token embeddings at the input.</p>
<p>Modern LLMs use decoder-only transformers with <strong>causal masking</strong> (upper triangle of attention matrix zeroed), RoPE positional embeddings, and SwiGLU FFNs instead of the original GELU variant.</p>`,
        img: `<svg viewBox="0 0 340 248" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">Transformer Block (Pre-LN)</text>
  <rect x="128" y="222" width="84" height="20" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1"/>
  <text x="170" y="236" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">x  (input)</text>
  <path d="M170 222 L170 210" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#tfm)"/>
  <rect x="138" y="192" width="64" height="18" rx="2" fill="#f8f8f6" stroke="#0a0a0a" stroke-width="1"/>
  <text x="170" y="205" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">LayerNorm</text>
  <path d="M170 192 L170 181" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#tfm)"/>
  <rect x="108" y="152" width="124" height="28" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="170" y="169" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">Multi-Head Attention</text>
  <text x="170" y="177" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">h heads, d_k = d_model/h</text>
  <path d="M124 228 L80 228 L80 132 L108 132" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" opacity="0.5"/>
  <circle cx="108" cy="132" r="9" fill="#f8f8f6" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="108" y="136" font-family="'JetBrains Mono',monospace" font-size="10" fill="#0a0a0a" text-anchor="middle">+</text>
  <path d="M117 132 L140 132" stroke="#0a0a0a" stroke-width="1" marker-end="url(#tfm)"/>
  <path d="M170 152 L170 138" stroke="#0a0a0a" stroke-width="1.5"/>
  <path d="M117 132 L170 132" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#tfm)"/>
  <rect x="138" y="112" width="64" height="18" rx="2" fill="#f8f8f6" stroke="#0a0a0a" stroke-width="1"/>
  <text x="170" y="125" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">LayerNorm</text>
  <path d="M170 112 L170 102" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#tfm)"/>
  <rect x="108" y="62" width="124" height="38" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="170" y="80" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">FFN</text>
  <text x="170" y="92" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">Linear → GELU → Linear</text>
  <text x="170" y="98" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa" text-anchor="middle">d_model → 4d_model → d_model</text>
  <path d="M232 132 L278 132 L278 40 L232 40" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" opacity="0.5"/>
  <circle cx="224" cy="40" r="9" fill="#f8f8f6" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="224" y="44" font-family="'JetBrains Mono',monospace" font-size="10" fill="#0a0a0a" text-anchor="middle">+</text>
  <path d="M170 62 L170 49 L215 49" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#tfm)"/>
  <path d="M224 31 L224 22 L170 22" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#tfm)"/>
  <rect x="128" y="14" width="84" height="16" rx="2" fill="#0a0a0a" opacity="0.08" stroke="#0a0a0a" stroke-width="1"/>
  <text x="170" y="25" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">output (same dim)</text>
  <defs>
    <marker id="tfm" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Mathematics',
        title: 'Formal analysis, complexity, and scaling laws',
        body: `<p>The full multi-head attention computation:</p>
<div class="math-block">MultiHead(Q,K,V) = Concat(head₁,...,headₕ)W^O
headᵢ = Attention(QW^Q_i, KW^K_i, VW^V_i)
Attention(Q,K,V) = softmax(QKᵀ/√d_k)V</div>
<p>The √d_k scaling: for unit-variance inputs, QKᵀ entries have variance d_k. Without scaling, softmax saturates and gradients vanish at initialization. Complexity is O(n²d) — quadratic in sequence length. <strong>FlashAttention</strong> (Dao et al.) computes exact attention in O(n) memory via tiled computation, without storing the full n×n matrix.</p>
<p><strong>Scaling laws</strong> (Hoffmann et al., Chinchilla): loss scales as a power law in both parameters N and training tokens D, with optimal allocation N_opt ∝ C^0.49, D_opt ∝ C^0.51 — equal scaling. This falsified GPT-3-era practice of training large models on small data, motivating Llama/Mistral (smaller models, more tokens).</p>
<div class="math-block">L(N,D) ≈ E + A/N^α + B/D^β   (α,β ≈ 0.34)</div>
<p>Emergent capabilities — sharp improvements at certain scales — remain poorly theoretically understood. They likely reflect phase transitions in the underlying loss landscape rather than discontinuous changes in learning dynamics.</p>`,
        img: `<svg viewBox="0 0 340 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="16" font-family="'JetBrains Mono',monospace" font-size="9" fill="#0a0a0a" text-anchor="middle">Scaling Laws (Chinchilla)</text>
  <line x1="44" y1="190" x2="320" y2="190" stroke="#0a0a0a" stroke-width="1"/>
  <line x1="44" y1="38" x2="44" y2="190" stroke="#0a0a0a" stroke-width="1"/>
  <text x="182" y="208" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">log Compute (FLOPs)</text>
  <text x="14" y="122" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" transform="rotate(-90 14 122)">log Loss</text>
  <path d="M64,175 C90,162 130,140 172,116 S246,82 310,58" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <path d="M64,182 C90,172 130,155 172,135 S246,105 310,85" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="5 3" fill="none"/>
  <text x="314" y="58" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">optimal</text>
  <text x="314" y="85" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">GPT-3</text>
  <circle cx="100" cy="165" r="3" fill="#0a0a0a"/>
  <circle cx="160" cy="138" r="3" fill="#0a0a0a"/>
  <circle cx="220" cy="110" r="3" fill="#0a0a0a"/>
  <circle cx="280" cy="80" r="3" fill="#0a0a0a"/>
  <rect x="44" y="208" width="276" height="26" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1"/>
  <text x="54" y="222" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">N_opt ∝ C^0.49    D_opt ∝ C^0.51    L = E + A/N^α + B/D^β</text>
</svg>`
      }
    ]
  },

  // ── CLIP ───────────────────────────────────────────────────────────────────
  {
    id: 'clip',
    name: 'CLIP',
    fullName: 'Contrastive Language–Image Pre-training',
    tag: 'Multimodal Learning',
    tagline: 'Language as free supervision for visual representations',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- NxN similarity matrix with bright diagonal = matched image-text pairs -->
      <text x="5" y="20" font-family="monospace" font-size="6" fill="currentColor" opacity="0.45">I</text>
      <text x="5" y="32" font-family="monospace" font-size="6" fill="currentColor" opacity="0.45">I</text>
      <text x="5" y="44" font-family="monospace" font-size="6" fill="currentColor" opacity="0.45">I</text>
      <text x="5" y="56" font-family="monospace" font-size="6" fill="currentColor" opacity="0.45">I</text>
      <text x="16" y="10" font-family="monospace" font-size="6" fill="currentColor" opacity="0.45">T</text>
      <text x="28" y="10" font-family="monospace" font-size="6" fill="currentColor" opacity="0.45">T</text>
      <text x="40" y="10" font-family="monospace" font-size="6" fill="currentColor" opacity="0.45">T</text>
      <text x="52" y="10" font-family="monospace" font-size="6" fill="currentColor" opacity="0.45">T</text>
      <rect x="13" y="13" width="10" height="10" fill="currentColor" opacity="0.80" rx="1"/>
      <rect x="25" y="13" width="10" height="10" fill="currentColor" opacity="0.07" rx="1"/>
      <rect x="37" y="13" width="10" height="10" fill="currentColor" opacity="0.05" rx="1"/>
      <rect x="49" y="13" width="10" height="10" fill="currentColor" opacity="0.04" rx="1"/>
      <rect x="13" y="25" width="10" height="10" fill="currentColor" opacity="0.06" rx="1"/>
      <rect x="25" y="25" width="10" height="10" fill="currentColor" opacity="0.82" rx="1"/>
      <rect x="37" y="25" width="10" height="10" fill="currentColor" opacity="0.07" rx="1"/>
      <rect x="49" y="25" width="10" height="10" fill="currentColor" opacity="0.04" rx="1"/>
      <rect x="13" y="37" width="10" height="10" fill="currentColor" opacity="0.04" rx="1"/>
      <rect x="25" y="37" width="10" height="10" fill="currentColor" opacity="0.06" rx="1"/>
      <rect x="37" y="37" width="10" height="10" fill="currentColor" opacity="0.79" rx="1"/>
      <rect x="49" y="37" width="10" height="10" fill="currentColor" opacity="0.06" rx="1"/>
      <rect x="13" y="49" width="10" height="10" fill="currentColor" opacity="0.03" rx="1"/>
      <rect x="25" y="49" width="10" height="10" fill="currentColor" opacity="0.05" rx="1"/>
      <rect x="37" y="49" width="10" height="10" fill="currentColor" opacity="0.08" rx="1"/>
      <rect x="49" y="49" width="10" height="10" fill="currentColor" opacity="0.76" rx="1"/>
      <text x="36" y="70" font-family="monospace" font-size="5.5" fill="currentColor" text-anchor="middle">I · T align</text>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'Language is a free label for everything',
        body: `<p>Training a computer vision model the classical way is expensive: you need humans to hand-label thousands of images per category, and the set of categories is fixed at training time. Want to recognize a new concept? Collect and label more data. The model is brittle — it knows only what it was explicitly taught.</p>
<p>CLIP's insight is blunt: <strong>the internet already paired images with language</strong>. Every photo uploaded with a caption, every product image with a description, every news photo with alt-text — this is free, naturally occurring supervision at massive scale (400M pairs).</p>
<p>Train two encoders — one for images, one for text — so that a photo of a dog and the phrase "a dog" land near each other in a shared embedding space. At inference, zero-shot classify anything by comparing an image embedding against text embeddings of candidate labels. No fine-tuning. No new labels. The vocabulary is unbounded.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Title -->
  <text x="170" y="16" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">from label-supervised → language-supervised</text>
  <!-- Left: old way -->
  <rect x="16" y="28" width="120" height="90" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" opacity="0.5"/>
  <text x="76" y="43" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">standard supervision</text>
  <rect x="28" y="52" width="36" height="26" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1"/>
  <text x="46" y="69" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">image</text>
  <rect x="74" y="57" width="46" height="16" rx="2" fill="#0a0a0a" opacity="0.08" stroke="#0a0a0a" stroke-width="1"/>
  <text x="97" y="69" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">"cat" ← label</text>
  <path d="M64 65 L74 65" stroke="#0a0a0a" stroke-width="1" marker-end="url(#clp)"/>
  <text x="76" y="96" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">fixed categories</text>
  <text x="76" y="108" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">manual, expensive</text>
  <!-- Right: CLIP way -->
  <rect x="148" y="28" width="176" height="90" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="236" y="43" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">CLIP — language supervision</text>
  <rect x="160" y="52" width="36" height="26" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="178" y="69" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">image</text>
  <rect x="206" y="52" width="102" height="26" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="257" y="64" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">"a photo of a cat</text>
  <text x="257" y="75" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">sitting on a mat"</text>
  <path d="M196 65 L206 65" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#clp)"/>
  <text x="236" y="96" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">free, from the internet</text>
  <text x="236" y="108" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">open vocabulary · 400M pairs</text>
  <!-- Zero-shot inference -->
  <rect x="16" y="136" width="308" height="108" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="152" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">zero-shot inference — no fine-tuning</text>
  <rect x="28" y="162" width="40" height="32" rx="2" fill="#f8f8f6" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="48" y="182" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">?</text>
  <path d="M70 178 L98 178" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#clp)"/>
  <rect x="100" y="160" width="72" height="14" rx="2" fill="#f8f8f6" stroke="#0a0a0a" stroke-width="1"/>
  <text x="136" y="171" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">"a photo of a dog"</text>
  <rect x="100" y="177" width="72" height="14" rx="2" fill="#0a0a0a" opacity="0.1" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="136" y="188" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">"a photo of a cat" ✓</text>
  <rect x="100" y="194" width="72" height="14" rx="2" fill="#f8f8f6" stroke="#0a0a0a" stroke-width="1"/>
  <text x="136" y="205" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">"a photo of a car"</text>
  <text x="188" y="168" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">sim: 0.11</text>
  <text x="188" y="185" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" font-weight="500">sim: 0.89 ←</text>
  <text x="188" y="202" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">sim: 0.08</text>
  <text x="170" y="232" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">any label expressible in language — no retraining</text>
  <defs>
    <marker id="clp" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Core Mechanism',
        title: 'Contrastive alignment over an N×N matrix',
        body: `<p>Given a batch of N image-text pairs, CLIP computes <em>all</em> N² pairwise similarities between image and text embeddings, forming an N×N matrix. The N diagonal entries are the correct (matched) pairs; all N²−N off-diagonal entries are incorrect (unmatched) pairs acting as negatives.</p>
<p>The objective is a <strong>symmetric cross-entropy loss</strong> over this matrix — once treating each image as the query to find its text, and once treating each text as the query to find its image. This symmetry ensures both encoders pull matched representations together from both directions simultaneously.</p>
<p>The key advantage over earlier image-text models (which used a predictive objective, directly generating captions): contrastive learning doesn't require generating tokens. It only needs to judge similarity, which scales far more efficiently — a single batch of N=32,768 pairs provides ~10⁹ negative examples.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">N×N similarity matrix (batch of N pairs)</text>
  <!-- Axis labels: images (rows) -->
  <text x="22" y="44" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">I₁</text>
  <text x="22" y="78" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">I₂</text>
  <text x="22" y="112" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">I₃</text>
  <text x="22" y="146" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">I₄</text>
  <!-- Axis labels: texts (cols) -->
  <text x="50" y="24" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">T₁</text>
  <text x="84" y="24" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">T₂</text>
  <text x="118" y="24" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">T₃</text>
  <text x="152" y="24" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">T₄</text>
  <!-- Row 1 -->
  <rect x="32" y="28" width="32" height="32" fill="#0a0a0a" opacity="0.80" rx="1"/>
  <rect x="66" y="28" width="32" height="32" fill="#0a0a0a" opacity="0.06" rx="1"/>
  <rect x="100" y="28" width="32" height="32" fill="#0a0a0a" opacity="0.04" rx="1"/>
  <rect x="134" y="28" width="32" height="32" fill="#0a0a0a" opacity="0.05" rx="1"/>
  <!-- Row 2 -->
  <rect x="32" y="62" width="32" height="32" fill="#0a0a0a" opacity="0.07" rx="1"/>
  <rect x="66" y="62" width="32" height="32" fill="#0a0a0a" opacity="0.82" rx="1"/>
  <rect x="100" y="62" width="32" height="32" fill="#0a0a0a" opacity="0.08" rx="1"/>
  <rect x="134" y="62" width="32" height="32" fill="#0a0a0a" opacity="0.04" rx="1"/>
  <!-- Row 3 -->
  <rect x="32" y="96" width="32" height="32" fill="#0a0a0a" opacity="0.05" rx="1"/>
  <rect x="66" y="96" width="32" height="32" fill="#0a0a0a" opacity="0.06" rx="1"/>
  <rect x="100" y="96" width="32" height="32" fill="#0a0a0a" opacity="0.79" rx="1"/>
  <rect x="134" y="96" width="32" height="32" fill="#0a0a0a" opacity="0.07" rx="1"/>
  <!-- Row 4 -->
  <rect x="32" y="130" width="32" height="32" fill="#0a0a0a" opacity="0.04" rx="1"/>
  <rect x="66" y="130" width="32" height="32" fill="#0a0a0a" opacity="0.05" rx="1"/>
  <rect x="100" y="130" width="32" height="32" fill="#0a0a0a" opacity="0.08" rx="1"/>
  <rect x="134" y="130" width="32" height="32" fill="#0a0a0a" opacity="0.77" rx="1"/>
  <!-- Diagonal label -->
  <text x="48" y="48" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#f8f8f6" text-anchor="middle">+</text>
  <text x="82" y="82" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#f8f8f6" text-anchor="middle">+</text>
  <text x="116" y="116" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#f8f8f6" text-anchor="middle">+</text>
  <text x="150" y="150" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#f8f8f6" text-anchor="middle">+</text>
  <!-- Annotations right side -->
  <text x="182" y="44" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">diagonal: N matched</text>
  <text x="182" y="56" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">pairs — maximize sim</text>
  <path d="M178 44 L168 44" stroke="#0a0a0a" stroke-width="1" marker-end="url(#clm)"/>
  <text x="182" y="110" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">N²−N negatives</text>
  <text x="182" y="122" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">minimize sim</text>
  <path d="M178 112 L166 96" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.5" marker-end="url(#clm)"/>
  <!-- Symmetric loss box -->
  <rect x="16" y="174" width="308" height="72" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="191" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">symmetric cross-entropy</text>
  <text x="170" y="208" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">L = ½ · (L_image→text  +  L_text→image)</text>
  <text x="170" y="226" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">each row is a softmax over N texts (image query)</text>
  <text x="170" y="238" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">each column is a softmax over N images (text query)</text>
  <defs>
    <marker id="clm" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Architecture',
        title: 'Dual encoder, joint embedding space',
        body: `<p>CLIP jointly trains two encoders. The <strong>image encoder</strong> is either a ResNet (modified with attention pooling) or a Vision Transformer (ViT-L/14 in the strongest published variant). The <strong>text encoder</strong> is a 12-layer Transformer with masked self-attention (causal), operating on BPE-tokenized text up to 76 tokens. The [EOS] token's representation serves as the text embedding.</p>
<p>Both encoders project into a shared <em>d</em>-dimensional embedding space via learned linear projections W_I and W_T. Embeddings are L2-normalized before computing similarity, so all comparisons are cosine similarities in the range [−1, 1].</p>
<p>A scalar <strong>temperature τ</strong> (initialized to ln(1/0.07) ≈ 2.65, learned during training) scales the logits before softmax — equivalent to dividing by τ. This controls how sharply the model distinguishes similar pairs. Notably, the temperature is learned end-to-end, and the authors clip it to prevent training instability from τ collapsing to zero.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">CLIP dual-encoder architecture</text>
  <!-- IMAGE PATH (top) -->
  <rect x="16" y="28" width="44" height="28" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="38" y="42" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">image</text>
  <text x="38" y="51" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">H×W×3</text>
  <path d="M60 42 L76 42" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#cla)"/>
  <rect x="78" y="26" width="72" height="32" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="114" y="41" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">Image Encoder</text>
  <text x="114" y="52" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">ViT-L/14 or ResNet</text>
  <path d="M150 42 L166 42" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#cla)"/>
  <rect x="168" y="26" width="52" height="32" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="194" y="41" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">W_I</text>
  <text x="194" y="52" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">projection</text>
  <path d="M220 42 L244 42" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#cla)"/>
  <rect x="246" y="30" width="76" height="24" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="284" y="43" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">ê_I  (L2 norm)</text>
  <!-- TEXT PATH (bottom) -->
  <rect x="16" y="178" width="44" height="28" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="38" y="191" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">"a photo</text>
  <text x="38" y="201" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">of a dog"</text>
  <path d="M60 192 L76 192" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#cla)"/>
  <rect x="78" y="176" width="72" height="32" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="114" y="191" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">Text Encoder</text>
  <text x="114" y="202" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">Transformer  [EOS]</text>
  <path d="M150 192 L166 192" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#cla)"/>
  <rect x="168" y="176" width="52" height="32" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="194" y="191" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">W_T</text>
  <text x="194" y="202" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">projection</text>
  <path d="M220 192 L244 192" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#cla)"/>
  <rect x="246" y="180" width="76" height="24" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="284" y="195" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">ê_T  (L2 norm)</text>
  <!-- Shared space + similarity -->
  <path d="M284 54 L284 100" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#cla)"/>
  <path d="M284 180 L284 134" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#cla)"/>
  <rect x="236" y="100" width="88" height="34" rx="2" stroke="#0a0a0a" stroke-width="2" fill="#eeeeea"/>
  <text x="280" y="116" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">cos_sim / τ</text>
  <text x="280" y="127" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">ê_I · ê_T  (scalar)</text>
  <!-- shared space label -->
  <rect x="16" y="98" width="208" height="40" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" opacity="0.5"/>
  <text x="120" y="115" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">shared d-dimensional</text>
  <text x="120" y="127" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">embedding space  ℝᵈ</text>
  <!-- temperature note -->
  <text x="170" y="158" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">τ  learned · init ln(1/0.07) ≈ 2.65 · clipped to prevent collapse</text>
  <defs>
    <marker id="cla" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Mathematics',
        title: 'InfoNCE objective and zero-shot transfer',
        body: `<p>For a batch of N pairs, let <em>s_{ij} = ê_I_i · ê_T_j / τ</em> be the scaled cosine similarity. The symmetric InfoNCE loss is:</p>
<div class="math-block">L = −(1/2N) Σᵢ [ log exp(sᵢᵢ) / Σⱼ exp(sᵢⱼ)
                  + log exp(sᵢᵢ) / Σⱼ exp(sⱼᵢ) ]</div>
<p>The first term classifies each image to its paired text (row softmax); the second classifies each text to its paired image (column softmax). Minimizing this is equivalent to maximizing mutual information between the two modalities — specifically, a lower bound known as <strong>InfoNCE</strong>.</p>
<p><strong>Zero-shot classification</strong> on a K-class dataset: generate K prompt embeddings {ê_T_k} using a template such as <em>"a photo of a {classname}"</em>. For a test image with embedding ê_I, predict:</p>
<div class="math-block">p(y=k | image) = exp(ê_I · ê_T_k / τ) / Σⱼ exp(ê_I · ê_T_j / τ)</div>
<p>On ImageNet this achieves 76.2% top-1 accuracy — matching a supervised ResNet-50 trained on 1.28M labeled examples. Crucially, CLIP is far more robust to distribution shift: on ImageNet-V2, ImageNet-Sketch, and ObjectNet, it outperforms supervised models by +5–15% because language supervision encourages representations that generalize beyond dataset-specific textures and artifacts.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">zero-shot classification pipeline</text>
  <!-- Test image -->
  <rect x="16" y="28" width="48" height="40" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="40" y="51" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">test</text>
  <text x="40" y="62" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">image</text>
  <path d="M64 48 L84 48" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#czs)"/>
  <rect x="86" y="34" width="60" height="28" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="116" y="51" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">Image Enc.</text>
  <path d="M146 48 L166 48" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#czs)"/>
  <rect x="168" y="36" width="52" height="24" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="194" y="51" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">ê_I</text>
  <!-- Class prompts -->
  <text x="40" y="98" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">class labels</text>
  <text x="40" y="110" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">→ prompts</text>
  <rect x="62" y="104" width="88" height="12" rx="1" fill="#f8f8f6" stroke="#0a0a0a" stroke-width="0.8"/>
  <text x="106" y="113" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">"a photo of a cat"</text>
  <rect x="62" y="118" width="88" height="12" rx="1" fill="#f8f8f6" stroke="#0a0a0a" stroke-width="0.8"/>
  <text x="106" y="127" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">"a photo of a dog"</text>
  <rect x="62" y="132" width="88" height="12" rx="1" fill="#f8f8f6" stroke="#0a0a0a" stroke-width="0.8"/>
  <text x="106" y="141" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">"a photo of a car"</text>
  <path d="M150 121 L166 110" stroke="#0a0a0a" stroke-width="1" marker-end="url(#czs)"/>
  <path d="M150 124 L166 124" stroke="#0a0a0a" stroke-width="1" marker-end="url(#czs)"/>
  <path d="M150 127 L166 136" stroke="#0a0a0a" stroke-width="1" marker-end="url(#czs)"/>
  <rect x="168" y="98" width="52" height="14" rx="2" stroke="#0a0a0a" stroke-width="1"/>
  <text x="194" y="109" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">ê_T (cat)</text>
  <rect x="168" y="115" width="52" height="14" rx="2" stroke="#0a0a0a" stroke-width="1"/>
  <text x="194" y="126" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">ê_T (dog)</text>
  <rect x="168" y="132" width="52" height="14" rx="2" stroke="#0a0a0a" stroke-width="1"/>
  <text x="194" y="143" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">ê_T (car)</text>
  <!-- Dot products -->
  <path d="M220 48 L242 48 L242 108" stroke="#0a0a0a" stroke-width="1" marker-end="url(#czs)"/>
  <path d="M220 122 L242 122" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.5" marker-end="url(#czs)"/>
  <path d="M220 139 L242 139 L242 136" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.5" marker-end="url(#czs)"/>
  <rect x="244" y="100" width="52" height="14" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="270" y="111" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">0.89  ← ✓</text>
  <rect x="244" y="116" width="52" height="14" rx="2" stroke="#0a0a0a" stroke-width="1"/>
  <text x="270" y="127" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">0.11</text>
  <rect x="244" y="132" width="52" height="14" rx="2" stroke="#0a0a0a" stroke-width="1"/>
  <text x="270" y="143" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">0.06</text>
  <text x="246" y="96" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">ê_I · ê_T / τ</text>
  <!-- softmax arrow -->
  <path d="M296 122 L314 122" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#czs)"/>
  <text x="300" y="119" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888">softmax</text>
  <text x="318" y="118" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">cat</text>
  <!-- Robustness note + ImageNet result -->
  <rect x="16" y="166" width="308" height="80" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="5 3" fill="#eeeeea"/>
  <text x="26" y="183" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a">ImageNet zero-shot:  76.2% top-1</text>
  <text x="26" y="198" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#555">≈ supervised ResNet-50 (76.5%) — no labeled data</text>
  <text x="26" y="216" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a">Distribution robustness (+5–15% vs supervised):</text>
  <text x="26" y="230" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555">ImageNet-V2  ·  ImageNet-Sketch  ·  ObjectNet</text>
  <text x="26" y="241" font-family="'JetBrains Mono',monospace" font-size="7" fill="#aaa">language supervision avoids dataset-specific texture shortcuts</text>
  <defs>
    <marker id="czs" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      }
    ]
  },

  // ── SIGLIP ─────────────────────────────────────────────────────────────────
  {
    id: 'siglip',
    name: 'SigLIP',
    fullName: 'Sigmoid Loss for Language-Image Pre-Training',
    tag: 'Multimodal Learning',
    tagline: 'Replace the softmax with a per-pair sigmoid — no global normalization needed',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- axes -->
      <line x1="10" y1="58" x2="62" y2="58" stroke="currentColor" stroke-width="1" opacity="0.5"/>
      <line x1="10" y1="10" x2="10" y2="58" stroke="currentColor" stroke-width="1" opacity="0.5"/>
      <!-- sigmoid S-curve -->
      <path d="M10,56 C18,56 22,52 28,45 S40,22 46,17 S56,12 62,11" stroke="currentColor" stroke-width="1.8" fill="none"/>
      <!-- decision boundary at 0.5 -->
      <line x1="10" y1="34" x2="62" y2="34" stroke="currentColor" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.35"/>
      <!-- matched pair (y=+1, high sim) -->
      <circle cx="54" cy="13" r="3.5" fill="currentColor" opacity="0.85"/>
      <text x="58" y="12" font-family="monospace" font-size="5" fill="currentColor" opacity="0.7">+1</text>
      <!-- unmatched pair (y=-1, low sim) -->
      <circle cx="18" cy="55" r="3.5" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.5"/>
      <text x="22" y="54" font-family="monospace" font-size="5" fill="currentColor" opacity="0.5">-1</text>
      <!-- label -->
      <text x="36" y="70" font-family="monospace" font-size="5.5" fill="currentColor" text-anchor="middle">σ(t·sim + b)</text>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'Swap the leaderboard for a yes/no question',
        body: `<p>CLIP's softmax loss asks: <em>"Given this image, which of the N texts in the batch is the right match?"</em> That framing demands a global view — the model must see all N candidates simultaneously to compute the softmax denominator. Larger batch → more negatives → better signal. But it also means training is sensitive to batch size, and small batches give weak gradients.</p>
<p>SigLIP reframes the problem: <em>"Does this specific image match this specific text — yes or no?"</em> Each of the N² pairs in a batch is independently evaluated as a binary classification. Matched pairs (y = +1) are pushed toward probability 1; unmatched pairs (y = −1) toward probability 0. No comparison across pairs. No normalization.</p>
<p>The payoff: SigLIP significantly outperforms CLIP at small batch sizes (4k–8k) where CLIP's softmax is starved of negatives. Both converge by ~32k. The model also trains more stably on distributed hardware because each device can compute its chunk of the loss without waiting for a global AllGather.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">softmax (CLIP) vs sigmoid (SigLIP)</text>
  <!-- LEFT: CLIP softmax -->
  <rect x="16" y="24" width="142" height="110" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" opacity="0.6"/>
  <text x="87" y="38" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">CLIP — softmax</text>
  <!-- N×N visible to softmax -->
  <text x="32" y="54" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">image</text>
  <rect x="28" y="58" width="22" height="14" rx="1" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1"/>
  <text x="39" y="69" font-family="'JetBrains Mono',monospace" font-size="6" fill="#0a0a0a" text-anchor="middle">I₁</text>
  <text x="60" y="54" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">all texts</text>
  <rect x="56" y="58" width="16" height="14" rx="1" fill="#0a0a0a" opacity="0.75"/>
  <rect x="74" y="58" width="16" height="14" rx="1" fill="#0a0a0a" opacity="0.08"/>
  <rect x="92" y="58" width="16" height="14" rx="1" fill="#0a0a0a" opacity="0.06"/>
  <rect x="110" y="58" width="16" height="14" rx="1" fill="#0a0a0a" opacity="0.05"/>
  <path d="M87 74 L87 84" stroke="#0a0a0a" stroke-width="1" marker-end="url(#sgl)"/>
  <rect x="54" y="86" width="66" height="18" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="87" y="99" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">softmax over N</text>
  <text x="87" y="120" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">needs full batch</text>
  <text x="87" y="130" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">to normalize</text>
  <!-- RIGHT: SigLIP sigmoid -->
  <rect x="182" y="24" width="142" height="110" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="253" y="38" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">SigLIP — sigmoid</text>
  <!-- pairs evaluated independently -->
  <rect x="192" y="50" width="52" height="14" rx="1" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="218" y="61" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">(I₁, T₁)  y=+1</text>
  <rect x="192" y="67" width="52" height="14" rx="1" stroke="#0a0a0a" stroke-width="0.8"/>
  <text x="218" y="78" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">(I₁, T₂)  y=−1</text>
  <rect x="192" y="84" width="52" height="14" rx="1" stroke="#0a0a0a" stroke-width="0.8"/>
  <text x="218" y="95" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">(I₁, T₃)  y=−1</text>
  <text x="218" y="109" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">⋮</text>
  <path d="M250 62 L270 62" stroke="#0a0a0a" stroke-width="1" marker-end="url(#sgl)"/>
  <path d="M250 74 L270 74" stroke="#0a0a0a" stroke-width="0.8" opacity="0.5" marker-end="url(#sgl)"/>
  <path d="M250 91 L270 91" stroke="#0a0a0a" stroke-width="0.8" opacity="0.5" marker-end="url(#sgl)"/>
  <text x="275" y="65" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">σ → 1</text>
  <text x="275" y="77" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">σ → 0</text>
  <text x="275" y="94" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">σ → 0</text>
  <text x="253" y="126" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">each pair independent</text>
  <text x="253" y="130" font-family="'JetBrains Mono',monospace" font-size="1" fill="#555" text-anchor="middle"> </text>
  <!-- Batch size comparison -->
  <rect x="16" y="148" width="308" height="96" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1"/>
  <text x="170" y="164" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">zero-shot ImageNet accuracy vs batch size</text>
  <!-- axes -->
  <line x1="36" y1="228" x2="308" y2="228" stroke="#0a0a0a" stroke-width="1"/>
  <line x1="36" y1="172" x2="36" y2="228" stroke="#0a0a0a" stroke-width="1"/>
  <text x="36" y="243" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">4k</text>
  <text x="100" y="243" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">8k</text>
  <text x="164" y="243" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">16k</text>
  <text x="228" y="243" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">32k</text>
  <text x="295" y="243" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">256k</text>
  <!-- SigLIP line (solid, higher at small batches) -->
  <path d="M36,222 C70,210 100,195 164,185 S228,180 295,179" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <!-- CLIP line (dashed, lower at small batches) -->
  <path d="M36,226 C70,222 100,216 164,190 S228,181 295,180" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="5 3" fill="none"/>
  <text x="300" y="177" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a">SigLIP</text>
  <text x="300" y="188" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">CLIP</text>
  <defs>
    <marker id="sgl" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Core Mechanism',
        title: 'Binary CE per pair, with a negative-biased prior',
        body: `<p>For a batch of N image-text pairs, SigLIP constructs all N² combinations and assigns label y_ij = +1 if i = j (matched pair) and y_ij = −1 otherwise. The loss is:</p>
<div class="math-block">L = −(1/N²) Σᵢⱼ log σ(y_ij · (t · x̂_i · ẑ_j + b))</div>
<p>where σ is sigmoid, t is a learned temperature, b is a learned bias, and x̂, ẑ are L2-normalized image and text embeddings. The sigmoid maps any real value to (0,1), acting as a probability — no denominator, no normalization across the batch.</p>
<p>The <strong>bias term b</strong> is initialized large and negative (e.g. −10). This gives the model a correct starting prior: out of N² pairs, N²−N are negative. Without b, the sigmoid starts near 0.5 for all pairs — a wildly wrong assumption. With b ≈ −10, initial probability of a match is σ(−10) ≈ 0.00005, which is far closer to the true ~1/N prior.</p>
<p>The temperature t is initialized to ~10 (the inverse of CLIP's 0.07). Together, t and b are learned end-to-end and adapt as the representations sharpen during training.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">per-pair sigmoid loss computation</text>
  <!-- Single pair diagram -->
  <rect x="16" y="26" width="42" height="26" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="37" y="43" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">x̂_i</text>
  <rect x="16" y="62" width="42" height="26" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="37" y="79" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">ẑ_j</text>
  <path d="M58 39 L76 55" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#sgm)"/>
  <path d="M58 75 L76 62" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#sgm)"/>
  <rect x="78" y="46" width="50" height="24" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="103" y="61" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">x̂·ẑ</text>
  <path d="M128 58 L144 58" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#sgm)"/>
  <rect x="146" y="46" width="62" height="24" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="177" y="59" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">t · x̂·ẑ + b</text>
  <path d="M208 58 L224 58" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#sgm)"/>
  <rect x="226" y="40" width="42" height="36" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="247" y="62" font-family="'JetBrains Mono',monospace" font-size="14" fill="#0a0a0a" text-anchor="middle">σ</text>
  <path d="M268 58 L284 58" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#sgm)"/>
  <text x="294" y="55" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">p̂_ij</text>
  <text x="294" y="65" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">∈(0,1)</text>
  <!-- y label -->
  <text x="16" y="106" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">y_ij = +1 if matched,  −1 if not</text>
  <text x="16" y="120" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#555">loss = −log σ(y_ij · (t · x̂_i·ẑ_j + b))</text>
  <!-- Bias init box -->
  <rect x="16" y="136" width="148" height="58" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" fill="#eeeeea"/>
  <text x="90" y="152" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">bias b init ≈ −10</text>
  <text x="90" y="166" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">σ(−10) ≈ 0.00005</text>
  <text x="90" y="180" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">≈ true prior 1/N</text>
  <text x="90" y="186" font-family="'JetBrains Mono',monospace" font-size="1" fill="#555" text-anchor="middle"> </text>
  <!-- Temperature init box -->
  <rect x="176" y="136" width="148" height="58" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" fill="#eeeeea"/>
  <text x="250" y="152" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">temperature t init ≈ 10</text>
  <text x="250" y="166" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">(cf. CLIP: 1/τ ≈ 14)</text>
  <text x="250" y="180" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">both t, b are learned</text>
  <!-- N² pairs note -->
  <rect x="16" y="204" width="308" height="46" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#f8f8f6"/>
  <text x="170" y="220" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">batch of N pairs  →  N² evaluations</text>
  <text x="170" y="234" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">N matched (diagonal)  +  N²−N unmatched (off-diagonal)</text>
  <text x="170" y="244" font-family="'JetBrains Mono',monospace" font-size="7" fill="#aaa" text-anchor="middle">all independent — no softmax denominator</text>
  <defs>
    <marker id="sgm" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Architecture',
        title: 'Chunked loss across devices — no AllGather needed',
        body: `<p>CLIP's softmax loss requires gathering <em>all</em> N image and text embeddings onto every device before computing the NxN similarity matrix and normalizing. On a TPU pod this means an expensive AllGather communication step, and memory scales as O(N·d) per device before any matrix multiply.</p>
<p>Because SigLIP's loss is a sum of independent per-pair terms, the batch can be split into chunks across devices. Device k holds a slice of image embeddings and exchanges text embedding chunks with other devices in a ring. Each exchange computes a partial loss contribution and accumulates it — <strong>no device ever needs the full N embeddings simultaneously</strong>. Memory per device stays O(chunk_size · d).</p>
<p>The encoder architecture is identical to CLIP: a ViT image encoder and a Transformer text encoder with linear projection heads into a shared L2-normalized embedding space. SigLIP is purely a loss substitution — any CLIP architecture can be trained with the sigmoid objective. In practice the authors use ViT-B/16, ViT-L/16 and the larger <strong>ViT-SO400M</strong> (a 400M-parameter ViT trained with sigmoid loss to reach 82%+ ImageNet zero-shot).</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">distributed loss: chunked ring vs AllGather</text>
  <!-- CLIP side: AllGather -->
  <text x="80" y="30" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">CLIP (softmax)</text>
  <rect x="18" y="38" width="36" height="22" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.2"/>
  <text x="36" y="53" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">Dev 1</text>
  <rect x="62" y="38" width="36" height="22" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.2"/>
  <text x="80" y="53" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">Dev 2</text>
  <rect x="106" y="38" width="36" height="22" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.2"/>
  <text x="124" y="53" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">Dev 3</text>
  <!-- AllGather arrows (all to all) -->
  <path d="M54 46 L62 46" stroke="#0a0a0a" stroke-width="1" marker-end="url(#sgd)"/>
  <path d="M62 50 L54 50" stroke="#0a0a0a" stroke-width="1" marker-end="url(#sgd)"/>
  <path d="M98 46 L106 46" stroke="#0a0a0a" stroke-width="1" marker-end="url(#sgd)"/>
  <path d="M106 50 L98 50" stroke="#0a0a0a" stroke-width="1" marker-end="url(#sgd)"/>
  <rect x="30" y="72" width="112" height="22" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="86" y="87" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">full N embeds on every device</text>
  <path d="M36 94 L36 106" stroke="#0a0a0a" stroke-width="1" opacity="0.5" marker-end="url(#sgd)"/>
  <path d="M124 94 L124 106" stroke="#0a0a0a" stroke-width="1" opacity="0.5" marker-end="url(#sgd)"/>
  <rect x="18" y="108" width="130" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="83" y="122" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">N×N matrix → softmax norm</text>
  <text x="80" y="145" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">O(N) memory per device</text>
  <text x="80" y="156" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">expensive AllGather</text>
  <!-- SigLIP side: ring chunked -->
  <text x="260" y="30" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">SigLIP (sigmoid)</text>
  <rect x="192" y="38" width="36" height="22" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="210" y="53" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">Dev 1</text>
  <rect x="236" y="38" width="36" height="22" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="254" y="53" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">Dev 2</text>
  <rect x="280" y="38" width="36" height="22" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="298" y="53" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">Dev 3</text>
  <!-- ring arrows -->
  <path d="M228 44 L236 44" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#sgd)"/>
  <path d="M272 44 L280 44" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#sgd)"/>
  <path d="M298 60 C 298 68 210 68 210 60" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.5" marker-end="url(#sgd)"/>
  <text x="254" y="76" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">chunk ring</text>
  <!-- local loss per chunk -->
  <rect x="192" y="86" width="130" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="257" y="100" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">local sigmoid loss per chunk</text>
  <path d="M257 106 L257 118" stroke="#0a0a0a" stroke-width="1" marker-end="url(#sgd)"/>
  <rect x="204" y="120" width="106" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="257" y="134" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">accumulate → sum</text>
  <text x="260" y="156" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">O(chunk) memory</text>
  <text x="260" y="167" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">no full-batch gather</text>
  <!-- divider -->
  <line x1="170" y1="28" x2="170" y2="170" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="4 3" opacity="0.3"/>
  <!-- Encoder note -->
  <rect x="16" y="182" width="308" height="68" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="198" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">architecture is identical to CLIP</text>
  <text x="170" y="212" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">ViT image encoder  ·  Transformer text encoder  ·  linear projections</text>
  <text x="170" y="226" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">SigLIP is a loss substitution — any CLIP backbone works</text>
  <text x="170" y="240" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">ViT-SO400M  →  82%+ ImageNet zero-shot</text>
  <defs>
    <marker id="sgd" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Mathematics',
        title: 'Loss derivation, sigmoid vs softmax, and scaling',
        body: `<p>The full SigLIP objective over a batch of N pairs, with all N² label assignments y_ij ∈ {−1, +1}:</p>
<div class="math-block">L = −(1/N²) Σᵢ Σⱼ log σ(y_ij · (t · x̂_i · ẑ_j + b))

y_ij = +1  if i = j   (matched)
y_ij = −1  if i ≠ j  (unmatched)</div>
<p>This is equivalent to binary cross-entropy over N² independent Bernoulli variables. Compared to CLIP's softmax InfoNCE — which is a log-sum-exp over all j for each anchor i — the sigmoid formulation has <strong>no coupling between pairs</strong>. The gradient for pair (i,j) is independent of every other pair's similarity score.</p>
<p>The bias b absorbs the imbalance between positive and negative examples. At convergence, b settles to approximately −log(N−1), the log-odds of the true class prior. This is a form of <strong>prior calibration</strong> learned end-to-end.</p>
<p><strong>SigLiT</strong> (Sigmoid Loss with locked image Tower) freezes a pre-trained ViT and trains only the text encoder and projection with the sigmoid loss — achieving 84.5% ImageNet zero-shot accuracy in 2 days on 4 TPU v4 chips. Training a full SigLIP model from scratch with 32 TPU v4 chips for 5 days reaches 73.4%. Batch sizes beyond 32k yield diminishing returns; the sigmoid loss with small batches is much stronger than CLIP's softmax at equal batch size.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">sigmoid vs softmax gradient structure</text>
  <!-- Sigmoid loss grad box -->
  <rect x="16" y="24" width="146" height="90" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="89" y="40" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">SigLIP gradient</text>
  <text x="89" y="56" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">∂L/∂(x̂_i·ẑ_j) = y_ij·t·(σ − 1_[y=+1])</text>
  <text x="89" y="72" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">depends only on</text>
  <text x="89" y="84" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">the pair (i, j)</text>
  <text x="89" y="107" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">no cross-pair coupling</text>
  <!-- Softmax loss grad box -->
  <rect x="178" y="24" width="146" height="90" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" opacity="0.7"/>
  <text x="251" y="40" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">CLIP gradient</text>
  <text x="251" y="56" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">∂L/∂(x̂_i·ẑ_j) = t·(p_ij − 1_[y=+1])</text>
  <text x="251" y="72" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">p_ij = softmax over all j</text>
  <text x="251" y="84" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">requires full batch</text>
  <text x="251" y="107" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa" text-anchor="middle">all-pair normalization</text>
  <!-- Bias convergence -->
  <rect x="16" y="122" width="308" height="44" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#f8f8f6"/>
  <text x="170" y="138" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">bias convergence:  b* ≈ −log(N − 1)</text>
  <text x="170" y="153" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">encodes class prior — model learns that N²−N pairs are negative</text>
  <!-- Results table -->
  <rect x="16" y="176" width="308" height="76" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="192" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">key results (ImageNet zero-shot top-1)</text>
  <line x1="16" y1="198" x2="324" y2="198" stroke="#0a0a0a" stroke-width="0.5" opacity="0.4"/>
  <text x="30" y="211" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">SigLiT  (frozen ViT, text enc. only)</text>
  <text x="290" y="211" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">84.5%</text>
  <text x="30" y="224" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555">SigLIP from scratch  (32 TPUv4, 5 days)</text>
  <text x="290" y="224" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">73.4%</text>
  <text x="30" y="237" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555">ViT-SO400M  (SigLIP trained, larger model)</text>
  <text x="290" y="237" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">82%+</text>
  <text x="30" y="247" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa">batch size &gt; 32k yields diminishing returns for both methods</text>
</svg>`
      }
    ]
  },

  // ── BYOL ───────────────────────────────────────────────────────────────────
  {
    id: 'byol',
    name: 'BYOL',
    fullName: 'Bootstrap Your Own Latent',
    tag: 'Self-Supervised Learning',
    tagline: 'A network that teaches itself — no negative pairs required',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Online network: encoder + projector + predictor (solid) -->
      <rect x="4" y="16" width="22" height="36" rx="2" stroke="currentColor" stroke-width="1.5"/>
      <text x="15" y="27" font-family="monospace" font-size="5.5" fill="currentColor" text-anchor="middle">enc</text>
      <line x1="6" y1="31" x2="24" y2="31" stroke="currentColor" stroke-width="0.7" opacity="0.35"/>
      <text x="15" y="39" font-family="monospace" font-size="5.5" fill="currentColor" text-anchor="middle">proj</text>
      <line x1="6" y1="43" x2="24" y2="43" stroke="currentColor" stroke-width="0.7" opacity="0.35"/>
      <text x="15" y="50" font-family="monospace" font-size="5.5" fill="currentColor" text-anchor="middle">pred</text>
      <text x="15" y="12" font-family="monospace" font-size="5" fill="currentColor" text-anchor="middle" opacity="0.6">θ online</text>
      <!-- Target network: encoder + projector only (dashed) -->
      <rect x="46" y="16" width="22" height="26" rx="2" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2" opacity="0.7"/>
      <text x="57" y="27" font-family="monospace" font-size="5.5" fill="currentColor" text-anchor="middle" opacity="0.7">enc</text>
      <line x1="48" y1="31" x2="66" y2="31" stroke="currentColor" stroke-width="0.7" opacity="0.25"/>
      <text x="57" y="39" font-family="monospace" font-size="5.5" fill="currentColor" text-anchor="middle" opacity="0.7">proj</text>
      <text x="57" y="12" font-family="monospace" font-size="5" fill="currentColor" text-anchor="middle" opacity="0.5">ξ target</text>
      <!-- EMA arrow from online to target -->
      <path d="M26 24 C 36 14 36 14 46 24" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none" marker-end="url(#byl)" opacity="0.55"/>
      <text x="36" y="13" font-family="monospace" font-size="4.5" fill="currentColor" text-anchor="middle" opacity="0.6">EMA</text>
      <!-- Prediction arrow: from pred output toward target proj output -->
      <path d="M26 52 L57 44" stroke="currentColor" stroke-width="1.3" fill="none" marker-end="url(#byl)"/>
      <!-- no negatives label -->
      <text x="36" y="70" font-family="monospace" font-size="5.5" fill="currentColor" text-anchor="middle">no negatives</text>
      <defs>
        <marker id="byl" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L4,2.5 z" fill="currentColor"/>
        </marker>
      </defs>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'A student that bootstraps from its own slow shadow',
        body: `<p>Every contrastive method before BYOL shared the same assumption: to learn what something <em>is</em>, you must also show the model what it <em>is not</em>. SimCLR, MoCo, CLIP — all require negative pairs. The question DeepMind asked in 2020: what if you didn't?</p>
<p>BYOL keeps two copies of the same network — an <strong>online</strong> network (actively trained) and a <strong>target</strong> network (a slow exponential moving average of the online weights). Given two augmented views of the same image, the online network is trained to <strong>predict what the target network would output</strong> for the other view. The target never receives gradients — it simply drifts slowly toward the online network.</p>
<p>The result is a self-bootstrapping loop: the online network chases a target that is itself a lagged version of the online network. No negatives, no large batches needed. It achieves higher linear-probe accuracy on ImageNet than SimCLR with far less sensitivity to augmentation choices.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">contrastive (SimCLR) vs self-bootstrapping (BYOL)</text>
  <!-- SimCLR: needs negatives from different images -->
  <rect x="16" y="24" width="140" height="108" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" opacity="0.6"/>
  <text x="86" y="38" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">SimCLR — needs negatives</text>
  <!-- anchor image -->
  <rect x="26" y="48" width="30" height="22" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.2"/>
  <text x="41" y="63" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">img A</text>
  <!-- negative images -->
  <rect x="66" y="48" width="22" height="14" rx="1" fill="#0a0a0a" opacity="0.07" stroke="#0a0a0a" stroke-width="0.8"/>
  <text x="77" y="58" font-family="'JetBrains Mono',monospace" font-size="5.5" fill="#888" text-anchor="middle">B</text>
  <rect x="90" y="48" width="22" height="14" rx="1" fill="#0a0a0a" opacity="0.07" stroke="#0a0a0a" stroke-width="0.8"/>
  <text x="101" y="58" font-family="'JetBrains Mono',monospace" font-size="5.5" fill="#888" text-anchor="middle">C</text>
  <rect x="114" y="48" width="22" height="14" rx="1" fill="#0a0a0a" opacity="0.07" stroke="#0a0a0a" stroke-width="0.8"/>
  <text x="125" y="58" font-family="'JetBrains Mono',monospace" font-size="5.5" fill="#888" text-anchor="middle">D…</text>
  <text x="86" y="83" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">push apart ↔ pull together</text>
  <text x="86" y="98" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">needs large batch of</text>
  <text x="86" y="110" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">diverse negatives</text>
  <text x="86" y="124" font-family="'JetBrains Mono',monospace" font-size="6" fill="#aaa" text-anchor="middle">sensitive to batch size &amp; augmentation</text>
  <!-- BYOL: only same image, two views -->
  <rect x="184" y="24" width="140" height="108" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="254" y="38" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">BYOL — no negatives</text>
  <!-- single image, two views -->
  <rect x="224" y="48" width="60" height="22" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="254" y="63" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">same image x</text>
  <path d="M234 70 L220 84" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#byi)"/>
  <path d="M274 70 L288 84" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#byi)"/>
  <rect x="198" y="86" width="36" height="16" rx="2" fill="#f8f8f6" stroke="#0a0a0a" stroke-width="1.2"/>
  <text x="216" y="97" font-family="'JetBrains Mono',monospace" font-size="6" fill="#0a0a0a" text-anchor="middle">view v</text>
  <rect x="270" y="86" width="36" height="16" rx="2" fill="#f8f8f6" stroke="#0a0a0a" stroke-width="1.2"/>
  <text x="288" y="97" font-family="'JetBrains Mono',monospace" font-size="6" fill="#0a0a0a" text-anchor="middle">view v'</text>
  <text x="254" y="118" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">online predicts target</text>
  <text x="254" y="124" font-family="'JetBrains Mono',monospace" font-size="1" fill="#555" text-anchor="middle"> </text>
  <!-- result comparison -->
  <rect x="16" y="146" width="308" height="100" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1"/>
  <text x="170" y="162" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">ImageNet linear evaluation — ResNet-50</text>
  <line x1="16" y1="168" x2="324" y2="168" stroke="#0a0a0a" stroke-width="0.5" opacity="0.4"/>
  <text x="30" y="182" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#555">SimCLR</text>
  <text x="300" y="182" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#555" text-anchor="middle">69.3%</text>
  <text x="30" y="198" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">BYOL</text>
  <text x="300" y="198" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">74.3%</text>
  <text x="30" y="214" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">Supervised baseline</text>
  <text x="300" y="214" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">76.5%</text>
  <text x="30" y="230" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">BYOL ResNet-50 (4×)</text>
  <text x="300" y="230" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">78.6%  ≈ supervised</text>
  <text x="30" y="241" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa">all numbers: top-1 accuracy, linear probe protocol</text>
  <defs>
    <marker id="byi" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Core Mechanism',
        title: 'Online predicts target — asymmetry prevents collapse',
        body: `<p>BYOL's forward pass: image x is augmented into two views v and v'. View v feeds the <strong>online network</strong> — encoder f_θ, projector g_θ, and a small <strong>predictor MLP q_θ</strong> — producing a prediction ẑ_θ. View v' feeds the <strong>target network</strong> — the same encoder/projector architecture, weights ξ, but <em>no predictor</em> — producing z'_ξ.</p>
<p>The loss is the MSE between L2-normalized ẑ_θ and z'_ξ, with a <strong>stop-gradient</strong> on the target branch. Gradients update only θ. After each step, target weights are updated by EMA: ξ ← τξ + (1−τ)θ. Views are then swapped and the loss is symmetrized.</p>
<p>The critical question: why doesn't this collapse to a trivial constant solution? The <strong>predictor q_θ</strong> is the key. Without it the online and target networks are architecturally identical — the shortest path to zero loss is outputting the same constant vector for everything. The predictor breaks this symmetry: a constant target output would be easy to predict, but the predictor would still need to learn to produce it from varying online representations, keeping the gradients informative.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="13" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">BYOL forward pass (one view direction)</text>
  <!-- Image x -->
  <rect x="138" y="20" width="64" height="18" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="170" y="33" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">image  x</text>
  <!-- Two augment arrows -->
  <path d="M148 38 L100 52" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#bym)"/>
  <path d="M192 38 L240 52" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#bym)"/>
  <text x="118" y="50" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">aug t</text>
  <text x="210" y="50" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">aug t'</text>
  <!-- ONLINE branch (left) -->
  <rect x="60" y="54" width="76" height="18" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="98" y="67" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">view  v</text>
  <path d="M98 72 L98 84" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#bym)"/>
  <rect x="60" y="86" width="76" height="18" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="98" y="99" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">encoder  f_θ</text>
  <path d="M98 104 L98 116" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#bym)"/>
  <text x="112" y="113" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">y_θ</text>
  <rect x="60" y="118" width="76" height="18" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="98" y="131" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">projector  g_θ</text>
  <path d="M98 136 L98 148" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#bym)"/>
  <text x="112" y="145" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">z_θ</text>
  <rect x="60" y="150" width="76" height="18" rx="2" stroke="#0a0a0a" stroke-width="2" fill="#eeeeea"/>
  <text x="98" y="163" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">predictor  q_θ</text>
  <path d="M98 168 L98 180" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#bym)"/>
  <text x="112" y="177" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">ẑ_θ</text>
  <!-- TARGET branch (right) -->
  <rect x="204" y="54" width="76" height="18" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="3 2"/>
  <text x="242" y="67" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">view  v'</text>
  <path d="M242 72 L242 84" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#bym)"/>
  <rect x="204" y="86" width="76" height="18" rx="2" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="3 2"/>
  <text x="242" y="99" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">encoder  f_ξ</text>
  <path d="M242 104 L242 116" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#bym)"/>
  <rect x="204" y="118" width="76" height="18" rx="2" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="3 2"/>
  <text x="242" y="131" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">projector  g_ξ</text>
  <path d="M242 136 L242 148" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#bym)"/>
  <text x="256" y="145" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa">z'_ξ</text>
  <!-- stop-gradient box -->
  <rect x="210" y="148" width="64" height="16" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="2 2" fill="#f8f8f6"/>
  <text x="242" y="160" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">stop-grad</text>
  <!-- Loss -->
  <path d="M136 183 L160 191" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#bym)"/>
  <path d="M242 164 L220 191" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#bym)"/>
  <rect x="162" y="193" width="56" height="20" rx="2" stroke="#0a0a0a" stroke-width="2" fill="#eeeeea"/>
  <text x="190" y="207" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">L</text>
  <!-- EMA arrow -->
  <path d="M204 95 C 170 75 136 75 136 95" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.5" fill="none" marker-end="url(#bym)"/>
  <text x="170" y="72" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">ξ ← τξ + (1−τ)θ</text>
  <!-- loss label -->
  <text x="190" y="228" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">‖ẑ_θ − z'_ξ‖²  (L2-norm both)</text>
  <text x="190" y="241" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">symmetrized: swap v ↔ v', repeat</text>
  <!-- "online only" label for predictor -->
  <text x="24" y="160" font-family="'JetBrains Mono',monospace" font-size="6" fill="#0a0a0a" opacity="0.7">online</text>
  <text x="24" y="169" font-family="'JetBrains Mono',monospace" font-size="6" fill="#0a0a0a" opacity="0.7">only ←</text>
  <defs>
    <marker id="bym" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Architecture',
        title: 'Projector, predictor, and EMA schedule',
        body: `<p>Both encoder branches use the same backbone (ResNet-50 or ViT), producing a 2048-d representation. The <strong>projector</strong> is a 2-layer MLP: Linear(2048→4096) → BatchNorm → ReLU → Linear(4096→256). Both online and target share this projector architecture with separate weights.</p>
<p>The <strong>predictor</strong> — exclusive to the online branch — is an identical 2-layer MLP: Linear(256→4096) → BatchNorm → ReLU → Linear(4096→256). Its role is architectural asymmetry: since the target has no predictor, the loss landscape is not symmetric between the two branches, making constant-output collapse a local maximum rather than a global minimum.</p>
<p>The EMA decay τ is not fixed — it is <strong>cosine-annealed</strong> from τ_base = 0.996 to τ_max = 1.0 over training. Early in training τ is lower (faster tracking), so the target adapts quickly before representations stabilize; later τ → 1 and the target becomes nearly frozen, providing more stable training signal. The ablation shows τ ∈ [0.9, 0.999] all yield >68% top-1, confirming robustness.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="13" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">network dimensions and EMA schedule</text>
  <!-- Online stack with dimensions -->
  <text x="80" y="28" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">Online  (θ)</text>
  <rect x="30" y="34" width="100" height="22" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="80" y="49" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">ResNet-50  encoder</text>
  <text x="134" y="48" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">→ 2048-d</text>
  <path d="M80 56 L80 66" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#bya)"/>
  <rect x="30" y="68" width="100" height="34" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="80" y="82" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">projector  g_θ</text>
  <text x="80" y="93" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">2048→4096→256</text>
  <text x="80" y="100" font-family="'JetBrains Mono',monospace" font-size="6" fill="#aaa" text-anchor="middle">BN+ReLU hidden</text>
  <text x="134" y="82" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">→ 256-d</text>
  <path d="M80 102 L80 112" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#bya)"/>
  <rect x="30" y="114" width="100" height="34" rx="2" stroke="#0a0a0a" stroke-width="2" fill="#eeeeea"/>
  <text x="80" y="128" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">predictor  q_θ</text>
  <text x="80" y="139" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">256→4096→256</text>
  <text x="80" y="146" font-family="'JetBrains Mono',monospace" font-size="6" fill="#aaa" text-anchor="middle">BN+ReLU hidden</text>
  <text x="20" y="132" font-family="'JetBrains Mono',monospace" font-size="6" fill="#0a0a0a">only</text>
  <text x="20" y="141" font-family="'JetBrains Mono',monospace" font-size="6" fill="#0a0a0a">here</text>
  <!-- Target stack -->
  <text x="260" y="28" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">Target  (ξ)</text>
  <rect x="210" y="34" width="100" height="22" rx="2" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="3 2"/>
  <text x="260" y="49" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">ResNet-50  encoder</text>
  <path d="M260 56 L260 66" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#bya)"/>
  <rect x="210" y="68" width="100" height="34" rx="2" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="3 2"/>
  <text x="260" y="82" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">projector  g_ξ</text>
  <text x="260" y="93" font-family="'JetBrains Mono',monospace" font-size="6" fill="#aaa" text-anchor="middle">2048→4096→256</text>
  <text x="260" y="100" font-family="'JetBrains Mono',monospace" font-size="6" fill="#aaa" text-anchor="middle">same arch, diff weights</text>
  <!-- no predictor placeholder -->
  <rect x="210" y="114" width="100" height="34" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="2 3" opacity="0.35"/>
  <text x="260" y="134" font-family="'JetBrains Mono',monospace" font-size="7" fill="#aaa" text-anchor="middle">no predictor</text>
  <!-- EMA curve -->
  <rect x="16" y="162" width="308" height="86" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="178" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">EMA schedule: τ cosine-annealed τ_base → 1.0</text>
  <line x1="36" y1="232" x2="308" y2="232" stroke="#0a0a0a" stroke-width="1"/>
  <line x1="36" y1="190" x2="36" y2="232" stroke="#0a0a0a" stroke-width="1"/>
  <text x="26" y="194" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">1.0</text>
  <text x="24" y="234" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">.996</text>
  <path d="M36,232 C100,231 160,222 308,192" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <text x="175" y="245" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">training steps</text>
  <text x="314" y="194" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">τ→1</text>
  <text x="50" y="228" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888">fast early</text>
  <text x="240" y="202" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888">slow late</text>
  <defs>
    <marker id="bya" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Mathematics',
        title: 'Loss, collapse analysis, and ablations',
        body: `<p>Let ẑ_θ = q_θ(g_θ(f_θ(v))) / ‖q_θ(g_θ(f_θ(v)))‖ and z'_ξ = sg[g_ξ(f_ξ(v'))] / ‖g_ξ(f_ξ(v'))‖. The symmetrized BYOL loss is:</p>
<div class="math-block">L_BYOL = ‖ẑ_θ − z'_ξ‖² + ‖ẑ'_θ − z_ξ‖²
        = 2 − 2 · ẑ_θ·z'_ξ  +  2 − 2 · ẑ'_θ·z_ξ
        = 4 − 2(ẑ_θ·z'_ξ + ẑ'_θ·z_ξ)</div>
<p>Minimizing this is equivalent to maximizing the cosine similarity between the two normalized predictions — it is a pure alignment objective with no uniformity term. This is exactly why negatives <em>would</em> normally be needed: without them, trivially setting all outputs to the same unit vector achieves loss = 0. BYOL escapes this because <strong>stop-gradient breaks the symmetry</strong>: the collapsed solution is not a fixed point of the optimization when only θ receives gradients and ξ follows via EMA.</p>
<p>The critical ablation: removing either stop-gradient or the predictor causes collapse. Without stop-grad, both networks receive gradients and the trivial solution is reachable. Without the predictor, the architecture is symmetric and collapse is again a stable fixed point. Both together create a regime where the online network must constantly solve a non-trivial prediction problem.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">ablation: what causes collapse?</text>
  <!-- 2x2 ablation table -->
  <text x="170" y="32" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">stop-gradient ×  predictor</text>
  <!-- table headers -->
  <text x="170" y="50" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">predictor</text>
  <text x="80" y="70" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">stop-grad</text>
  <line x1="130" y1="40" x2="130" y2="136" stroke="#0a0a0a" stroke-width="0.7" opacity="0.35"/>
  <line x1="16" y1="76" x2="324" y2="76" stroke="#0a0a0a" stroke-width="0.7" opacity="0.35"/>
  <text x="184" y="60" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">✓ yes</text>
  <text x="272" y="60" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">✗ no</text>
  <text x="80" y="100" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">✓ yes</text>
  <text x="80" y="120" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">✗ no</text>
  <!-- cells -->
  <rect x="138" y="80" width="86" height="32" rx="2" fill="#0a0a0a" opacity="0.08" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="181" y="96" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">74.3%  ✓ BYOL</text>
  <text x="181" y="106" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">works</text>
  <rect x="226" y="80" width="86" height="32" rx="2" stroke="#0a0a0a" stroke-width="0.8" opacity="0.5"/>
  <text x="269" y="96" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">collapse</text>
  <text x="269" y="106" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa" text-anchor="middle">~0%</text>
  <rect x="138" y="114" width="86" height="32" rx="2" stroke="#0a0a0a" stroke-width="0.8" opacity="0.5"/>
  <text x="181" y="130" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">degraded</text>
  <text x="181" y="140" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa" text-anchor="middle">~55–63%</text>
  <rect x="226" y="114" width="86" height="32" rx="2" stroke="#0a0a0a" stroke-width="0.8" opacity="0.5"/>
  <text x="269" y="130" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">collapse</text>
  <text x="269" y="140" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa" text-anchor="middle">~0%</text>
  <!-- Collapse intuition -->
  <rect x="16" y="152" width="308" height="42" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="168" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">collapse = both networks output same constant vector</text>
  <text x="170" y="182" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">stop-grad + predictor break this fixed point — only path to L=0 requires learning</text>
  <!-- Loss formula box -->
  <rect x="16" y="204" width="308" height="46" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#f8f8f6"/>
  <text x="26" y="220" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">L = 4 − 2(ẑ_θ · z'_ξ  +  ẑ'_θ · z_ξ)</text>
  <text x="26" y="235" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555">pure alignment — maximizes cosine sim between normalized predictions</text>
  <text x="26" y="246" font-family="'JetBrains Mono',monospace" font-size="7" fill="#aaa">no uniformity term — negatives would enforce spreading; EMA does it implicitly</text>
</svg>`
      }
    ]
  },

  // ── DINO / DINOv2 ──────────────────────────────────────────────────────────
  {
    id: 'dino',
    name: 'DINO',
    fullName: 'Self-Distillation with No Labels / DINOv2',
    tag: 'Self-Supervised Learning',
    tagline: 'A ViT that teaches itself — and learns to see objects for free',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Student (solid, left) -->
      <rect x="4" y="22" width="24" height="28" rx="2" stroke="currentColor" stroke-width="1.5"/>
      <text x="16" y="33" font-family="monospace" font-size="5" fill="currentColor" text-anchor="middle" opacity="0.6">local</text>
      <text x="16" y="41" font-family="monospace" font-size="5.5" fill="currentColor" text-anchor="middle">ViT</text>
      <text x="16" y="50" font-family="monospace" font-size="5" fill="currentColor" text-anchor="middle" opacity="0.6">student</text>
      <text x="16" y="18" font-family="monospace" font-size="5" fill="currentColor" text-anchor="middle" opacity="0.6">θ_s</text>
      <!-- Teacher (dashed, right) -->
      <rect x="44" y="22" width="24" height="28" rx="2" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 2" opacity="0.7"/>
      <text x="56" y="33" font-family="monospace" font-size="5" fill="currentColor" text-anchor="middle" opacity="0.5">global</text>
      <text x="56" y="41" font-family="monospace" font-size="5.5" fill="currentColor" text-anchor="middle" opacity="0.7">ViT</text>
      <text x="56" y="50" font-family="monospace" font-size="5" fill="currentColor" text-anchor="middle" opacity="0.5">teacher</text>
      <text x="56" y="18" font-family="monospace" font-size="5" fill="currentColor" text-anchor="middle" opacity="0.5">θ_t</text>
      <!-- EMA arrow top -->
      <path d="M28 26 C 36 16 36 16 44 26" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" fill="none" marker-end="url(#dno)" opacity="0.55"/>
      <text x="36" y="15" font-family="monospace" font-size="4.5" fill="currentColor" text-anchor="middle" opacity="0.55">EMA</text>
      <!-- Centering block in middle -->
      <rect x="28" y="38" width="16" height="8" rx="1" stroke="currentColor" stroke-width="1" fill="currentColor" opacity="0.08"/>
      <text x="36" y="44.5" font-family="monospace" font-size="5" fill="currentColor" text-anchor="middle">−c</text>
      <!-- cross-entropy loss label -->
      <text x="36" y="62" font-family="monospace" font-size="5.5" fill="currentColor" text-anchor="middle">H(p_t, p_s)</text>
      <text x="36" y="70" font-family="monospace" font-size="5" fill="currentColor" text-anchor="middle" opacity="0.6">no labels</text>
      <defs>
        <marker id="dno" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L0,5 L4,2.5 z" fill="currentColor"/>
        </marker>
      </defs>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'Self-distillation — a teacher made from the student\'s own past',
        body: `<p>Distillation usually means compressing a large trained model into a smaller one. DINO asks: what if the "teacher" isn't pre-trained at all — what if it's just a <strong>slow-moving copy of the student itself</strong>? Train the student to predict what the teacher would output for the same image seen from a different angle, and you get remarkably good representations — with no labels whatsoever.</p>
<p>The key trick is <strong>asymmetric crops</strong>: the student sees small local patches (96×96); the teacher sees large global views (224×224). The student must predict global scene semantics from limited local context. This forces it to learn structure, not just texture — which is exactly why DINO ViT attention maps spontaneously produce object segmentations with no pixel-level supervision.</p>
<p>DINOv2 (2023) keeps this framework but scales it systematically: a curated 142M-image dataset, a combined image-level + patch-level objective, and a KoLeo entropy regularizer that spreads features uniformly across the embedding space. The result is a ViT-g with 86.5% ImageNet linear accuracy — general-purpose visual features competitive with task-specific supervised models.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">local → global prediction + emergent segmentation</text>
  <!-- Image with crops -->
  <rect x="16" y="24" width="80" height="80" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="56" y="68" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">image x</text>
  <!-- Global crops (large, dashed) -->
  <rect x="20" y="28" width="68" height="68" rx="1" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="4 2"/>
  <text x="56" y="104" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">global crop 224²</text>
  <!-- Local crops (small) -->
  <rect x="20" y="28" width="28" height="28" rx="1" fill="#0a0a0a" opacity="0.12" stroke="#0a0a0a" stroke-width="1"/>
  <text x="34" y="52" font-family="'JetBrains Mono',monospace" font-size="6" fill="#0a0a0a" text-anchor="middle">96²</text>
  <!-- Arrows to networks -->
  <path d="M56 108 L56 120" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#dna)"/>
  <path d="M30 56 L28 56 L28 125 L110 125" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#dna)"/>
  <!-- Teacher box -->
  <rect x="110" y="114" width="66" height="22" rx="2" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="3 2"/>
  <text x="143" y="129" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">teacher ViT</text>
  <text x="56" y="114" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">↓ global</text>
  <!-- Student box -->
  <rect x="110" y="150" width="66" height="22" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="143" y="165" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">student ViT</text>
  <text x="56" y="148" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">↑ local</text>
  <!-- Loss -->
  <path d="M176 125 L210 138" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#dna)"/>
  <path d="M176 161 L210 150" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#dna)"/>
  <rect x="212" y="134" width="56" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="240" y="147" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">H(p_t, p_s)</text>
  <text x="240" y="163" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">backprop student only</text>
  <!-- Emergent attention demo -->
  <rect x="16" y="186" width="308" height="62" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="201" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">emergent property: object segmentation in attention</text>
  <!-- fake attention grid -->
  <rect x="26" y="208" width="16" height="16" fill="#0a0a0a" opacity="0.08" rx="1"/>
  <rect x="44" y="208" width="16" height="16" fill="#0a0a0a" opacity="0.07" rx="1"/>
  <rect x="62" y="208" width="16" height="16" fill="#0a0a0a" opacity="0.75" rx="1"/>
  <rect x="80" y="208" width="16" height="16" fill="#0a0a0a" opacity="0.80" rx="1"/>
  <rect x="98" y="208" width="16" height="16" fill="#0a0a0a" opacity="0.72" rx="1"/>
  <rect x="116" y="208" width="16" height="16" fill="#0a0a0a" opacity="0.06" rx="1"/>
  <rect x="134" y="208" width="16" height="16" fill="#0a0a0a" opacity="0.05" rx="1"/>
  <text x="85" y="238" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">self-attn last block</text>
  <text x="85" y="246" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">no seg supervision</text>
  <text x="220" y="228" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">k-NN classification:</text>
  <text x="220" y="241" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">78.3% top-1 (zero fine-tuning)</text>
  <defs>
    <marker id="dna" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto">
      <path d="M0,0 L0,4 L5,2 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Core Mechanism',
        title: 'Centering + sharpening — two failure modes, one solution',
        body: `<p>Without any stabilization, DINO collapses in two distinct ways. If the teacher outputs unconstrained logits, one dimension dominates and all images map to the same token — mode collapse. If the teacher outputs near-uniform distributions, the cross-entropy carries no learning signal — uniform collapse. DINO prevents both simultaneously with two opposing forces.</p>
<p><strong>Centering</strong> subtracts a running mean c from the teacher's output before softmax, computed as an EMA of recent teacher outputs: c ← m·c + (1−m)·mean_batch(g_θt(x)). This prevents any single dimension from monopolizing the distribution. But centering alone leads to uniform outputs — hence sharpening.</p>
<p><strong>Sharpening</strong> uses a very low teacher temperature τ_t ≈ 0.04–0.07 (vs student τ_s = 0.1). Dividing by a small number before softmax makes the teacher's distribution peaky — a high-confidence pseudo-label. Together, centering keeps distributions spread across dimensions while sharpening keeps them informative. The student (higher temperature) predicts a softer version of the teacher's sharp signal.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">centering × sharpening — two collapse modes avoided</text>
  <!-- Three columns: mode collapse, uniform collapse, DINO -->
  <!-- Mode collapse: no centering -->
  <text x="56" y="32" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">no centering</text>
  <text x="56" y="44" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa" text-anchor="middle">mode collapse ✗</text>
  <!-- bar chart: one tall bar -->
  <line x1="20" y1="100" x2="92" y2="100" stroke="#0a0a0a" stroke-width="0.7" opacity="0.3"/>
  <rect x="26" y="55" width="10" height="45" fill="#0a0a0a" opacity="0.75" rx="1"/>
  <rect x="38" y="96" width="10" height="4" fill="#0a0a0a" opacity="0.1" rx="1"/>
  <rect x="50" y="97" width="10" height="3" fill="#0a0a0a" opacity="0.1" rx="1"/>
  <rect x="62" y="97" width="10" height="3" fill="#0a0a0a" opacity="0.08" rx="1"/>
  <rect x="74" y="98" width="10" height="2" fill="#0a0a0a" opacity="0.06" rx="1"/>
  <text x="31" y="112" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888">all mass</text>
  <text x="31" y="120" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888">one dim</text>
  <!-- Uniform collapse: no sharpening -->
  <text x="170" y="32" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">no sharpening</text>
  <text x="170" y="44" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa" text-anchor="middle">uniform collapse ✗</text>
  <line x1="134" y1="100" x2="206" y2="100" stroke="#0a0a0a" stroke-width="0.7" opacity="0.3"/>
  <rect x="140" y="78" width="10" height="22" fill="#0a0a0a" opacity="0.22" rx="1"/>
  <rect x="152" y="78" width="10" height="22" fill="#0a0a0a" opacity="0.22" rx="1"/>
  <rect x="164" y="78" width="10" height="22" fill="#0a0a0a" opacity="0.22" rx="1"/>
  <rect x="176" y="78" width="10" height="22" fill="#0a0a0a" opacity="0.22" rx="1"/>
  <rect x="188" y="78" width="10" height="22" fill="#0a0a0a" opacity="0.22" rx="1"/>
  <text x="145" y="112" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888">uniform =</text>
  <text x="145" y="120" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888">no signal</text>
  <!-- DINO: both -->
  <text x="284" y="32" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">centering + sharp</text>
  <text x="284" y="44" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">informative ✓</text>
  <line x1="248" y1="100" x2="320" y2="100" stroke="#0a0a0a" stroke-width="0.7" opacity="0.3"/>
  <rect x="254" y="62" width="10" height="38" fill="#0a0a0a" opacity="0.75" rx="1"/>
  <rect x="266" y="80" width="10" height="20" fill="#0a0a0a" opacity="0.35" rx="1"/>
  <rect x="278" y="90" width="10" height="10" fill="#0a0a0a" opacity="0.12" rx="1"/>
  <rect x="290" y="95" width="10" height="5" fill="#0a0a0a" opacity="0.08" rx="1"/>
  <rect x="302" y="97" width="10" height="3" fill="#0a0a0a" opacity="0.05" rx="1"/>
  <text x="259" y="112" font-family="'JetBrains Mono',monospace" font-size="6" fill="#0a0a0a">peaked,</text>
  <text x="259" y="120" font-family="'JetBrains Mono',monospace" font-size="6" fill="#0a0a0a">balanced</text>
  <!-- Dividers -->
  <line x1="113" y1="26" x2="113" y2="130" stroke="#0a0a0a" stroke-width="0.5" opacity="0.2"/>
  <line x1="227" y1="26" x2="227" y2="130" stroke="#0a0a0a" stroke-width="0.5" opacity="0.2"/>
  <!-- Centering formula -->
  <rect x="16" y="138" width="152" height="48" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="92" y="154" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">centering update</text>
  <text x="92" y="169" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">c ← m·c + (1−m)·μ_batch</text>
  <text x="92" y="180" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">m = 0.9  (EMA of teacher outputs)</text>
  <!-- Temperature formula -->
  <rect x="172" y="138" width="152" height="48" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="248" y="154" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">temperatures</text>
  <text x="248" y="169" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">τ_s = 0.1  (student, soft)</text>
  <text x="248" y="180" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">τ_t = 0.04–0.07  (teacher, sharp)</text>
  <!-- Multi-crop summary -->
  <rect x="16" y="196" width="308" height="52" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#f8f8f6"/>
  <text x="170" y="212" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">multi-crop strategy</text>
  <text x="170" y="226" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">teacher: 2 global crops (224²)   student: 2 global + 6-10 local crops (96²)</text>
  <text x="170" y="240" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">student predicts teacher's global output from each local patch view</text>
</svg>`
      },

      {
        level: 'Architecture',
        title: 'DINOv2 — curated data, iBOT, and KoLeo',
        body: `<p>DINO v1 used a 3-layer MLP projection head with output dimension K = 65,536 (a large soft codebook), followed by L2 normalisation and a weight-normalised linear layer. Both student and teacher share this design, with teacher weights updated via EMA (τ cosine-annealed 0.996 → 1.0).</p>
<p><strong>DINOv2</strong> upgrades three things. First, <strong>data</strong>: the LVD-142M dataset is assembled by using existing curated datasets as semantic seeds, retrieving visually similar images from a 1.2B-image web pool via nearest-neighbour search, then aggressively deduplicating. This eliminates the domain gap between web noise and downstream tasks.</p>
<p>Second, <strong>loss</strong>: DINOv2 adds an <strong>iBOT patch-level objective</strong> alongside the image-level DINO loss. Randomly masked patches are predicted in representation space (like JEPA, but within the DINO teacher-student framework), giving the model dense spatial understanding in addition to global semantics. A <strong>KoLeo regulariser</strong> — the Kozachenko–Leonenko differential entropy estimator — penalises features that cluster too tightly within a batch, encouraging uniform coverage of the embedding space and improving retrieval by +8%.</p>
<p>Third, <strong>scale</strong>: ViT-g (1.1B parameters) trained at 224² then fine-tuned at 518² for dense prediction tasks.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">DINO v1 → DINOv2 upgrades</text>
  <!-- Data pipeline box -->
  <rect x="16" y="24" width="308" height="50" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="90" y="40" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">LVD-142M data curation</text>
  <text x="26" y="56" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555">curated seeds → similarity retrieval from 1.2B web images → dedup → 142M</text>
  <text x="26" y="67" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">removes domain gap between noisy web data and downstream benchmarks</text>
  <!-- Loss combination -->
  <rect x="16" y="84" width="308" height="68" rx="2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="170" y="100" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">combined objective</text>
  <line x1="16" y1="106" x2="324" y2="106" stroke="#0a0a0a" stroke-width="0.5" opacity="0.3"/>
  <rect x="26" y="112" width="84" height="28" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.2"/>
  <text x="68" y="125" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">DINO loss</text>
  <text x="68" y="135" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">image-level H(p_t, p_s)</text>
  <text x="120" y="128" font-family="'JetBrains Mono',monospace" font-size="10" fill="#0a0a0a">+</text>
  <rect x="134" y="112" width="84" height="28" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.2"/>
  <text x="176" y="125" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">iBOT loss</text>
  <text x="176" y="135" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">patch-level masking</text>
  <text x="228" y="128" font-family="'JetBrains Mono',monospace" font-size="10" fill="#0a0a0a">+</text>
  <rect x="242" y="112" width="74" height="28" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1.2"/>
  <text x="279" y="125" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">KoLeo</text>
  <text x="279" y="135" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">entropy reg.</text>
  <!-- KoLeo explanation -->
  <rect x="16" y="162" width="148" height="42" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" fill="#f8f8f6"/>
  <text x="90" y="177" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">KoLeo regulariser</text>
  <text x="90" y="190" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">L = −(1/n)·Σ log d_nn(z_i)</text>
  <text x="90" y="199" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">push features apart uniformly</text>
  <!-- Scale -->
  <rect x="176" y="162" width="148" height="42" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" fill="#f8f8f6"/>
  <text x="250" y="177" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">model scale</text>
  <text x="250" y="190" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#555" text-anchor="middle">ViT-S/B/L/g  (up to 1.1B params)</text>
  <text x="250" y="199" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">fine-tune 224²→518² for dense tasks</text>
  <!-- Projection head note -->
  <rect x="16" y="214" width="308" height="36" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="228" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">projection head: MLP(d→2048→K=65536) → L2-norm → weight-norm FC</text>
  <text x="170" y="243" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="middle">teacher EMA: θ_t ← τθ_t + (1−τ)θ_s   τ annealed 0.996→1.0</text>
</svg>`
      },

      {
        level: 'Mathematics',
        title: 'Loss function, EMA, and results across tasks',
        body: `<p>The DINO cross-entropy loss for a pair of views (x, x'), summed over all multi-crop combinations:</p>
<div class="math-block">L = −Σ_{v∈V_local∪V_global} p_t(x)^T · log p_s(v)

p_s(v) = softmax( g_θs(v) / τ_s )
p_t(x) = softmax( (g_θt(x) − c) / τ_t )</div>
<p>Only the student receives gradients. The teacher is updated by EMA: θ_t ← τ·θ_t + (1−τ)·θ_s. The DINOv2 total loss adds the iBOT patch-level term and the KoLeo entropy term:</p>
<div class="math-block">L_DINOv2 = L_DINO + λ_1·L_iBOT + λ_2·L_KoLeo

L_KoLeo = −(1/n) Σᵢ log d_nn(z_i / ‖z_i‖)</div>
<p>where d_nn is the distance to the nearest neighbour in the batch. This is the Kozachenko–Leonenko estimator of differential entropy — maximising it spreads features uniformly on the hypersphere, preventing cluster degeneracy in the learned space. The combination of all three losses trains a backbone that transfers to image classification, semantic segmentation, depth estimation, and instance retrieval without task-specific fine-tuning.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">results: DINO v1 → DINOv2</text>
  <!-- Results table -->
  <rect x="16" y="22" width="308" height="134" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <!-- Header row -->
  <line x1="16" y1="42" x2="324" y2="42" stroke="#0a0a0a" stroke-width="0.7" opacity="0.4"/>
  <text x="100" y="36" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">model</text>
  <text x="194" y="36" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">IN-1k linear</text>
  <text x="268" y="36" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">k-NN (no FT)</text>
  <!-- Rows -->
  <text x="30" y="59" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">DINO ViT-S/16</text>
  <text x="194" y="59" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">77.0%</text>
  <text x="268" y="59" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">74.5%</text>
  <text x="30" y="75" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">DINO ViT-B/16</text>
  <text x="194" y="75" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">80.1%</text>
  <text x="268" y="75" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">77.3%</text>
  <text x="30" y="91" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">DINO ViT-B/8</text>
  <text x="194" y="91" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">80.1%</text>
  <text x="268" y="91" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">78.3%</text>
  <line x1="16" y1="97" x2="324" y2="97" stroke="#0a0a0a" stroke-width="0.7" opacity="0.3"/>
  <text x="30" y="113" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">DINOv2 ViT-B/14</text>
  <text x="194" y="113" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">84.5%</text>
  <text x="268" y="113" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">83.0%</text>
  <text x="30" y="129" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">DINOv2 ViT-L/14</text>
  <text x="194" y="129" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">86.3%</text>
  <text x="268" y="129" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">85.5%</text>
  <text x="30" y="145" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">DINOv2 ViT-g/14</text>
  <text x="194" y="145" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">86.5%</text>
  <text x="268" y="145" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">86.3%</text>
  <!-- Dense tasks box -->
  <rect x="16" y="166" width="308" height="82" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#f8f8f6"/>
  <text x="170" y="182" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">DINOv2 dense task transfer (frozen backbone)</text>
  <line x1="16" y1="188" x2="324" y2="188" stroke="#0a0a0a" stroke-width="0.5" opacity="0.3"/>
  <text x="30" y="202" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555">ADE20K segmentation (linear)</text>
  <text x="310" y="202" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="end">53.1 mIoU</text>
  <text x="30" y="216" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555">NYU-Depth v2 (linear depth)</text>
  <text x="310" y="216" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="end">competitive w/ supervised</text>
  <text x="30" y="230" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555">Instance retrieval (Oxford/Paris)</text>
  <text x="310" y="230" font-family="'JetBrains Mono',monospace" font-size="7" fill="#555" text-anchor="end">+8% vs v1 (KoLeo effect)</text>
  <text x="30" y="244" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#aaa">all results: frozen ViT-g/14 backbone, no task-specific fine-tuning</text>
</svg>`
      }
    ]
  },

  // ── ADD YOUR NEXT CONCEPT HERE ─────────────────────────────────────────────

];
