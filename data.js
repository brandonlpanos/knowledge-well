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

  // ── COLPALI ────────────────────────────────────────────────────────────────
  {
    id: 'colpali',
    name: 'ColPali',
    fullName: 'Contextualized Late Interaction over PaliGemma',
    tag: 'Document Retrieval',
    tagline: 'Retrieve documents by seeing them, not parsing them.',
    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="13" y="7" width="33" height="44" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <polyline points="38,7 46,7 46,15 38,7" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <line x1="13" y1="21" x2="46" y2="21" stroke="#0a0a0a" stroke-width="0.7" opacity="0.35"/>
  <line x1="13" y1="33" x2="46" y2="33" stroke="#0a0a0a" stroke-width="0.7" opacity="0.35"/>
  <line x1="24" y1="7" x2="24" y2="51" stroke="#0a0a0a" stroke-width="0.7" opacity="0.35"/>
  <line x1="35" y1="7" x2="35" y2="51" stroke="#0a0a0a" stroke-width="0.7" opacity="0.35"/>
  <rect x="24" y="21" width="11" height="12" fill="#0a0a0a" opacity="0.18"/>
  <circle cx="54" cy="55" r="9" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <line x1="60" y1="61" x2="66" y2="67" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round"/>
  <line x1="35" y1="33" x2="46" y2="47" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="2 2" opacity="0.55"/>
</svg>`,
    layers: [
      {
        level: 'Intuition',
        title: 'Retrieve documents by seeing them, not parsing them',
        body: `<p>Traditional document retrieval is a brittle chain: PDF → OCR → layout detection → text chunking → captioning → embedding → index. Each step discards visual information, and documents communicate through their visuals — tables, charts, fonts, spatial layout.</p>
<p>ColPali flips this entirely. A document page is an <em>image</em>. Feed it directly to a vision-language model, which produces a bag of <strong>patch embeddings</strong> — one vector per image tile. At query time, encode the question as text tokens and score it against every page using <strong>late interaction</strong>: each query token finds its best-matching patch, and the scores are summed. The highest-scoring page wins.</p>
<p>No OCR. No layout parser. No caption generator. One model, end-to-end, and it outperforms the entire classical pipeline on every visual domain tested.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="18" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle" letter-spacing="0.1em">TRADITIONAL vs COLPALI PIPELINE</text>
  <text x="70" y="36" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">TRADITIONAL</text>
  <rect x="20" y="44" width="100" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="70" y="58" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">PDF Parse</text>
  <line x1="70" y1="64" x2="70" y2="74" stroke="#888" stroke-width="1"/>
  <rect x="20" y="74" width="100" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="70" y="88" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">OCR + Layout</text>
  <line x1="70" y1="94" x2="70" y2="104" stroke="#888" stroke-width="1"/>
  <rect x="20" y="104" width="100" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="70" y="118" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">Captioning</text>
  <line x1="70" y1="124" x2="70" y2="134" stroke="#888" stroke-width="1"/>
  <rect x="20" y="134" width="100" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="70" y="148" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">Text Embed</text>
  <line x1="70" y1="154" x2="70" y2="164" stroke="#888" stroke-width="1"/>
  <rect x="20" y="164" width="100" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="70" y="178" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">Vector Index</text>
  <text x="70" y="202" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">7.22 s / page</text>
  <text x="70" y="214" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">nDCG@5: 67.0</text>
  <line x1="170" y1="28" x2="170" y2="230" stroke="#ddd" stroke-width="1"/>
  <text x="255" y="36" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">COLPALI</text>
  <rect x="205" y="44" width="100" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="255" y="58" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">Page → Image</text>
  <line x1="255" y1="64" x2="255" y2="74" stroke="#888" stroke-width="1"/>
  <rect x="205" y="74" width="100" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a"/>
  <text x="255" y="88" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#f8f8f6" text-anchor="middle">PaliGemma VLM</text>
  <line x1="255" y1="94" x2="255" y2="104" stroke="#888" stroke-width="1"/>
  <rect x="205" y="104" width="100" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="255" y="118" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">1024 Patch Vecs</text>
  <line x1="255" y1="124" x2="255" y2="134" stroke="#888" stroke-width="1"/>
  <rect x="205" y="134" width="100" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="255" y="148" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">Late Interaction</text>
  <text x="255" y="202" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">0.39 s / page</text>
  <text x="255" y="214" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">nDCG@5: 81.3</text>
</svg>`
      },
      {
        level: 'Mechanism',
        title: 'Every query token hunts its best-matching patch',
        body: `<p>ColBERT-style <em>late interaction</em> keeps query and document representations fully separate until scoring time. The document page encodes into N=1024 patch vectors; the query encodes into M token vectors. At retrieval, for each query token find the patch that matches it best (maximum dot product), then sum across all query tokens:</p>
<div class="math-block">score(q, d) = Σᵢ₌₁ᴹ  max_{j=1…N}  (qᵢ · dⱼ)</div>
<p>This is <strong>MaxSim</strong>. It is fundamentally different from single-vector retrieval, which collapses the whole document to one number. With MaxSim, a token about "revenue" can light up the table region of the page, while a token about "trend" independently lights up a chart — the final score accumulates evidence from wherever it lands.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cpa-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#0a0a0a"/>
    </marker>
  </defs>
  <text x="170" y="16" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle" letter-spacing="0.08em">MAXSIM LATE INTERACTION</text>
  <text x="52" y="34" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">QUERY TOKENS</text>
  <rect x="12" y="42" width="80" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.2" fill="none"/>
  <text x="52" y="56" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">"What"</text>
  <rect x="12" y="68" width="80" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.2" fill="none"/>
  <text x="52" y="82" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">"is"</text>
  <rect x="12" y="94" width="80" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.2" fill="none"/>
  <text x="52" y="108" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">"the"</text>
  <rect x="12" y="120" width="80" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a"/>
  <text x="52" y="134" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#f8f8f6" text-anchor="middle">"revenue"</text>
  <rect x="12" y="146" width="80" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.2" fill="none"/>
  <text x="52" y="160" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">"?"</text>
  <line x1="92" y1="130" x2="186" y2="103" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#cpa-arr)"/>
  <line x1="92" y1="52" x2="186" y2="52" stroke="#888" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.5"/>
  <line x1="92" y1="78" x2="186" y2="72" stroke="#888" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.5"/>
  <line x1="92" y1="104" x2="186" y2="88" stroke="#888" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.5"/>
  <line x1="92" y1="156" x2="186" y2="152" stroke="#888" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.5"/>
  <text x="258" y="34" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">DOC PATCHES (N=1024)</text>
  <!-- 6×8 patch grid -->
  <rect x="190" y="42" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="212" y="42" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="234" y="42" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="256" y="42" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="278" y="42" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="300" y="42" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="190" y="58" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="212" y="58" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="234" y="58" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="256" y="58" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="278" y="58" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="300" y="58" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="190" y="74" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="212" y="74" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="234" y="74" width="20" height="14" rx="1" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.85"/>
  <rect x="256" y="74" width="20" height="14" rx="1" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.85"/>
  <rect x="278" y="74" width="20" height="14" rx="1" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.85"/>
  <rect x="300" y="74" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="190" y="90" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="212" y="90" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="234" y="90" width="20" height="14" rx="1" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.85"/>
  <rect x="256" y="90" width="20" height="14" rx="1" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.85"/>
  <rect x="278" y="90" width="20" height="14" rx="1" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.85"/>
  <rect x="300" y="90" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="190" y="106" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="212" y="106" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="234" y="106" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="256" y="106" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="278" y="106" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="300" y="106" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="190" y="122" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="212" y="122" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="234" y="122" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="256" y="122" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="278" y="122" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="300" y="122" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="190" y="138" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="212" y="138" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="234" y="138" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="256" y="138" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="278" y="138" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="300" y="138" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="190" y="154" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="212" y="154" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="234" y="154" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="256" y="154" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="278" y="154" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <rect x="300" y="154" width="20" height="14" rx="1" stroke="#ccc" stroke-width="0.7" fill="none"/>
  <text x="258" y="183" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">↑ max-sim patches</text>
  <text x="258" y="193" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">for "revenue"</text>
  <rect x="10" y="204" width="320" height="44" rx="3" stroke="#0a0a0a" stroke-width="1" fill="#f8f8f6"/>
  <text x="170" y="222" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">score(q, d) = Σᵢ max_j  qᵢ · dⱼ</text>
  <line x1="20" y1="228" x2="320" y2="228" stroke="#ddd" stroke-width="0.7"/>
  <text x="170" y="241" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">sum over M query tokens, each finding its best-matching patch</text>
</svg>`
      },
      {
        level: 'Architecture',
        title: 'PaliGemma: SigLIP vision encoder + Gemma language model',
        body: `<p>ColPali is built on <strong>PaliGemma-3B</strong> — a vision-language model that pairs <em>SigLIP-So400m/14</em> (the vision encoder) with <em>Gemma-2B</em> (a language model). The document page enters as an image; the query enters as text. Both emerge as vectors in the same D=128 embedding space via a shared linear projection head.</p>
<p>A 448×448 page image produces <strong>1024 patch vectors</strong> — from the 14-pixel patch stride of SigLIP: (448/14)² = 1024. A query of M tokens produces M vectors. Only the projection head and lightweight <strong>LoRA adapters</strong> (rank 32, α=32) are trained; the backbone is mostly frozen.</p>
<p>Training uses 118,695 query–page pairs, 1 epoch, batch size 32 across 8 GPUs, learning rate 5×10⁻⁵ with linear warmup.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="cpb-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#0a0a0a"/>
    </marker>
  </defs>
  <text x="170" y="16" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle" letter-spacing="0.08em">COLPALI ARCHITECTURE</text>
  <text x="80" y="34" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">DOCUMENT PAGE</text>
  <rect x="50" y="42" width="60" height="50" rx="2" stroke="#0a0a0a" stroke-width="1.2" fill="none"/>
  <line x1="70" y1="42" x2="70" y2="92" stroke="#ccc" stroke-width="0.5"/>
  <line x1="90" y1="42" x2="90" y2="92" stroke="#ccc" stroke-width="0.5"/>
  <line x1="50" y1="62" x2="110" y2="62" stroke="#ccc" stroke-width="0.5"/>
  <line x1="50" y1="75" x2="110" y2="75" stroke="#ccc" stroke-width="0.5"/>
  <rect x="70" y="62" width="20" height="13" fill="#0a0a0a" opacity="0.18"/>
  <text x="80" y="100" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">448×448 px</text>
  <line x1="80" y1="104" x2="80" y2="116" stroke="#888" stroke-width="1" marker-end="url(#cpb-arr)"/>
  <rect x="28" y="118" width="104" height="26" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <text x="80" y="135" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">SigLIP-So400m/14</text>
  <line x1="80" y1="144" x2="80" y2="156" stroke="#888" stroke-width="1" marker-end="url(#cpb-arr)"/>
  <rect x="28" y="158" width="104" height="22" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="80" y="173" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">1024 patch vecs</text>
  <line x1="80" y1="180" x2="80" y2="192" stroke="#888" stroke-width="1" marker-end="url(#cpb-arr)"/>
  <rect x="28" y="194" width="104" height="22" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a"/>
  <text x="80" y="209" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#f8f8f6" text-anchor="middle">Linear → D=128</text>
  <text x="260" y="34" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">QUERY TEXT</text>
  <rect x="210" y="42" width="100" height="28" rx="2" stroke="#0a0a0a" stroke-width="1.2" fill="none"/>
  <text x="260" y="61" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">"revenue trend Q3"</text>
  <line x1="260" y1="70" x2="260" y2="116" stroke="#888" stroke-width="1" marker-end="url(#cpb-arr)"/>
  <rect x="208" y="118" width="104" height="26" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <text x="260" y="135" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">Gemma-2B LM</text>
  <line x1="260" y1="144" x2="260" y2="156" stroke="#888" stroke-width="1" marker-end="url(#cpb-arr)"/>
  <rect x="208" y="158" width="104" height="22" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="260" y="173" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">M query vecs</text>
  <line x1="260" y1="180" x2="260" y2="192" stroke="#888" stroke-width="1" marker-end="url(#cpb-arr)"/>
  <rect x="208" y="194" width="104" height="22" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a"/>
  <text x="260" y="209" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#f8f8f6" text-anchor="middle">Linear → D=128</text>
  <line x1="132" y1="205" x2="156" y2="228" stroke="#888" stroke-width="1" marker-end="url(#cpb-arr)"/>
  <line x1="208" y1="205" x2="184" y2="228" stroke="#888" stroke-width="1" marker-end="url(#cpb-arr)"/>
  <rect x="146" y="230" width="48" height="22" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a"/>
  <text x="170" y="245" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#f8f8f6" text-anchor="middle">MaxSim</text>
  <text x="170" y="118" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">LoRA r=32</text>
  <text x="170" y="128" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888" text-anchor="middle">(both towers)</text>
</svg>`
      },
      {
        level: 'Mathematics',
        title: 'Contrastive loss, MaxSim, and ViDoRe results',
        body: `<p>The <strong>contrastive training loss</strong> is pairwise cross-entropy over in-batch negatives. For a batch of b query–page pairs with MaxSim scores s⁺ (positive) and s⁻ (hardest negative in batch):</p>
<div class="math-block">ℒ = (1/b) Σₖ log(1 + exp(s⁻ₖ − s⁺ₖ))</div>
<p>The <strong>MaxSim</strong> scoring operator, applied after L2-normalizing all vectors:</p>
<div class="math-block">score(q, d) = Σᵢ₌₁ᴹ  max_{j=1…N}  (qᵢ · dⱼ)</div>
<p>Storage is 257 KB/page uncompressed (1024 × 128-dim float32 vectors). <strong>Token pooling</strong> compresses to ~2.5 KB with only 2% performance loss. Query encoding runs in ~30 ms; indexing at 0.39 s/page — vs 7.22 s/page for the classical pipeline.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="16" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle" letter-spacing="0.08em">VIDORE BENCHMARK  —  nDCG@5</text>
  <rect x="10" y="24" width="320" height="18" fill="#0a0a0a" rx="2"/>
  <text x="18" y="37" font-family="'JetBrains Mono',monospace" font-size="7" fill="#f8f8f6">Domain</text>
  <text x="196" y="37" font-family="'JetBrains Mono',monospace" font-size="7" fill="#f8f8f6" text-anchor="middle">Text Pipeline</text>
  <text x="296" y="37" font-family="'JetBrains Mono',monospace" font-size="7" fill="#f8f8f6" text-anchor="middle">ColPali</text>
  <line x1="10" y1="42" x2="330" y2="42" stroke="#ddd" stroke-width="0.5"/>
  <text x="18" y="56" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">ArxivQA (figures)</text>
  <text x="196" y="56" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">40.1</text>
  <text x="296" y="56" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">79.1</text>
  <rect x="155" y="49" width="80" height="5" rx="1" fill="#eeeeea"/>
  <rect x="155" y="49" width="32" height="5" rx="1" fill="#888" opacity="0.6"/>
  <rect x="235" y="49" width="80" height="5" rx="1" fill="#eeeeea"/>
  <rect x="235" y="49" width="63" height="5" rx="1" fill="#0a0a0a" opacity="0.7"/>
  <line x1="10" y1="62" x2="330" y2="62" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="76" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">TabFQuAD (tables)</text>
  <text x="196" y="76" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">35.4</text>
  <text x="296" y="76" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">83.9</text>
  <rect x="155" y="69" width="80" height="5" rx="1" fill="#eeeeea"/>
  <rect x="155" y="69" width="28" height="5" rx="1" fill="#888" opacity="0.6"/>
  <rect x="235" y="69" width="80" height="5" rx="1" fill="#eeeeea"/>
  <rect x="235" y="69" width="67" height="5" rx="1" fill="#0a0a0a" opacity="0.7"/>
  <line x1="10" y1="82" x2="330" y2="82" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="96" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">InfoVQA (infographics)</text>
  <text x="196" y="96" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">70.0</text>
  <text x="296" y="96" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">81.8</text>
  <rect x="155" y="89" width="80" height="5" rx="1" fill="#eeeeea"/>
  <rect x="155" y="89" width="56" height="5" rx="1" fill="#888" opacity="0.6"/>
  <rect x="235" y="89" width="80" height="5" rx="1" fill="#eeeeea"/>
  <rect x="235" y="89" width="65" height="5" rx="1" fill="#0a0a0a" opacity="0.7"/>
  <line x1="10" y1="102" x2="330" y2="102" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="116" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">DocVQA (documents)</text>
  <text x="196" y="116" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">62.5</text>
  <text x="296" y="116" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">74.1</text>
  <rect x="155" y="109" width="80" height="5" rx="1" fill="#eeeeea"/>
  <rect x="155" y="109" width="50" height="5" rx="1" fill="#888" opacity="0.6"/>
  <rect x="235" y="109" width="80" height="5" rx="1" fill="#eeeeea"/>
  <rect x="235" y="109" width="59" height="5" rx="1" fill="#0a0a0a" opacity="0.7"/>
  <line x1="10" y1="122" x2="330" y2="122" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="136" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Shift Report (medical)</text>
  <text x="196" y="136" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">78.0</text>
  <text x="296" y="136" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">88.2</text>
  <rect x="155" y="129" width="80" height="5" rx="1" fill="#eeeeea"/>
  <rect x="155" y="129" width="62" height="5" rx="1" fill="#888" opacity="0.6"/>
  <rect x="235" y="129" width="80" height="5" rx="1" fill="#eeeeea"/>
  <rect x="235" y="129" width="70" height="5" rx="1" fill="#0a0a0a" opacity="0.7"/>
  <line x1="10" y1="144" x2="330" y2="144" stroke="#0a0a0a" stroke-width="0.8"/>
  <rect x="10" y="148" width="320" height="20" fill="#eeeeea" rx="2"/>
  <text x="18" y="162" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">Average (10 tasks)</text>
  <text x="196" y="162" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">67.0</text>
  <text x="296" y="162" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">81.3</text>
  <rect x="10" y="180" width="152" height="66" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="86" y="194" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">INFERENCE (NVIDIA L4)</text>
  <text x="18" y="210" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Query latency</text>
  <text x="154" y="210" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="end">~30 ms</text>
  <text x="18" y="224" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Indexing speed</text>
  <text x="154" y="224" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="end">0.39 s/page</text>
  <text x="18" y="238" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Storage (raw)</text>
  <text x="154" y="238" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="end">257 KB/page</text>
  <rect x="178" y="180" width="152" height="66" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="254" y="194" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">TRAINING CONFIG</text>
  <text x="186" y="210" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Pairs</text>
  <text x="322" y="210" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="end">118,695</text>
  <text x="186" y="224" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">LoRA rank</text>
  <text x="322" y="224" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="end">r=32, α=32</text>
  <text x="186" y="238" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Epochs / GPUs</text>
  <text x="322" y="238" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="end">1 / 8×GPU</text>
</svg>`
      }
    ]
  },

  // ── SECTION ───────────────────────────────────────────────────────────────
  { section: 'Mechanistic Interpretability' },

  // ── SUPERPOSITION ─────────────────────────────────────────────────────────
  {
    id: 'superposition',
    name: 'Superposition',
    fullName: 'Linear Representation Hypothesis & Superposition',
    tag: 'Mechanistic Interpretability',
    tagline: 'Networks pack more features than dimensions by tolerating interference',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="36" r="22" stroke="currentColor" stroke-width="1.2" opacity="0.25"/>
      <line x1="36" y1="36" x2="56" y2="24" stroke="currentColor" stroke-width="1.5"/>
      <line x1="36" y1="36" x2="14" y2="22" stroke="currentColor" stroke-width="1.5"/>
      <line x1="36" y1="36" x2="36" y2="10" stroke="currentColor" stroke-width="1.5"/>
      <line x1="36" y1="36" x2="58" y2="44" stroke="currentColor" stroke-width="1.5"/>
      <line x1="36" y1="36" x2="16" y2="50" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="56" cy="24" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="14" cy="22" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="36" cy="10" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="58" cy="44" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="16" cy="50" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="36" cy="36" r="4" fill="currentColor"/>
      <text x="36" y="66" font-family="monospace" font-size="6" fill="currentColor" text-anchor="middle">n feats &gt; d dims</text>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'Features are directions, not neurons',
        body: `<p>The naive hope for interpretability: each neuron detects one thing. Neuron 42 fires for "dog", neuron 43 for "cat". Inspect each neuron and you have a dictionary of the model's concepts.</p>
<p>This is almost never true. What <em>is</em> true, and surprisingly well-supported empirically, is the <strong>linear representation hypothesis</strong>: features are encoded as <em>directions</em> in the residual stream or activation space — not as individual neurons. A "dog" feature might be a specific vector in ℝᵈ. Several neurons each partially encode it; no single one owns it.</p>
<p>This immediately raises a question: if a model has d dimensions, can it only represent d features? The answer — from Elhage et al.'s <em>Toy Models of Superposition</em> (2022) — is a decisive <strong>no</strong>. A network can represent far more features than it has dimensions, at the cost of a little mutual interference. This is superposition, and it is the mechanistic root of why individual neurons look polysemantic.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="85" y="18" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">neuron view</text>
  <text x="255" y="18" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">direction view</text>
  <line x1="170" y1="24" x2="170" y2="248" stroke="#ddd" stroke-width="1"/>
  <rect x="20" y="30" width="130" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="85" y="44" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">neuron 0 → "dog"?</text>
  <rect x="20" y="56" width="130" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="85" y="70" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">neuron 1 → "cat"?</text>
  <rect x="20" y="82" width="130" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="85" y="96" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">neuron 2 → ???</text>
  <text x="85" y="124" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">reality: each neuron</text>
  <text x="85" y="137" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">responds to many things</text>
  <text x="85" y="152" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#0a0a0a" text-anchor="middle">polysemantic</text>
  <circle cx="255" cy="130" r="80" stroke="#0a0a0a" stroke-width="1" opacity="0.12"/>
  <line x1="255" y1="130" x2="314" y2="83" stroke="#0a0a0a" stroke-width="1.8" marker-end="url(#spm)"/>
  <line x1="255" y1="130" x2="183" y2="82" stroke="#0a0a0a" stroke-width="1.8" marker-end="url(#spm)"/>
  <line x1="255" y1="130" x2="255" y2="50" stroke="#0a0a0a" stroke-width="1.8" marker-end="url(#spm)"/>
  <line x1="255" y1="130" x2="329" y2="158" stroke="#0a0a0a" stroke-width="1.4" marker-end="url(#spm)" opacity="0.6"/>
  <line x1="255" y1="130" x2="190" y2="195" stroke="#0a0a0a" stroke-width="1.4" marker-end="url(#spm)" opacity="0.6"/>
  <text x="320" y="80" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">f₁</text>
  <text x="172" y="79" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">f₂</text>
  <text x="258" y="46" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">f₃</text>
  <text x="332" y="162" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">f₄</text>
  <text x="176" y="202" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">f₅</text>
  <circle cx="255" cy="130" r="4" fill="#0a0a0a"/>
  <text x="255" y="222" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">5 features in 2D space</text>
  <text x="255" y="236" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">near-orthogonal directions</text>
  <defs>
    <marker id="spm" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L6,2.5 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Core Mechanism',
        title: 'Sparse features enable an overcomplete basis',
        body: `<p>Why can a network do this without everything colliding? Because real-world features are <strong>sparse</strong>: at any given input, only a tiny fraction of all possible features are active simultaneously. "Is a banana", "has four legs", "is a legal document" are almost never all true at once.</p>
<p>Sparsity makes interference tolerable. If feature A and feature B are encoded as non-orthogonal directions and both fire at the same time, their dot product creates noise in each other's read-out. But if A fires in only 1% of inputs and B fires in only 0.5%, the expected interference is tiny — much smaller than the signal.</p>
<p>The network exploits this by packing features into a set of <strong>near-orthogonal directions</strong> in ℝᵈ — an overcomplete, or <em>redundant</em>, frame. In d=2 dimensions you can fit far more than 2 nearly-orthogonal directions if you tolerate a small, bounded amount of pairwise interference. The sparser the features, the more you can pack in.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="16" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">capacity vs. sparsity</text>
  <line x1="40" y1="210" x2="310" y2="210" stroke="#0a0a0a" stroke-width="1"/>
  <line x1="40" y1="210" x2="40" y2="30" stroke="#0a0a0a" stroke-width="1"/>
  <path d="M40,205 C80,200 120,170 170,110 S260,50 310,36" stroke="#0a0a0a" stroke-width="2" fill="none"/>
  <text x="315" y="39" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a"># features</text>
  <text x="315" y="50" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">stored</text>
  <text x="175" y="224" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">feature sparsity  →  sparser</text>
  <text x="25" y="120" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" transform="rotate(-90 25 120)">capacity</text>
  <line x1="40" y1="205" x2="44" y2="205" stroke="#888" stroke-width="1"/>
  <text x="6" y="208" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">d</text>
  <line x1="40" y1="36" x2="44" y2="36" stroke="#888" stroke-width="1"/>
  <text x="6" y="39" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">≫d</text>
  <circle cx="170" cy="110" r="5" fill="#0a0a0a"/>
  <line x1="170" y1="110" x2="170" y2="210" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="4 3" opacity="0.5"/>
  <text x="172" y="195" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">1% active</text>
  <rect x="50" y="30" width="220" height="52" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 3" fill="#eeeeea"/>
  <text x="160" y="48" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">interference on feature i from feature j:</text>
  <text x="160" y="66" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">E[noise] ∝ pⱼ · (fᵢ · fⱼ)²</text>
  <text x="160" y="79" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">small when p ≈ 0  OR  directions are orthogonal</text>
</svg>`
      },

      {
        level: 'Geometry',
        title: 'Polytope geometry and the origin of polysemanticity',
        body: `<p>Elhage et al. study a toy model: a linear encoder–decoder that compresses n features into d dimensions and reconstructs them with a ReLU. At the phase transition where superposition switches on, the weight vectors arrange into recognizable <strong>geometric structures</strong>: pairs of antipodal vectors on a circle (d=2), vertices of a pentagon, a tetrahedron, or an icosahedron — uniform polytopes in the d-dimensional unit sphere.</p>
<p>These are not coincidences. The optimal solution for packing k nearly-orthogonal unit vectors in ℝᵈ is exactly the vertices of the most symmetric polytope that fits k points, and the toy model finds this solution by gradient descent.</p>
<p><strong>Polysemantic neurons</strong> are a direct consequence. A neuron is a coordinate axis. When features are stored as polytope vertices, each axis has non-zero projection onto many feature directions. Reading out one neuron's activation therefore mixes many features — the neuron looks like it responds to unrelated stimuli not because the network is doing something inscrutable, but because it is the noisy projection of an overcomplete geometric basis.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="85" y="16" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">d=2, n=5 (pentagon)</text>
  <text x="255" y="16" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">neuron axis vs. features</text>
  <line x1="170" y1="24" x2="170" y2="248" stroke="#ddd" stroke-width="1"/>
  <circle cx="85" cy="130" r="72" stroke="#0a0a0a" stroke-width="1" opacity="0.15"/>
  <line x1="85" y1="130" x2="85" y2="58" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.3"/>
  <line x1="85" y1="130" x2="149" y2="130" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.3"/>
  <line x1="85" y1="130" x2="156" y2="89" stroke="#0a0a0a" stroke-width="2" marker-end="url(#spm2)"/>
  <line x1="85" y1="130" x2="107" y2="61" stroke="#0a0a0a" stroke-width="2" marker-end="url(#spm2)"/>
  <line x1="85" y1="130" x2="41" y2="61" stroke="#0a0a0a" stroke-width="2" marker-end="url(#spm2)"/>
  <line x1="85" y1="130" x2="18" y2="107" stroke="#0a0a0a" stroke-width="2" marker-end="url(#spm2)"/>
  <line x1="85" y1="130" x2="18" y2="153" stroke="#0a0a0a" stroke-width="2" marker-end="url(#spm2)"/>
  <text x="160" y="87" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">f₁</text>
  <text x="109" y="58" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">f₂</text>
  <text x="29" y="58" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">f₃</text>
  <text x="4" y="106" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">f₄</text>
  <text x="4" y="157" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">f₅</text>
  <text x="85" y="210" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">5 features, 2 dims</text>
  <text x="85" y="222" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">pentagon arrangement</text>
  <rect x="185" y="36" width="142" height="190" rx="3" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="256" y="54" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">neuron 0 activation</text>
  <text x="256" y="66" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">= projection onto x-axis</text>
  <line x1="196" y1="90" x2="318" y2="90" stroke="#0a0a0a" stroke-width="0.8" opacity="0.3"/>
  <rect x="196" y="95" width="122" height="12" rx="1" fill="#0a0a0a" opacity="0.6"/>
  <text x="188" y="105" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">f₁</text>
  <rect x="196" y="113" width="38" height="12" rx="1" fill="#0a0a0a" opacity="0.25"/>
  <text x="188" y="123" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">f₂</text>
  <rect x="196" y="131" width="19" height="12" rx="1" fill="#0a0a0a" opacity="0.15"/>
  <text x="188" y="141" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">f₃</text>
  <rect x="196" y="149" width="19" height="12" rx="1" fill="#0a0a0a" opacity="0.15"/>
  <text x="188" y="159" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">f₄</text>
  <rect x="196" y="167" width="38" height="12" rx="1" fill="#0a0a0a" opacity="0.25"/>
  <text x="188" y="177" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#888">f₅</text>
  <text x="256" y="204" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">one neuron → mixed signal</text>
  <text x="256" y="216" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">= polysemanticity</text>
  <defs>
    <marker id="spm2" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L6,2.5 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Mathematics',
        title: 'Capacity, interference, and the superposition phase transition',
        body: `<p>Elhage et al. define a one-layer model: compress n features through a d-dimensional bottleneck and reconstruct. With feature importances {w₁,…,wₙ} and sparsity probabilities {p₁,…,pₙ}, the loss for feature i is:</p>
<div class="math-block">Lᵢ = wᵢ · [1 − ‖fᵢ‖² + Σ_{j≠i} pⱼ (fᵢ·fⱼ)²]</div>
<p>The first term rewards a large norm (feature should be stored); the second is the <strong>interference cost</strong> from all other features j, scaled by their probability pⱼ. When sparsity is high (pⱼ → 0), interference is cheap and the model stores many features in superposition. When features are dense (pⱼ → 1), interference is costly and the model collapses to an orthogonal basis — at most d features.</p>
<p>The transition between these regimes is sharp: a <strong>first-order phase transition</strong> at a critical sparsity. Below it, the model uses a clean orthogonal basis. Above it, features snap discontinuously into a superposed polytope arrangement. The total <strong>feature capacity</strong> scales as:</p>
<div class="math-block">n_eff ≈ d / (1 − S),   S = 1 − p̄  (mean sparsity)</div>
<p>This is why sparse feature sets allow capacity well beyond d: a 512-dimensional model with 99%-sparse features can effectively represent orders of magnitude more than 512 concepts, accepting small but bounded pairwise interference for each.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="16" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">superposition phase diagram</text>
  <line x1="40" y1="210" x2="310" y2="210" stroke="#0a0a0a" stroke-width="1"/>
  <line x1="40" y1="210" x2="40" y2="30" stroke="#0a0a0a" stroke-width="1"/>
  <text x="175" y="228" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">sparsity  S = 1 − p</text>
  <text x="8" y="125" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" transform="rotate(-90 8 125)">features stored</text>
  <line x1="40" y1="158" x2="165" y2="158" stroke="#0a0a0a" stroke-width="2"/>
  <path d="M165,158 L165,50" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/>
  <path d="M165,50 C195,48 240,43 310,36" stroke="#0a0a0a" stroke-width="2" fill="none"/>
  <text x="100" y="174" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">orthogonal regime</text>
  <text x="100" y="185" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">≤ d features</text>
  <text x="240" y="68" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">superposition</text>
  <text x="240" y="80" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">regime ≫ d features</text>
  <line x1="36" y1="158" x2="44" y2="158" stroke="#0a0a0a" stroke-width="1"/>
  <text x="6" y="161" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">d</text>
  <text x="160" y="228" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">S*</text>
  <text x="156" y="220" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">phase</text>
  <text x="152" y="210" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">transition</text>
  <rect x="10" y="26" width="320" height="0" rx="0"/>
  <rect x="30" y="116" width="296" height="80" rx="2" stroke="#0a0a0a" stroke-width="0" fill="none"/>
  <rect x="30" y="116" width="0" height="0" rx="2"/>
  <rect x="10" y="232" width="320" height="24" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="248" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">n_eff ≈ d / (1−S)   |   interference per feature ∝ p · (fᵢ·fⱼ)²</text>
</svg>`
      }
    ]
  },

  // ── CIRCUITS ───────────────────────────────────────────────────────────────
  {
    id: 'circuits',
    name: 'Circuits',
    fullName: 'Mechanistic Circuits & Causal Intervention',
    tag: 'Mechanistic Interpretability',
    tagline: 'Computation decomposes into reusable, verifiable subgraphs',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="22" r="5" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="14" cy="50" r="5" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="36" cy="36" r="5" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="58" cy="22" r="5" stroke="currentColor" stroke-width="1.4"/>
      <circle cx="58" cy="50" r="5" stroke="currentColor" stroke-width="1.4"/>
      <line x1="19" y1="22" x2="31" y2="33" stroke="currentColor" stroke-width="1.2"/>
      <line x1="19" y1="50" x2="31" y2="39" stroke="currentColor" stroke-width="1.2"/>
      <line x1="41" y1="33" x2="53" y2="22" stroke="currentColor" stroke-width="1.2"/>
      <line x1="41" y1="39" x2="53" y2="50" stroke="currentColor" stroke-width="1.2"/>
      <line x1="14" y1="27" x2="14" y2="45" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" opacity="0.5"/>
      <text x="36" y="67" font-family="monospace" font-size="6" fill="currentColor" text-anchor="middle">circuit</text>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'Neural nets as programs, not black boxes',
        body: `<p>Olah et al.'s <em>Zoom In</em> (2020) proposes a wager: neural networks are not inscrutable blobs. They implement <strong>algorithms</strong> — small, reusable computational subgraphs that can be found, named, and validated. These subgraphs are circuits.</p>
<p>A circuit is a set of features (directions in activation space, per the linear representation hypothesis) connected by weights that implement a specific, human-readable computation. The hope is that the full model decomposes into a library of such circuits, many of which recur across tasks and even across models trained independently.</p>
<p>The claim is not that every weight matters. Most of the network is inert for any given behavior. A circuit is the <em>sparse subgraph</em> that causally explains a specific output. This decomposition matters because it is the difference between understanding and post-hoc rationalization: a circuit that causally produces a behavior is evidence of understanding; a description that merely correlates with output is storytelling.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="16" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">full network vs. active circuit</text>
  <g opacity="0.18">
    <circle cx="52" cy="80" r="6" stroke="#0a0a0a" stroke-width="1"/>
    <circle cx="52" cy="104" r="6" stroke="#0a0a0a" stroke-width="1"/>
    <circle cx="52" cy="128" r="6" stroke="#0a0a0a" stroke-width="1"/>
    <circle cx="52" cy="152" r="6" stroke="#0a0a0a" stroke-width="1"/>
    <circle cx="52" cy="176" r="6" stroke="#0a0a0a" stroke-width="1"/>
    <circle cx="120" cy="80" r="6" stroke="#0a0a0a" stroke-width="1"/>
    <circle cx="120" cy="104" r="6" stroke="#0a0a0a" stroke-width="1"/>
    <circle cx="120" cy="128" r="6" stroke="#0a0a0a" stroke-width="1"/>
    <circle cx="120" cy="152" r="6" stroke="#0a0a0a" stroke-width="1"/>
    <circle cx="120" cy="176" r="6" stroke="#0a0a0a" stroke-width="1"/>
    <line x1="58" y1="80" x2="114" y2="80" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="80" x2="114" y2="104" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="80" x2="114" y2="128" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="80" x2="114" y2="152" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="80" x2="114" y2="176" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="104" x2="114" y2="80" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="104" x2="114" y2="104" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="104" x2="114" y2="128" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="104" x2="114" y2="152" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="104" x2="114" y2="176" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="128" x2="114" y2="80" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="128" x2="114" y2="104" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="128" x2="114" y2="128" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="128" x2="114" y2="152" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="128" x2="114" y2="176" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="152" x2="114" y2="80" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="152" x2="114" y2="104" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="152" x2="114" y2="128" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="152" x2="114" y2="152" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="152" x2="114" y2="176" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="176" x2="114" y2="80" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="176" x2="114" y2="104" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="176" x2="114" y2="128" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="176" x2="114" y2="152" stroke="#0a0a0a" stroke-width="0.5"/>
    <line x1="58" y1="176" x2="114" y2="176" stroke="#0a0a0a" stroke-width="0.5"/>
  </g>
  <line x1="58" y1="104" x2="114" y2="128" stroke="#0a0a0a" stroke-width="2"/>
  <line x1="58" y1="152" x2="114" y2="128" stroke="#0a0a0a" stroke-width="2"/>
  <circle cx="52" cy="104" r="6" fill="#0a0a0a" opacity="0.85" stroke="#0a0a0a" stroke-width="1.5"/>
  <circle cx="52" cy="152" r="6" fill="#0a0a0a" opacity="0.85" stroke="#0a0a0a" stroke-width="1.5"/>
  <circle cx="120" cy="128" r="6" fill="#0a0a0a" opacity="0.85" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="86" cy="240" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle"/>
  <text x="86" y="220" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">sparse active circuit</text>
  <text x="86" y="233" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">inside dense network</text>
  <rect x="188" y="36" width="138" height="190" rx="3" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="257" y="56" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">Zoom In conjecture</text>
  <text x="196" y="78" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">1. Features are the</text>
  <text x="196" y="91" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">   right unit of analysis</text>
  <text x="196" y="111" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">2. Features connect into</text>
  <text x="196" y="124" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">   circuits</text>
  <text x="196" y="144" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">3. Circuits are universal</text>
  <text x="196" y="157" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">   — recur across models</text>
  <text x="196" y="185" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">→ decompose, name,</text>
  <text x="196" y="198" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">   validate each piece</text>
</svg>`
      },

      {
        level: 'Existence Proofs',
        title: 'Induction heads, IOI, and grokking circuits',
        body: `<p><strong>Induction heads</strong> (Olsson et al., 2022) are the cleanest example. In two-layer transformers, a specific pair of attention heads implements in-context copying: one head (the "previous token head") shifts the key signal by one position; a second head (the "induction head") queries for a past token matching the current token and attends to what followed it. Together they implement the algorithm <em>if [A][B]…[A] then predict [B]</em>. They appear in every transformer trained long enough, regardless of initialization — a candidate universal.</p>
<p><strong>Indirect Object Identification (IOI)</strong> (Wang et al., 2022): given "John and Mary went to the store. John gave a drink to ___", GPT-2 Medium reliably outputs "Mary". Wang et al. identify a circuit of ~26 attention heads implementing this, including name-mover heads, inhibition heads, and duplicate-token heads. Ablating the circuit collapses performance; restoring only these heads from a patched run recovers it.</p>
<p><strong>Grokking circuits</strong> (Nanda et al., 2023): a small transformer trained on modular addition (a+b mod p) eventually "groks" — generalizes long after training loss saturates. The learned algorithm uses Fourier components: it embeds inputs as frequency vectors, rotates them via attention, and reads off the result with cosine/sine detectors. The circuit is not just described but fully reverse-engineered: you can predict the model's logits from the circuit alone.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">induction head mechanism</text>
  <rect x="14" y="24" width="40" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.2" fill="#eeeeea"/>
  <text x="34" y="38" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">[A]</text>
  <rect x="62" y="24" width="40" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.2" fill="#eeeeea"/>
  <text x="82" y="38" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">[B]</text>
  <rect x="110" y="24" width="40" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.2" fill="#eeeeea" opacity="0.5"/>
  <text x="130" y="38" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">…</text>
  <rect x="158" y="24" width="40" height="20" rx="2" stroke="#0a0a0a" stroke-width="2" fill="#0a0a0a" opacity="0.1"/>
  <text x="178" y="38" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">[A]</text>
  <rect x="206" y="24" width="40" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.2" stroke-dasharray="4 2"/>
  <text x="226" y="38" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">[?]</text>
  <path d="M82 44 C 82 66 178 66 178 44" stroke="#888" stroke-width="1" fill="none" stroke-dasharray="3 2"/>
  <text x="130" y="64" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">prev-token head</text>
  <text x="130" y="75" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">shifts key by 1</text>
  <path d="M178 44 C 178 90 226 90 226 44" stroke="#0a0a0a" stroke-width="2" fill="none" marker-end="url(#cim)"/>
  <text x="204" y="88" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">induction head</text>
  <text x="204" y="99" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">attends to [A]→[B]</text>
  <text x="226" y="120" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">predict [B]</text>
  <line x1="14" y1="148" x2="326" y2="148" stroke="#ddd" stroke-width="1"/>
  <text x="170" y="164" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">IOI circuit sketch  (GPT-2 Medium)</text>
  <rect x="14" y="174" width="70" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="49" y="188" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">dup-token heads</text>
  <rect x="14" y="202" width="70" height="20" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="49" y="216" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">S-inhibition</text>
  <rect x="134" y="186" width="72" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.1"/>
  <text x="170" y="200" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">name-mover heads</text>
  <rect x="256" y="186" width="70" height="20" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="291" y="200" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">logit output</text>
  <line x1="84" y1="184" x2="134" y2="193" stroke="#0a0a0a" stroke-width="1" marker-end="url(#cim)"/>
  <line x1="84" y1="212" x2="134" y2="198" stroke="#0a0a0a" stroke-width="1" marker-end="url(#cim)"/>
  <line x1="206" y1="196" x2="256" y2="196" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#cim)"/>
  <text x="170" y="242" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">~26 heads identified; ablating circuit → chance performance</text>
  <defs>
    <marker id="cim" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L6,2.5 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Causal Methods',
        title: 'Patching, scrubbing, and causal abstraction',
        body: `<p>Describing a circuit is not proving it. The epistemic upgrade comes from <strong>causal intervention</strong>: surgically edit a specific activation and measure the effect on the output. If the behavior changes as predicted, the component is causally responsible — not merely correlated.</p>
<p><strong>Activation patching</strong>: run the model on a "clean" and a "corrupted" input. Patch one activation from the clean run into the corrupted run mid-forward-pass. Measure how much output recovers. This localizes which components carry the relevant information.</p>
<p><strong>Path patching</strong> (Wang et al.) extends this to edges: patch the signal flowing along a specific weight path, holding everything else fixed. You can attribute behavior to individual attention-head-to-attention-head edges.</p>
<p><strong>Causal scrubbing</strong> (Chan et al., 2022) provides a principled score: given a hypothesized circuit graph, replace all activations <em>outside</em> the circuit with samples from a reference distribution. The residual performance is your scrubbing score — it quantifies how much of the behavior the circuit alone explains.</p>
<p><strong>Distributed Alignment Search (DAS)</strong> / causal abstraction (Geiger et al., 2023) goes further: it searches for a rotation of the activation space such that the model implements a specified causal graph under that rotation. This validates not just "which nodes matter" but "does the network's internal structure match this causal diagram."</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">activation patching</text>
  <rect x="14" y="26" width="130" height="26" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="79" y="43" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">clean run  x*</text>
  <rect x="14" y="62" width="130" height="26" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2"/>
  <text x="79" y="79" font-family="'JetBrains Mono',monospace" font-size="8" fill="#888" text-anchor="middle">corrupted run  x</text>
  <rect x="14" y="100" width="56" height="22" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea" opacity="0.6"/>
  <text x="42" y="115" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">layer 0</text>
  <rect x="78" y="100" width="56" height="22" rx="2" stroke="#0a0a0a" stroke-width="2" fill="#0a0a0a" opacity="0.12"/>
  <text x="106" y="115" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">layer L ← patch</text>
  <rect x="14" y="132" width="130" height="22" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea" opacity="0.6"/>
  <text x="79" y="147" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">layer L+1 … output</text>
  <path d="M79 52 C 79 84 106 84 106 100" stroke="#0a0a0a" stroke-width="1.5" stroke-dasharray="3 2" marker-end="url(#cam)"/>
  <text x="94" y="84" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">patch</text>
  <path d="M42 122 L42 132" stroke="#0a0a0a" stroke-width="1" marker-end="url(#cam)"/>
  <path d="M106 122 L79 132" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#cam)"/>
  <text x="79" y="174" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">measure Δ output</text>
  <text x="79" y="187" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">→ localizes causal role</text>
  <line x1="172" y1="24" x2="172" y2="240" stroke="#ddd" stroke-width="1"/>
  <text x="258" y="34" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">method comparison</text>
  <rect x="184" y="42" width="144" height="18" rx="2" fill="#0a0a0a" opacity="0.07" stroke="#0a0a0a" stroke-width="1"/>
  <text x="256" y="55" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">Activation patching — nodes</text>
  <rect x="184" y="66" width="144" height="18" rx="2" fill="#0a0a0a" opacity="0.07" stroke="#0a0a0a" stroke-width="1"/>
  <text x="256" y="79" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">Path patching — edges</text>
  <rect x="184" y="90" width="144" height="18" rx="2" fill="#0a0a0a" opacity="0.07" stroke="#0a0a0a" stroke-width="1"/>
  <text x="256" y="103" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">Causal scrubbing — subgraph</text>
  <rect x="184" y="114" width="144" height="18" rx="2" fill="#0a0a0a" opacity="0.12" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="256" y="127" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">DAS — causal diagram</text>
  <text x="256" y="158" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">each stronger claim</text>
  <text x="256" y="170" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">requires stronger evidence</text>
  <text x="256" y="190" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">correlation → causal role</text>
  <text x="256" y="203" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">→ causal structure</text>
  <defs>
    <marker id="cam" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L6,2.5 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Mathematics',
        title: 'Formal definitions and the scrubbing score',
        body: `<p>Let M be the model's forward pass, with intermediate activations {aᵢ}. For clean input x* and corrupted input x, <strong>activation patching</strong> at node i measures:</p>
<div class="math-block">ΔI(i) = M(x with aᵢ ← aᵢ*) − M(x)</div>
<p>A large ΔI(i) means node i carries information that drives the clean behavior. Summing over layers and heads gives an attribution map. <strong>Path patching</strong> isolates an edge (i→j) by patching only the message flowing along that edge, freezing all other inputs to j.</p>
<p><strong>Causal scrubbing</strong> formalizes circuit sufficiency. Given hypothesis H (a subgraph with a correspondence φ mapping nodes to "semantically equivalent" inputs), the scrubbing score is:</p>
<div class="math-block">S(H) = E[M(x*) | resample outside H] / E[M(x*)]</div>
<p>where activations outside H are replaced by activations from a random input with the same semantic role under φ. S(H) = 1 means the circuit fully explains the behavior; S(H) = 0 means the circuit is irrelevant.</p>
<p><strong>DAS</strong> (Geiger et al.) searches for a rotation R such that intervening on R·a matches the predictions of a causal model C. Formally: find R minimizing E[‖C(do(Rᵢaᵢ←v)) − M(do(aᵢ←Rᵀv))‖] over interventions v. Alignment between the neural model and C under R is evidence that the network implements the causal graph, not just correlates with it.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">causal scrubbing score S(H)</text>
  <line x1="40" y1="200" x2="300" y2="200" stroke="#0a0a0a" stroke-width="1"/>
  <line x1="40" y1="200" x2="40" y2="30" stroke="#0a0a0a" stroke-width="1"/>
  <rect x="40" y="104" width="50" height="96" fill="#0a0a0a" opacity="0.08" stroke="#0a0a0a" stroke-width="1"/>
  <rect x="110" y="64" width="50" height="136" fill="#0a0a0a" opacity="0.08" stroke="#0a0a0a" stroke-width="1"/>
  <rect x="180" y="34" width="50" height="166" fill="#0a0a0a" opacity="0.08" stroke="#0a0a0a" stroke-width="1"/>
  <rect x="250" y="44" width="50" height="156" fill="#0a0a0a" opacity="0.2" stroke="#0a0a0a" stroke-width="1.5"/>
  <text x="65" y="215" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">random</text>
  <text x="135" y="215" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">partial</text>
  <text x="205" y="215" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">circuit</text>
  <text x="275" y="215" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">full model</text>
  <line x1="36" y1="34" x2="44" y2="34" stroke="#0a0a0a" stroke-width="1"/>
  <text x="6" y="38" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">S=1</text>
  <line x1="36" y1="200" x2="44" y2="200" stroke="#0a0a0a" stroke-width="1"/>
  <text x="6" y="203" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">S=0</text>
  <rect x="30" y="224" width="280" height="30" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="238" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">ΔI(i) = M(x, aᵢ←aᵢ*) − M(x)      path patch: fix edge i→j only</text>
</svg>`
      }
    ]
  },

  // ── SPARSE AUTOENCODERS ────────────────────────────────────────────────────
  {
    id: 'saes',
    name: 'SAEs',
    fullName: 'Sparse Autoencoders & Dictionary Learning',
    tag: 'Mechanistic Interpretability',
    tagline: 'Decompose polysemantic activations into a monosemantic overcomplete basis',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="28" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.4"/>
      <rect x="28" y="10" width="10" height="10" rx="1" fill="currentColor" opacity="0.7"/>
      <rect x="28" y="24" width="10" height="10" rx="1" fill="currentColor" opacity="0.15"/>
      <rect x="28" y="38" width="10" height="10" rx="1" fill="currentColor" opacity="0.05"/>
      <rect x="28" y="52" width="10" height="10" rx="1" fill="currentColor" opacity="0.6"/>
      <line x1="22" y1="33" x2="28" y2="15" stroke="currentColor" stroke-width="1" opacity="0.7"/>
      <line x1="22" y1="35" x2="28" y2="29" stroke="currentColor" stroke-width="1" opacity="0.15"/>
      <line x1="22" y1="37" x2="28" y2="43" stroke="currentColor" stroke-width="1" opacity="0.05"/>
      <line x1="22" y1="39" x2="28" y2="57" stroke="currentColor" stroke-width="1" opacity="0.6"/>
      <rect x="50" y="28" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.4"/>
      <line x1="38" y1="15" x2="50" y2="33" stroke="currentColor" stroke-width="1" opacity="0.7"/>
      <line x1="38" y1="29" x2="50" y2="35" stroke="currentColor" stroke-width="1" opacity="0.15"/>
      <line x1="38" y1="43" x2="50" y2="37" stroke="currentColor" stroke-width="1" opacity="0.05"/>
      <line x1="38" y1="57" x2="50" y2="39" stroke="currentColor" stroke-width="1" opacity="0.6"/>
      <text x="36" y="70" font-family="monospace" font-size="5.5" fill="currentColor" text-anchor="middle">sparse dict</text>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'Superposition is the problem; SAEs are the proposed fix',
        body: `<p>Superposition means a d-dimensional activation vector is a compressed mixture of many more features. You cannot read individual neurons because each neuron is a noisy projection of an overcomplete basis — not a dedicated detector.</p>
<p>The sparse autoencoder approach, developed by Bricken et al. in <em>Towards Monosemanticity</em> (2023), asks: can we <em>learn</em> that overcomplete basis? Train a bottleneck network that takes a d-dimensional activation, expands it into a much wider N-dimensional code (N ≫ d), forces the code to be sparse (few non-zero entries), then reconstructs the original activation. If the network learns properly, each code dimension ideally captures one human-interpretable feature.</p>
<p>The key bet is that the model's internal features really are sparse in the wild — most are inactive for any given token — so a sparse code can find them. The dictionary (decoder weights) becomes a catalog of features; a feature fires by contributing its decoder column to the reconstructed activation. The SAE does not change the model; it is a lens trained to decompose what the model computes.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">sparse autoencoder as a decomposition lens</text>
  <rect x="14" y="100" width="44" height="60" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="36" y="126" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">act.</text>
  <text x="36" y="139" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">x ∈ ℝᵈ</text>
  <text x="36" y="178" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">d dims</text>
  <path d="M58 130 L86 130" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#saem)"/>
  <text x="72" y="124" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">W_enc</text>
  <rect x="88" y="30" width="44" height="200" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="110" y="126" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">f ∈ ℝᴺ</text>
  <text x="110" y="139" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">sparse</text>
  <rect x="92" y="34" width="36" height="6" rx="1" fill="#0a0a0a" opacity="0.7"/>
  <rect x="92" y="44" width="36" height="6" rx="1" fill="#0a0a0a" opacity="0.05"/>
  <rect x="92" y="54" width="36" height="6" rx="1" fill="#0a0a0a" opacity="0.55"/>
  <rect x="92" y="64" width="36" height="6" rx="1" fill="#0a0a0a" opacity="0.03"/>
  <rect x="92" y="74" width="36" height="6" rx="1" fill="#0a0a0a" opacity="0.02"/>
  <rect x="92" y="84" width="36" height="6" rx="1" fill="#0a0a0a" opacity="0.48"/>
  <rect x="92" y="94" width="36" height="6" rx="1" fill="#0a0a0a" opacity="0.02"/>
  <rect x="92" y="104" width="36" height="6" rx="1" fill="#0a0a0a" opacity="0.01"/>
  <text x="110" y="228" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">N ≫ d features</text>
  <path d="M132 130 L160 130" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#saem)"/>
  <text x="146" y="124" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">W_dec</text>
  <rect x="162" y="100" width="44" height="60" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="184" y="126" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">x̂ ∈ ℝᵈ</text>
  <text x="184" y="139" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">recon.</text>
  <text x="184" y="178" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">d dims</text>
  <rect x="222" y="26" width="106" height="200" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="275" y="44" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">decoder columns</text>
  <text x="275" y="56" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">= feature dictionary</text>
  <line x1="232" y1="71" x2="320" y2="71" stroke="#0a0a0a" stroke-width="1.2"/>
  <text x="240" y="85" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">feat 0: "the"</text>
  <line x1="232" y1="92" x2="320" y2="92" stroke="#ddd" stroke-width="0.5"/>
  <text x="240" y="106" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">feat 1: inactive</text>
  <line x1="232" y1="112" x2="320" y2="112" stroke="#ddd" stroke-width="0.5"/>
  <text x="240" y="126" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">feat 2: "Paris"</text>
  <line x1="232" y1="132" x2="320" y2="132" stroke="#ddd" stroke-width="0.5"/>
  <text x="240" y="146" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">feat 3: inactive</text>
  <line x1="232" y1="152" x2="320" y2="152" stroke="#ddd" stroke-width="0.5"/>
  <text x="240" y="166" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">feat 4: inactive</text>
  <line x1="232" y1="172" x2="320" y2="172" stroke="#ddd" stroke-width="0.5"/>
  <text x="240" y="186" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">feat 5: "capital"</text>
  <defs>
    <marker id="saem" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L6,2.5 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Core Mechanism',
        title: 'Architecture, L1 penalty, and the dead-feature problem',
        body: `<p>The SAE has two learned weight matrices. The <strong>encoder</strong> W_enc ∈ ℝ^{N×d} maps activation x to a pre-activation, adds a bias, then applies ReLU to produce sparse feature activations f:</p>
<div class="math-block">f(x) = ReLU(W_enc(x − b_pre) + b_enc)</div>
<p>The <strong>decoder</strong> W_dec ∈ ℝ^{d×N} reconstructs: x̂ = W_dec f(x) + b_dec. Decoder columns are L2-normalized to prevent features from growing large norms as a proxy for activation magnitude.</p>
<p>The loss is reconstruction fidelity plus an L1 sparsity penalty:</p>
<div class="math-block">L = ‖x − x̂‖² + λ ‖f(x)‖₁</div>
<p>λ controls the sparsity–fidelity tradeoff. Too large: most features die (never activate, called <strong>dead features</strong>). Too small: features are dense and polysemantic, defeating the purpose. The dead-feature problem is persistent — a fraction of dictionary entries collapse to zero and never recover during training. Remedies include neuron resampling (re-initializing dead features to high-loss examples) and the <strong>TopK</strong> variant that enforces exactly k active features per token, replacing the L1 penalty entirely.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">sparsity–fidelity tradeoff</text>
  <line x1="40" y1="200" x2="300" y2="200" stroke="#0a0a0a" stroke-width="1"/>
  <line x1="40" y1="200" x2="40" y2="30" stroke="#0a0a0a" stroke-width="1"/>
  <path d="M50,38 C80,40 120,55 170,100 S260,175 295,196" stroke="#0a0a0a" stroke-width="2" fill="none"/>
  <path d="M50,196 C100,194 150,180 200,140 S270,60 295,40" stroke="#0a0a0a" stroke-width="1.5" stroke-dasharray="5 3" fill="none"/>
  <text x="300" y="42" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">sparsity</text>
  <text x="300" y="196" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">recon.</text>
  <text x="175" y="218" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">L1 coefficient  λ  →  larger</text>
  <text x="16" y="118" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" transform="rotate(-90 16 118)">loss</text>
  <circle cx="170" cy="118" r="5" fill="#0a0a0a"/>
  <line x1="170" y1="118" x2="170" y2="200" stroke="#0a0a0a" stroke-width="0.8" stroke-dasharray="3 2" opacity="0.5"/>
  <text x="173" y="115" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">operating point</text>
  <rect x="34" y="228" width="272" height="24" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="242" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">L = ‖x − W_dec·ReLU(W_enc x + b)‖² + λ‖f‖₁</text>
  <text x="72" y="64" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">dead features</text>
  <text x="72" y="76" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">(λ too large)</text>
  <text x="254" y="168" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">polysemantic</text>
  <text x="254" y="180" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">(λ too small)</text>
</svg>`
      },

      {
        level: 'Findings',
        title: 'Towards Monosemanticity → Scaling Monosemanticity',
        body: `<p><strong>Towards Monosemanticity</strong> (Bricken et al., 2023) applied SAEs to a single MLP layer of a one-layer transformer trained on the Pile. A 512-dimensional MLP hidden layer was expanded to a 4096-feature dictionary. The result: thousands of features that activate on specific, nameable concepts — DNA sequences, base64 strings, legal language, emotional valence, individual Arabic letters. Many are cleanly monosemantic in a way the raw neurons never were.</p>
<p>Crucially, the paper validated features causally: steering by adding a feature's decoder column to the residual stream changed model behavior in the predicted direction. "Dog" features caused dog-related completions; suppressing a sycophancy-related feature reduced agreement behavior.</p>
<p><strong>Scaling Monosemanticity</strong> (Templeton et al., 2024) applied much larger SAEs to Claude 3 Sonnet's middle residual stream — dictionaries up to ~34 million features. Findings at scale: features form <em>families</em> organized by geography, emotion, and syntactic role. <strong>Multimodal features</strong> activate on the same concept across languages and modalities. A "Golden Gate Bridge" feature, when clamped on, caused Claude to identify as the bridge. Emotion-like features (fear, frustration) were found and shown to influence behavior. This demonstrated SAEs are not just a lab toy: they surface structure that persists to frontier model scale.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">SAE scaling results</text>
  <rect x="10" y="24" width="320" height="18" fill="#0a0a0a" rx="2"/>
  <text x="18" y="37" font-family="'JetBrains Mono',monospace" font-size="7" fill="#f8f8f6">Paper</text>
  <text x="150" y="37" font-family="'JetBrains Mono',monospace" font-size="7" fill="#f8f8f6" text-anchor="middle">Model / Layer</text>
  <text x="270" y="37" font-family="'JetBrains Mono',monospace" font-size="7" fill="#f8f8f6" text-anchor="middle">Dict. size</text>
  <line x1="10" y1="42" x2="330" y2="42" stroke="#ccc" stroke-width="0.5"/>
  <text x="18" y="56" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Towards Mono.</text>
  <text x="150" y="56" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">1L transformer MLP</text>
  <text x="270" y="56" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">4 096</text>
  <line x1="10" y1="62" x2="330" y2="62" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="76" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Scaling Mono.</text>
  <text x="150" y="76" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">Claude 3 Sonnet mid-res</text>
  <text x="270" y="76" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">1M – 34M</text>
  <line x1="10" y1="82" x2="330" y2="82" stroke="#0a0a0a" stroke-width="0.8"/>
  <text x="170" y="100" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">key findings at scale</text>
  <rect x="14" y="108" width="148" height="56" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="88" y="124" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">feature families</text>
  <text x="88" y="138" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">geography, emotion,</text>
  <text x="88" y="150" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">syntax cluster together</text>
  <rect x="178" y="108" width="148" height="56" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="252" y="124" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">multimodal features</text>
  <text x="252" y="138" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">same concept fires across</text>
  <text x="252" y="150" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">languages &amp; modalities</text>
  <rect x="14" y="172" width="148" height="56" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="88" y="188" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">causal steering</text>
  <text x="88" y="202" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">clamp "Golden Gate"</text>
  <text x="88" y="214" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">→ Claude IDs as bridge</text>
  <rect x="178" y="172" width="148" height="56" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="252" y="188" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">emotion features</text>
  <text x="252" y="202" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">fear / frustration found,</text>
  <text x="252" y="214" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">influence behavior</text>
  <text x="170" y="244" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">features validated causally via activation steering</text>
</svg>`
      },

      {
        level: 'Open Problems',
        title: 'Caveats, critiques, and the move toward attribution graphs',
        body: `<p>SAEs are under real scrutiny, and the honest picture includes three hard problems.</p>
<p><strong>Feature splitting</strong>: as dictionary size N grows, coarse features subdivide into more specific ones (e.g., "dog" → "small dog", "large dog", "dog in context of ownership"). There is no natural stopping criterion — the right level of granularity is unclear, and different N may recover different, incommensurable feature catalogs.</p>
<p><strong>Incomplete reconstruction</strong>: even large SAEs fail to reconstruct a significant fraction of the variance in activations. The missing component may carry structure the SAE simply cannot represent. This limits downstream causal conclusions drawn from SAE features alone.</p>
<p><strong>Basis ambiguity</strong>: it is not proven that SAEs recover the model's "true" features rather than a convenient but arbitrary sparse basis consistent with the observations. The linear representation hypothesis gives SAEs a target, but the target is not uniquely defined.</p>
<p>The 2025 move toward <strong>attribution graphs and circuit tracing</strong> (Anthropic's <em>Biology of a Language Model</em> work) is partly a response to these limits. Rather than building a static catalog of features, attribution graphs trace end-to-end how information flows from input tokens to output logits through cross-layer transcoder features. Cross-layer transcoders replace SAEs with a model that maps one layer's residual stream to the next layer's contribution, enabling a causal graph over the full computation — recovering not just "what features exist" but "how they interact to produce the answer."</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">SAEs vs. attribution graphs</text>
  <rect x="14" y="26" width="148" height="110" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <text x="88" y="44" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">SAE feature catalog</text>
  <text x="24" y="62" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">+ interpretable features</text>
  <text x="24" y="76" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">+ scales to large models</text>
  <text x="24" y="90" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">+ causal steering works</text>
  <text x="24" y="108" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">− feature splitting</text>
  <text x="24" y="122" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">− incomplete recon.</text>
  <rect x="178" y="26" width="148" height="110" rx="3" stroke="#0a0a0a" stroke-width="2" fill="#eeeeea"/>
  <text x="252" y="44" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">attribution graphs</text>
  <text x="188" y="62" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">cross-layer transcoders</text>
  <text x="188" y="76" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">map residual stream</text>
  <text x="188" y="90" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">layer L → layer L+1</text>
  <text x="188" y="108" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">end-to-end causal graph</text>
  <text x="188" y="122" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">not just static catalog</text>
  <text x="162" y="88" font-family="'JetBrains Mono',monospace" font-size="10" fill="#888">→</text>
  <text x="170" y="162" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">transcoder: replace MLP sublayer</text>
  <rect x="50" y="170" width="240" height="22" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="88" y="185" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">x_{L}</text>
  <path d="M106 181 L134 181" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#saem2)"/>
  <text x="170" y="185" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">T(x_{L})</text>
  <path d="M200 181 L226 181" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#saem2)"/>
  <text x="252" y="185" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">x_{L+1}</text>
  <text x="170" y="215" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">sparse features mediate layer-to-layer information flow</text>
  <text x="170" y="230" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">→ trace full computation path from token to logit</text>
  <defs>
    <marker id="saem2" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L6,2.5 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      }
    ]
  },

  // ── CAUSAL ABSTRACTION ─────────────────────────────────────────────────────
  {
    id: 'causal-abstraction',
    name: 'Causal Abstraction',
    fullName: 'Causal Abstraction & Interchange Interventions',
    tag: 'Mechanistic Interpretability',
    tagline: 'A formal correctness criterion that converts interpretation into a falsifiable claim',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="22" height="14" rx="2" stroke="currentColor" stroke-width="1.4"/>
      <text x="19" y="21" font-family="monospace" font-size="7" fill="currentColor" text-anchor="middle">H</text>
      <rect x="8" y="48" width="22" height="14" rx="2" stroke="currentColor" stroke-width="1.4"/>
      <text x="19" y="59" font-family="monospace" font-size="7" fill="currentColor" text-anchor="middle">N</text>
      <rect x="42" y="10" width="22" height="14" rx="2" stroke="currentColor" stroke-width="1.4"/>
      <text x="53" y="21" font-family="monospace" font-size="7" fill="currentColor" text-anchor="middle">H'</text>
      <rect x="42" y="48" width="22" height="14" rx="2" stroke="currentColor" stroke-width="1.4"/>
      <text x="53" y="59" font-family="monospace" font-size="7" fill="currentColor" text-anchor="middle">N'</text>
      <path d="M30 17 L42 17" stroke="currentColor" stroke-width="1.3" marker-end="url(#cai)"/>
      <path d="M30 55 L42 55" stroke="currentColor" stroke-width="1.3" marker-end="url(#cai)"/>
      <path d="M19 24 L19 48" stroke="currentColor" stroke-width="1.3" marker-end="url(#cai)"/>
      <path d="M53 24 L53 48" stroke="currentColor" stroke-width="1.3" marker-end="url(#cai)"/>
      <text x="36" y="39" font-family="monospace" font-size="6" fill="currentColor" text-anchor="middle" opacity="0.6">≅</text>
      <defs>
        <marker id="cai" markerWidth="5" markerHeight="5" refX="3" refY="2" orient="auto">
          <path d="M0,0 L0,4 L4,2 z" fill="currentColor"/>
        </marker>
      </defs>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'The central anxiety: is interpretability science or storytelling?',
        body: `<p>The recurring fear in mechanistic interpretability is that every explanation is a story pasted onto activations after the fact. You find a pattern, you name it, you write a compelling narrative — but the model doesn't care. A different researcher finds a different pattern in the same network and writes an equally compelling narrative. Neither has been wrong; neither has been right. There is no test.</p>
<p>Causal abstraction, developed by Geiger, Potts, Icard and collaborators, is the field's formal answer to this anxiety. It converts "here is a story about how the model works" into "here is a falsifiable claim with a pass/fail test." The key move is to demand not just that a high-level algorithm <em>correlates</em> with what the network does, but that they share the same <strong>causal structure</strong> — that intervening on the algorithm produces the same output change as the corresponding intervention on the network.</p>
<p>This is the conceptual upgrade that makes the intervention toolkit more than a bag of techniques. The techniques — activation patching, path patching, causal scrubbing — are implementations of the same underlying idea: test claims causally, not correlationally. Causal abstraction is the unifying theory that says what "test" means and what "correct interpretation" means.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">two levels of description</text>
  <rect x="14" y="28" width="140" height="90" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="84" y="46" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">high-level algorithm H</text>
  <text x="24" y="66" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">variables: X, Y, Z</text>
  <text x="24" y="81" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">causal edges: X→Z, Y→Z</text>
  <text x="24" y="96" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">do(X←x') → Z changes</text>
  <text x="84" y="112" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">human-readable algorithm</text>
  <rect x="186" y="28" width="140" height="90" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="256" y="46" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">neural network N</text>
  <text x="196" y="66" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">activations: a₀, a₁, …</text>
  <text x="196" y="81" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">weights: W₁, W₂, …</text>
  <text x="196" y="96" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">patch aᵢ → output changes</text>
  <text x="256" y="112" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">opaque computation</text>
  <text x="170" y="142" font-family="'JetBrains Mono',monospace" font-size="10" fill="#888" text-anchor="middle">≅ ?</text>
  <rect x="44" y="158" width="252" height="44" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <text x="170" y="177" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">correctness criterion: swap X in H and aᵢ in N</text>
  <text x="170" y="193" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">→ outputs must change identically</text>
  <text x="170" y="240" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">correlation is not enough — causal structure must match</text>
</svg>`
      },

      {
        level: 'Lineage',
        title: 'From Pearl to ROME to AtP*',
        body: `<p>The lineage begins with <strong>Pearl's causal mediation analysis</strong> (2001): given a causal DAG, decompose the total effect of X on Y into a direct effect and an indirect effect mediated through intermediate variable M. The key objects are the Natural Direct Effect (NDE) and Natural Indirect Effect (NIE), defined via counterfactual do-expressions — you hold M fixed at its value under one treatment while varying X.</p>
<p>This entered NLP via <strong>Vig et al. (2020)</strong>, who applied causal mediation to localize gender bias in GPT-2: which attention heads mediate the bias? They treat each head's output as the mediator M and measure how much the bias effect flows through it.</p>
<p><strong>ROME and causal tracing</strong> (Meng et al., 2022) applied the same logic to factual recall: "The Eiffel Tower is in ___". Causal tracing patches in activations from a corrupted run (where "Eiffel Tower" is scrambled) into a clean run, one position and layer at a time, measuring which site restores the correct output. The answer: a narrow band of MLP layers at the token position of the subject. ROME then edits facts by directly writing to those MLP weights.</p>
<p><strong>Activation and path patching</strong> (Wang et al., 2022) generalized this into standard circuit-finding practice. <strong>Attribution patching (AtP*)</strong> (Kramár, Nanda et al., 2023) makes patching scale: approximate the patch effect with a first-order Taylor expansion — replace the expensive forward pass with a single backward pass gradient times the activation difference. AtP* is accurate enough to find circuits at GPT-4 scale without thousands of forward passes.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">lineage of causal intervention</text>
  <line x1="170" y1="28" x2="170" y2="240" stroke="#ddd" stroke-width="1.5"/>
  <circle cx="170" cy="46" r="5" fill="#0a0a0a"/>
  <text x="178" y="44" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">Pearl 2001</text>
  <text x="178" y="55" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">causal mediation, NDE/NIE</text>
  <circle cx="170" cy="84" r="5" fill="#0a0a0a"/>
  <text x="178" y="82" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">Vig et al. 2020</text>
  <text x="178" y="93" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">mediation analysis → NLP bias</text>
  <circle cx="170" cy="122" r="5" fill="#0a0a0a"/>
  <text x="178" y="120" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">Meng et al. 2022  (ROME)</text>
  <text x="178" y="131" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">causal tracing → factual recall</text>
  <circle cx="170" cy="160" r="5" fill="#0a0a0a"/>
  <text x="178" y="158" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">Wang et al. 2022</text>
  <text x="178" y="169" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">path patching → IOI circuit</text>
  <circle cx="170" cy="198" r="5" fill="#0a0a0a"/>
  <text x="178" y="196" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">Kramár &amp; Nanda 2023  (AtP*)</text>
  <text x="178" y="207" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">gradient × Δact → scalable approx</text>
  <circle cx="170" cy="232" r="5" fill="#0a0a0a" opacity="0.4"/>
  <text x="178" y="234" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">Geiger et al. → formal unification</text>
  <text x="56" y="44" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="end">stats</text>
  <text x="56" y="84" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="end">NLP</text>
  <text x="56" y="122" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="end">LLM</text>
  <text x="56" y="160" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="end">circuits</text>
  <text x="56" y="198" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="end">scale</text>
</svg>`
      },

      {
        level: 'Core Concept',
        title: 'Interchange interventions and the commutativity condition',
        body: `<p>The formal setup: you have a high-level causal model H with variables {V₁, V₂, …} and a neural network N with activations {a₁, a₂, …}. An <strong>alignment</strong> is a function φ mapping each high-level variable Vᵢ to a subspace of N's activations — the claim that "this part of the network implements that variable."</p>
<p>An <strong>interchange intervention</strong> (also called a counterfactual intervention) on N proceeds as follows. Run N on input α and input β. The intervention swaps into the forward pass on α the activation values that N would have produced on β — but only in the subspace φ(Vᵢ). This patches exactly the activations that supposedly carry Vᵢ, leaving everything else from the α computation intact. The intervention is the neural analogue of do(Vᵢ ← Vᵢ(β)) in H.</p>
<p>The <strong>commutativity condition</strong>: the alignment φ is correct iff for all pairs (α, β) and all variables Vᵢ:</p>
<p style="font-family:'JetBrains Mono',monospace; font-size:0.82rem; margin:0.8rem 0; color:#333">N[do(φ(Vᵢ) ← φ(Vᵢ)(β))](α) = H[do(Vᵢ ← Vᵢ(β))](α)</p>
<p>In words: doing the neural intervention produces the same output as doing the corresponding causal intervention in the high-level model. The diagram commutes. <strong>Interchange intervention accuracy (IIA)</strong> is the fraction of (α, β) pairs where this holds — a single number that operationalizes correctness. IIA = 1 means the network faithfully implements the algorithm under alignment φ. IIA = 0 means the alignment is wrong.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">the commutativity condition</text>
  <rect x="20" y="34" width="100" height="36" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="70" y="53" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">H on input α</text>
  <text x="70" y="64" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">high-level model</text>
  <rect x="220" y="34" width="100" height="36" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="270" y="53" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">N on input α</text>
  <text x="270" y="64" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">neural network</text>
  <rect x="20" y="170" width="100" height="36" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="70" y="186" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">H[do(Vᵢ←Vᵢ(β))](α)</text>
  <text x="70" y="198" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">causal intervention</text>
  <rect x="220" y="170" width="100" height="36" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="270" y="186" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">N[do(φ(Vᵢ)←…)](α)</text>
  <text x="270" y="198" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">neural intervention</text>
  <path d="M70 70 L70 170" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#cam2)"/>
  <text x="42" y="124" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">do(Vᵢ←Vᵢ(β))</text>
  <path d="M270 70 L270 170" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#cam2)"/>
  <text x="274" y="124" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">patch φ(Vᵢ)</text>
  <text x="274" y="135" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">from β run</text>
  <path d="M120 52 L220 52" stroke="#888" stroke-width="1" stroke-dasharray="4 3" marker-end="url(#cam2)"/>
  <text x="170" y="46" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">alignment φ</text>
  <path d="M120 188 L220 188" stroke="#0a0a0a" stroke-width="2" marker-end="url(#cam2)"/>
  <text x="170" y="183" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">must be equal  ✓</text>
  <rect x="60" y="228" width="220" height="20" rx="2" fill="#eeeeea" stroke="#0a0a0a" stroke-width="1"/>
  <text x="170" y="242" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">IIA = P(outputs match) over all (α, β) pairs</text>
  <defs>
    <marker id="cam2" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L6,2.5 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Mathematics',
        title: 'DAS, AtP*, and why this absorbs superposition',
        body: `<p><strong>Distributed Alignment Search (DAS)</strong> (Geiger et al., 2023) solves the alignment problem automatically. Rather than guessing which neurons implement variable Vᵢ, DAS parameterizes the alignment as a learned rotation R ∈ O(d) and optimizes IIA end-to-end. The intervention patches the subspace R·φ(Vᵢ) and the loss maximizes output agreement with H:</p>
<div class="math-block">max_R  E_{α,β} [ 𝟙[N_R(α,β) = H(α,β)] ]</div>
<p>where N_R(α,β) denotes N evaluated on α with the rotated subspace patched from β. Because R is unconstrained, the relevant variable can live in any distributed direction — not a single neuron or even a fixed axis. This neatly absorbs the superposition problem: even if a feature is encoded as a polysemantic direction that never aligns with a coordinate axis, DAS can find the rotation that isolates it.</p>
<p><strong>Attribution patching (AtP*)</strong> makes the search scalable. The exact patch effect at node i is:</p>
<div class="math-block">ΔL(i) = L(patch at i) − L(baseline) ≈ (∂L/∂aᵢ)|_{clean} · (aᵢ* − aᵢ)</div>
<p>One backward pass on the clean input computes all partial derivatives simultaneously; multiplying by the activation differences gives approximate patch effects for every node in the graph. AtP* adds a correction term for the nonlinearity that makes the linear approximation tight enough to rank heads correctly in circuits the size of GPT-4. This is what makes causal abstraction practical rather than a theorem: a falsifiable claim about model structure that can actually be tested at the scale where the interesting models live.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">DAS: learn the alignment subspace</text>
  <circle cx="90" cy="110" r="72" stroke="#0a0a0a" stroke-width="1" opacity="0.12"/>
  <line x1="90" y1="110" x2="90" y2="38" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.3"/>
  <line x1="90" y1="110" x2="162" y2="110" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.3"/>
  <text x="94" y="36" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">n₀</text>
  <text x="164" y="114" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">n₁</text>
  <line x1="90" y1="110" x2="146" y2="53" stroke="#0a0a0a" stroke-width="2" marker-end="url(#dam)"/>
  <line x1="90" y1="110" x2="34" y2="53" stroke="#0a0a0a" stroke-width="2" marker-end="url(#dam)"/>
  <text x="150" y="50" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a">Rf₁</text>
  <text x="18" y="50" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a">Rf₂</text>
  <path d="M130 80 A 40 40 0 0 0 90 38" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" fill="none"/>
  <text x="128" y="70" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">R</text>
  <text x="90" y="196" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">feature direction not axis-aligned</text>
  <text x="90" y="208" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">DAS rotation finds it</text>
  <line x1="192" y1="24" x2="192" y2="250" stroke="#ddd" stroke-width="1"/>
  <text x="266" y="38" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">AtP* approximation</text>
  <rect x="202" y="46" width="128" height="46" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="266" y="64" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">ΔL(i) ≈</text>
  <text x="266" y="78" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">(∂L/∂aᵢ)·(aᵢ*−aᵢ)</text>
  <text x="266" y="110" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">1 backward pass</text>
  <text x="266" y="122" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">scores all nodes</text>
  <text x="266" y="134" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">simultaneously</text>
  <rect x="202" y="152" width="128" height="60" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="266" y="168" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">IIA operationalizes</text>
  <text x="266" y="182" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">correctness:</text>
  <text x="266" y="198" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">IIA = 1 → faithful</text>
  <text x="266" y="212" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">IIA = 0 → wrong</text>
  <defs>
    <marker id="dam" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L6,2.5 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      }
    ]
  },

  // ── UNIVERSALITY ───────────────────────────────────────────────────────────
  {
    id: 'universality',
    name: 'Universality',
    fullName: 'Universality Hypothesis in Neural Networks',
    tag: 'Mechanistic Interpretability',
    tagline: 'Different models trained independently converge on the same features and circuits',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="22" height="22" rx="2" stroke="currentColor" stroke-width="1.4" opacity="0.6"/>
      <rect x="44" y="8" width="22" height="22" rx="2" stroke="currentColor" stroke-width="1.4" opacity="0.6"/>
      <rect x="6" y="42" width="22" height="22" rx="2" stroke="currentColor" stroke-width="1.4" opacity="0.6"/>
      <rect x="44" y="42" width="22" height="22" rx="2" stroke="currentColor" stroke-width="1.4" opacity="0.6"/>
      <circle cx="17" cy="19" r="4" fill="currentColor" opacity="0.5"/>
      <circle cx="55" cy="19" r="4" fill="currentColor" opacity="0.5"/>
      <circle cx="17" cy="53" r="4" fill="currentColor" opacity="0.5"/>
      <circle cx="55" cy="53" r="4" fill="currentColor" opacity="0.5"/>
      <circle cx="36" cy="36" r="8" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.4"/>
      <line x1="21" y1="22" x2="30" y2="30" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>
      <line x1="51" y1="22" x2="42" y2="30" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>
      <line x1="21" y1="50" x2="30" y2="42" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>
      <line x1="51" y1="50" x2="42" y2="42" stroke="currentColor" stroke-width="1.2" opacity="0.6"/>
      <text x="36" y="40" font-family="monospace" font-size="8" fill="currentColor" text-anchor="middle">≅</text>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'The bet that makes interpretability a science',
        body: `<p>Imagine a biologist who discovers the structure of a potassium channel in a squid neuron. Is that discovery only about squid? If ion channels are universal across animal nervous systems — and they largely are — then the squid result is knowledge about neurons in general, including human ones. Biology accumulated into a science because similar structures kept reappearing across wildly different organisms.</p>
<p>The universality hypothesis (Olah et al., <em>Zoom In</em>, 2020) makes the same bet about neural networks: that models trained independently, on different data, with different architectures and random seeds, converge on the <strong>same features and circuits</strong>. If true, a circuit you validate in one model is not just a fact about that model — it is knowledge about the class of models.</p>
<p>This is the load-bearing assumption for mechanistic interpretability as a cumulative science rather than a sequence of one-off autopsies. Without it, every new model is a fresh mystery. With it, a validated circuit is a reusable piece of understanding, findings transfer to systems you cannot directly inspect, and a periodic-table-style taxonomy of computational motifs becomes possible. The entire enterprise's generalizability hangs on whether this bet pays off.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">two independent training runs → same circuits?</text>
  <rect x="14" y="28" width="130" height="90" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="79" y="46" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">Model A</text>
  <text x="79" y="58" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">data: ImageNet</text>
  <text x="79" y="70" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">arch: ResNet</text>
  <text x="79" y="82" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">seed: 42</text>
  <circle cx="48" cy="104" r="7" stroke="#0a0a0a" stroke-width="1.2" fill="none"/>
  <circle cx="68" cy="104" r="7" stroke="#0a0a0a" stroke-width="1.2" fill="none"/>
  <circle cx="88" cy="104" r="7" fill="#0a0a0a" opacity="0.6"/>
  <circle cx="108" cy="104" r="7" stroke="#0a0a0a" stroke-width="1.2" fill="none"/>
  <rect x="196" y="28" width="130" height="90" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="#f8f8f6"/>
  <text x="261" y="46" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" text-anchor="middle">Model B</text>
  <text x="261" y="58" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">data: OpenImages</text>
  <text x="261" y="70" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">arch: VGG</text>
  <text x="261" y="82" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">seed: 99</text>
  <circle cx="230" cy="104" r="7" stroke="#0a0a0a" stroke-width="1.2" fill="none"/>
  <circle cx="250" cy="104" r="7" stroke="#0a0a0a" stroke-width="1.2" fill="none"/>
  <circle cx="270" cy="104" r="7" fill="#0a0a0a" opacity="0.6"/>
  <circle cx="290" cy="104" r="7" stroke="#0a0a0a" stroke-width="1.2" fill="none"/>
  <path d="M144 80 C 164 80 176 80 196 80" stroke="#0a0a0a" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#unm)"/>
  <text x="170" y="74" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">same feature?</text>
  <rect x="60" y="148" width="220" height="90" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <text x="170" y="166" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">if universality holds</text>
  <text x="78" y="184" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">→ validate in A, trust in B</text>
  <text x="78" y="199" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">→ findings transfer to</text>
  <text x="90" y="213" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">models you can't inspect</text>
  <text x="78" y="228" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">→ taxonomy is possible</text>
  <defs>
    <marker id="unm" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L6,2.5 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Evidence',
        title: 'Curve detectors, induction heads, and universal neurons',
        body: `<p>The strongest evidence comes from three levels of the stack.</p>
<p><strong>Low-level vision features</strong> (Olah et al., 2020): Gabor filters, color-opponent channels, and curve detectors appear in every convolutional network trained on natural images — InceptionV1, ResNets, VGGs — regardless of architecture or dataset. The curve detectors in particular are not just similar in function but form the same multi-neuron circuits, with the same predecessor features (frequency detectors) and successor features (shape detectors). The same motif, same wiring, across independently trained models.</p>
<p><strong>Induction heads</strong> (Olsson et al., 2022): appear in every transformer trained long enough on token sequences, regardless of tokenization, dataset, or random seed. The two-head mechanism (previous-token head + induction head) reliably assembles from gradient descent. This is strong evidence that the training objective itself selects for this circuit, not any property of the specific training run.</p>
<p><strong>Universal neurons</strong> (Gurnee et al., 2023): systematically searched GPT-2 small, medium, large, and XL for neurons with matching activation patterns across model sizes and seeds. Found a consistent set of "universal neurons" — including a notable linear representation of token position and a set of previous-token detectors — that appear across all scales. The same computational roles being filled by neurons in the same functional slot, despite completely independent training.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">evidence by level of abstraction</text>
  <rect x="10" y="26" width="320" height="20" fill="#0a0a0a" rx="2"/>
  <text x="18" y="40" font-family="'JetBrains Mono',monospace" font-size="7" fill="#f8f8f6">Finding</text>
  <text x="190" y="40" font-family="'JetBrains Mono',monospace" font-size="7" fill="#f8f8f6" text-anchor="middle">Models compared</text>
  <text x="308" y="40" font-family="'JetBrains Mono',monospace" font-size="7" fill="#f8f8f6" text-anchor="end">Strength</text>
  <line x1="10" y1="46" x2="330" y2="46" stroke="#ccc" stroke-width="0.5"/>
  <text x="18" y="60" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Gabor / curve detectors</text>
  <text x="190" y="60" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">InceptionV1, VGG, ResNet</text>
  <rect x="282" y="52" width="40" height="8" rx="1" fill="#0a0a0a" opacity="0.7"/>
  <line x1="10" y1="66" x2="330" y2="66" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="80" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Multimodal neurons</text>
  <text x="190" y="80" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">InceptionV1, CLIP ViT</text>
  <rect x="282" y="72" width="36" height="8" rx="1" fill="#0a0a0a" opacity="0.65"/>
  <line x1="10" y1="86" x2="330" y2="86" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="100" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Induction heads</text>
  <text x="190" y="100" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">all transformers studied</text>
  <rect x="282" y="92" width="40" height="8" rx="1" fill="#0a0a0a" opacity="0.8"/>
  <line x1="10" y1="106" x2="330" y2="106" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="120" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Universal neurons (pos, prev-tok)</text>
  <text x="190" y="120" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">GPT-2 small → XL</text>
  <rect x="282" y="112" width="32" height="8" rx="1" fill="#0a0a0a" opacity="0.55"/>
  <line x1="10" y1="126" x2="330" y2="126" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="140" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Mid-level circuits (IOI etc.)</text>
  <text x="190" y="140" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">limited cross-model checks</text>
  <rect x="282" y="132" width="18" height="8" rx="1" fill="#0a0a0a" opacity="0.3"/>
  <line x1="10" y1="146" x2="330" y2="146" stroke="#0a0a0a" stroke-width="0.8"/>
  <text x="170" y="168" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">universality strongest at lowest abstraction level</text>
  <rect x="10" y="180" width="320" height="68" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="20" y="198" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">why low-level is robust:</text>
  <text x="20" y="214" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">natural image statistics constrain what detectors are useful</text>
  <text x="20" y="230" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a">→ any model solving the task must learn similar primitives</text>
  <text x="20" y="244" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">mid-level: many valid implementations → less constrained</text>
</svg>`
      },

      {
        level: 'Why It Matters',
        title: 'The periodic table analogy and what universality enables',
        body: `<p>The analogy Olah et al. draw is to the periodic table. Mendeleev did not need to synthesize every possible substance to understand chemistry — he identified recurring elemental motifs and their organizational structure, and that taxonomy made chemistry cumulative. New elements slotted into the table; predictions followed from position.</p>
<p>Universality promises the same for neural computation. If curve detectors are a stable, recurring element of vision models, you need to understand them once. When a new architecture appears, you can ask: does it use the curve detector circuit? In what layers? How does it connect to the next level? You build knowledge, not just descriptions.</p>
<p>The practical consequence is the possibility of <strong>transfer to uninspectable models</strong>. The systems that matter most for safety — large frontier models — are expensive to study directly. If circuits found in smaller, accessible models transfer, then interpretability findings on GPT-2 are not merely academic; they are evidence about GPT-4. Universality is what makes the small-model workbench scientifically legitimate.</p>
<p>It also makes causal abstraction (the previous pillar) more powerful. If the same high-level algorithm recurs across models, then validating a causal abstraction in one is evidence the abstraction is not just a post-hoc fit to one model's quirks — it is a description of a stable computational motif the training process reliably discovers.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">periodic table of neural motifs</text>
  <rect x="10" y="26" width="44" height="28" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.08"/>
  <text x="32" y="38" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">Gabor</text>
  <text x="32" y="48" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">filter</text>
  <rect x="58" y="26" width="44" height="28" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.08"/>
  <text x="80" y="38" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">curve</text>
  <text x="80" y="48" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">detector</text>
  <rect x="106" y="26" width="44" height="28" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.08"/>
  <text x="128" y="38" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">color</text>
  <text x="128" y="48" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">opponent</text>
  <rect x="154" y="26" width="44" height="28" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.08"/>
  <text x="176" y="38" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">induct.</text>
  <text x="176" y="48" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">head</text>
  <rect x="202" y="26" width="44" height="28" rx="2" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.08"/>
  <text x="224" y="38" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">prev-tok</text>
  <text x="224" y="48" font-family="'JetBrains Mono',monospace" font-size="6" fill="#888" text-anchor="middle">head</text>
  <rect x="250" y="26" width="44" height="28" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" fill="none" opacity="0.5"/>
  <text x="272" y="38" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">?</text>
  <rect x="298" y="26" width="32" height="28" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="4 2" fill="none" opacity="0.4"/>
  <text x="314" y="38" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">?</text>
  <text x="10" y="80" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">vision primitives</text>
  <text x="154" y="80" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">language</text>
  <text x="250" y="80" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">unknown</text>
  <line x1="10" y1="88" x2="330" y2="88" stroke="#ddd" stroke-width="1"/>
  <text x="170" y="108" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">what universality enables</text>
  <rect x="14" y="118" width="148" height="54" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="88" y="134" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">validate once</text>
  <text x="88" y="148" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">findings in model A</text>
  <text x="88" y="162" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">apply to model B</text>
  <rect x="178" y="118" width="148" height="54" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="252" y="134" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">small → large</text>
  <text x="252" y="148" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">GPT-2 circuits inform</text>
  <text x="252" y="162" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">frontier model analysis</text>
  <rect x="14" y="182" width="312" height="62" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="200" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">without universality: each model is a fresh autopsy</text>
  <text x="170" y="216" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">with universality: interpretability is cumulative science</text>
  <text x="170" y="236" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">same bet biology made with ion channels across species</text>
</svg>`
      },

      {
        level: 'Honest Assessment',
        title: 'Where it holds, where it is murky, and the feature-splitting problem',
        body: `<p>The honest picture is a gradient, not a binary. Universality is <strong>robust at low abstraction levels</strong>: basic feature detectors (Gabor, color channels, curve detectors) and simple attention motifs (induction heads, previous-token heads) appear reliably across architectures, datasets, and scales. The constraint here is the data distribution itself — any network solving the same task on natural images faces the same statistical regularities, so convergence on similar primitives is almost forced.</p>
<p>At <strong>mid-level computation</strong> the evidence is murkier. The IOI circuit (Wang et al.) was validated in GPT-2 Medium but has not been systematically checked across models of different sizes. There are many valid ways to implement a given mid-level computation; the training process may settle on different implementations in different runs. Functional universality (same input-output behavior) may hold while structural universality (same circuit wiring) does not.</p>
<p>The <strong>feature-splitting problem</strong> in SAEs creates a deeper conceptual difficulty. As dictionary size N grows, coarse features split into finer sub-features — "dog" becomes "small dog", "large dog", "dog in ownership context". Which level of granularity is the "true" feature? If there is no canonical level, "the same feature appearing in two models" may not be a well-defined claim. Universality requires a stable unit of comparison, and feature-splitting challenges whether that unit exists.</p>
<p>Despite these caveats, the hypothesis remains the organizing bet of the field. The correct response to partial evidence is not to abandon the bet but to test it more carefully: cross-model activation similarity metrics, systematic SAE feature matching across model families, and scaling studies that check whether circuits identified in small models persist as the identical subgraph at larger scale.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">universality confidence by abstraction level</text>
  <line x1="40" y1="200" x2="300" y2="200" stroke="#0a0a0a" stroke-width="1"/>
  <line x1="40" y1="200" x2="40" y2="30" stroke="#0a0a0a" stroke-width="1"/>
  <text x="170" y="220" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">abstraction level  →  higher</text>
  <text x="16" y="118" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" transform="rotate(-90 16 118)">confidence</text>
  <line x1="36" y1="52" x2="44" y2="52" stroke="#0a0a0a" stroke-width="1"/>
  <text x="6" y="55" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">high</text>
  <line x1="36" y1="200" x2="44" y2="200" stroke="#0a0a0a" stroke-width="1"/>
  <text x="6" y="203" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">low</text>
  <path d="M50,56 C90,58 130,90 190,142 S260,185 296,198" stroke="#0a0a0a" stroke-width="2.5" fill="none"/>
  <rect x="46" y="44" width="82" height="30" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" fill="#eeeeea" opacity="0.8"/>
  <text x="87" y="58" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">Gabors, curves,</text>
  <text x="87" y="69" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">induction heads</text>
  <rect x="148" y="112" width="74" height="30" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" fill="#eeeeea" opacity="0.8"/>
  <text x="185" y="126" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">mid-level</text>
  <text x="185" y="137" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">circuits</text>
  <rect x="240" y="162" width="56" height="30" rx="2" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" fill="#eeeeea" opacity="0.8"/>
  <text x="268" y="176" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">high-level</text>
  <text x="268" y="187" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">behavior</text>
  <rect x="10" y="232" width="320" height="22" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="247" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">feature splitting: no canonical granularity → "same feature" may not be well-defined</text>
</svg>`
      }
    ]
  },

  // ── DEVELOPMENTAL INTERPRETABILITY ────────────────────────────────────────
  {
    id: 'developmental-interp',
    name: 'Developmental Interp',
    fullName: 'Developmental Interpretability & Singular Learning Theory',
    tag: 'Mechanistic Interpretability',
    tagline: 'Studying how structure forms over training, not just what the finished weights contain',

    icon: `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="58" x2="62" y2="58" stroke="currentColor" stroke-width="1.2" opacity="0.4"/>
      <circle cx="14" cy="54" r="3" fill="currentColor" opacity="0.2"/>
      <circle cx="26" cy="48" r="3" fill="currentColor" opacity="0.3"/>
      <circle cx="38" cy="44" r="3" fill="currentColor" opacity="0.4"/>
      <circle cx="46" cy="30" r="4" fill="currentColor" opacity="0.7"/>
      <circle cx="58" cy="18" r="5" fill="currentColor" opacity="0.9"/>
      <path d="M14 54 C 26 52 36 46 44 32 S 54 20 58 18" stroke="currentColor" stroke-width="1.5" fill="none" stroke-dasharray="3 2"/>
      <line x1="46" y1="30" x2="46" y2="58" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2" opacity="0.4"/>
      <text x="42" y="68" font-family="monospace" font-size="6" fill="currentColor" text-anchor="middle">phase transition</text>
    </svg>`,

    layers: [
      {
        level: 'Intuition',
        title: 'Anatomy versus embryology',
        body: `<p>The five preceding pillars all share a tacit assumption: they study the <em>finished</em> model. You take a trained network, dissect its weights, locate circuits, validate them causally. This is anatomy — valuable, but it asks only "what is the structure?" not "how did the structure get here?"</p>
<p>Developmental interpretability asks the embryological question: <strong>when and how does computational structure form during training?</strong> Rather than a single snapshot of the final weights, the object of study is the trajectory — the sequence of checkpoints from random initialization to convergence — and the transitions along it.</p>
<p>This is not just a different methodology; it is a different scientific stance that may answer questions anatomy cannot. A circuit found in the final model is a fait accompli. Watching it form tells you something anatomy cannot: which circuits are prerequisites for others, whether structure forms continuously or in discrete phase transitions, and whether the model passes through interpretable intermediate states that could be monitored or redirected during training. For safety, the embryological question may ultimately be more important than the anatomical one — you want to intervene while the model is developing, not after.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">two stances on the same object</text>
  <rect x="14" y="28" width="142" height="110" rx="3" stroke="#0a0a0a" stroke-width="1.5" fill="#eeeeea"/>
  <text x="85" y="48" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">anatomy</text>
  <text x="85" y="62" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">dissect finished weights</text>
  <circle cx="85" cy="100" r="26" stroke="#0a0a0a" stroke-width="1.5" fill="none"/>
  <line x1="85" y1="100" x2="104" y2="80" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#dim)"/>
  <line x1="85" y1="100" x2="65" y2="80" stroke="#0a0a0a" stroke-width="1.5" marker-end="url(#dim)"/>
  <line x1="85" y1="100" x2="108" y2="110" stroke="#0a0a0a" stroke-width="1.2" marker-end="url(#dim)"/>
  <text x="85" y="128" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">what is the structure?</text>
  <rect x="184" y="28" width="142" height="110" rx="3" stroke="#0a0a0a" stroke-width="2" fill="#f8f8f6"/>
  <text x="255" y="48" font-family="'JetBrains Mono',monospace" font-size="8" fill="#0a0a0a" text-anchor="middle">embryology</text>
  <text x="255" y="62" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888" text-anchor="middle">watch structure form</text>
  <circle cx="210" cy="100" r="8" stroke="#0a0a0a" stroke-width="1" fill="none" opacity="0.3"/>
  <circle cx="234" cy="100" r="8" stroke="#0a0a0a" stroke-width="1" fill="none" opacity="0.5"/>
  <circle cx="258" cy="100" r="8" stroke="#0a0a0a" stroke-width="1.2" fill="#0a0a0a" opacity="0.15"/>
  <circle cx="282" cy="100" r="12" stroke="#0a0a0a" stroke-width="1.5" fill="#0a0a0a" opacity="0.2"/>
  <line x1="218" y1="100" x2="226" y2="100" stroke="#0a0a0a" stroke-width="1" marker-end="url(#dim)"/>
  <line x1="242" y1="100" x2="250" y2="100" stroke="#0a0a0a" stroke-width="1" marker-end="url(#dim)"/>
  <line x1="266" y1="100" x2="270" y2="100" stroke="#0a0a0a" stroke-width="1" marker-end="url(#dim)"/>
  <text x="255" y="128" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a" text-anchor="middle">how does it get here?</text>
  <rect x="14" y="156" width="312" height="90" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="170" y="174" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">why embryology may matter more for safety</text>
  <text x="24" y="192" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">→ which circuits are prerequisites for others?</text>
  <text x="24" y="207" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">→ does the model pass through dangerous intermediate states?</text>
  <text x="24" y="222" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">→ can we intervene during development rather than post-hoc?</text>
  <text x="24" y="237" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">→ training as the natural moment to reshape structure</text>
  <defs>
    <marker id="dim" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
      <path d="M0,0 L0,5 L6,2.5 z" fill="#0a0a0a"/>
    </marker>
  </defs>
</svg>`
      },

      {
        level: 'Grokking',
        title: 'Phase transitions and progress measures',
        body: `<p><strong>Grokking</strong> (Power et al., 2022) is the phenomenon where a small transformer trained on modular arithmetic achieves near-zero training loss early in training but only generalizes — reaches near-zero test loss — much later, after what appears to be a sudden phase transition. The model memorizes, then something snaps, and it generalizes. This discontinuity is the first strong empirical signal that training dynamics are not smooth and that structure can emerge abruptly.</p>
<p>Nanda et al. (2023) reverse-engineered the grokking transformer and identified its <strong>progress measures</strong> — internal metrics that track the formation of the underlying Fourier circuit independently of the training and test losses that made the transition look sudden. The key finding: generalization is not sudden at the level of internal representations. The Fourier circuit forms gradually and continuously; what looks like a phase transition in loss space is the consequence of a long, smooth process of circuit formation that loss metrics simply do not reveal until a threshold is crossed.</p>
<p>This establishes the central methodological principle of developmental interpretability: <strong>loss is a poor probe of structure formation</strong>. You need interpretability-aware metrics — progress measures that directly track the formation of circuits — to understand what the model is actually learning during training.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">grokking: what loss hides</text>
  <line x1="40" y1="200" x2="300" y2="200" stroke="#0a0a0a" stroke-width="1"/>
  <line x1="40" y1="200" x2="40" y2="26" stroke="#0a0a0a" stroke-width="1"/>
  <text x="170" y="218" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">training steps  →</text>
  <text x="16" y="118" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" transform="rotate(-90 16 118)">loss / metric</text>
  <path d="M50,40 C70,42 100,44 160,46 S240,48 290,50" stroke="#0a0a0a" stroke-width="2" fill="none"/>
  <text x="292" y="48" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">train loss</text>
  <path d="M50,195 C70,194 100,192 140,188 S175,130 180,80 S200,46 290,44" stroke="#0a0a0a" stroke-width="1.5" stroke-dasharray="5 3" fill="none"/>
  <text x="292" y="62" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">test loss</text>
  <path d="M50,192 C80,185 110,160 140,120 S170,72 200,56 S250,44 290,42" stroke="#888" stroke-width="1.2" stroke-dasharray="3 2" fill="none"/>
  <text x="292" y="76" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">progress</text>
  <text x="292" y="87" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">measure</text>
  <line x1="178" y1="30" x2="178" y2="200" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.4"/>
  <text x="180" y="112" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">apparent</text>
  <text x="180" y="123" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">transition</text>
  <rect x="14" y="228" width="312" height="24" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="244" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">circuit forms gradually — loss jump is a threshold artifact, not the transition itself</text>
</svg>`
      },

      {
        level: 'Singular Learning Theory',
        title: 'The LLC as an order parameter for structure',
        body: `<p><strong>Singular learning theory</strong> (Watanabe, 2009) is the statistical learning theory of models where the Fisher information matrix is degenerate — which describes essentially all neural networks. Classical learning theory assumes the true parameter is identifiable (the Hessian of the KL divergence is positive definite at the optimum). Neural networks violate this: many parameter configurations produce the same function, creating a degenerate loss landscape with flat directions and singular points.</p>
<p>The key quantity is the <strong>real log canonical threshold (RLCT)</strong>, often written λ, which replaces the parameter count in the model-complexity term of the Bayesian information criterion. It measures the effective dimensionality of the singular structure near a local minimum — roughly, how many directions in parameter space actually affect the loss locally. Watanabe showed that the free energy of a Bayesian model satisfies:</p>
<div class="math-block">F_n = nL_n + λ log n − (m−1) log log n + O_p(1)</div>
<p>where n is sample size, L_n is the training loss, and m is the multiplicity of the singularity. The RLCT λ is an intrinsic geometric property of the loss landscape at a given point.</p>
<p>The <strong>Timaeus group</strong> (Hoogland, Murfet et al.) operationalizes this as the <strong>local learning coefficient (LLC)</strong>, estimated from the curvature of the loss landscape around a checkpoint via SGLD sampling. The claim: as training progresses, the LLC at the current checkpoint undergoes detectable transitions that correspond to the formation of new circuits. LLC drops when the model discovers a new structure that flattens the loss landscape locally — it is an order parameter for phase transitions in the developmental sense.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">local learning coefficient over training</text>
  <line x1="40" y1="200" x2="300" y2="200" stroke="#0a0a0a" stroke-width="1"/>
  <line x1="40" y1="200" x2="40" y2="30" stroke="#0a0a0a" stroke-width="1"/>
  <text x="170" y="218" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888">training steps  →</text>
  <text x="16" y="118" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#888" transform="rotate(-90 16 118)">LLC  λ̂</text>
  <path d="M50,60 C60,60 75,60 85,60 S88,100 95,100 S108,100 118,100 S122,145 130,145 S148,145 160,145 S164,175 172,175 S200,175 290,175" stroke="#0a0a0a" stroke-width="2.5" fill="none"/>
  <line x1="85" y1="30" x2="85" y2="200" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.4"/>
  <line x1="118" y1="30" x2="118" y2="200" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.4"/>
  <line x1="160" y1="30" x2="160" y2="200" stroke="#0a0a0a" stroke-width="1" stroke-dasharray="3 2" opacity="0.4"/>
  <text x="85" y="28" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">circuit 1</text>
  <text x="85" y="36" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">forms</text>
  <text x="118" y="28" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">circuit 2</text>
  <text x="118" y="36" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">forms</text>
  <text x="160" y="28" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">circuit 3</text>
  <text x="160" y="36" font-family="'JetBrains Mono',monospace" font-size="6.5" fill="#0a0a0a" text-anchor="middle">forms</text>
  <text x="36" y="63" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">high</text>
  <text x="36" y="178" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">low</text>
  <rect x="14" y="228" width="312" height="24" rx="2" stroke="#0a0a0a" stroke-width="1" fill="#eeeeea"/>
  <text x="170" y="244" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">LLC drop = model found new structure, flattening loss landscape locally</text>
</svg>`
      },

      {
        level: 'Research Program',
        title: 'What is established, what is open, and what it would mean if it works',
        body: `<p><strong>What is established.</strong> Grokking is real and reproducible. Progress measures can track circuit formation in small toy models more faithfully than loss alone. The RLCT is a mathematically rigorous quantity with a well-developed theory (Watanabe's WBIC estimator, the free energy formula). The LLC can be estimated numerically via stochastic gradient MCMC (SGLD) and produces interpretable signals in small models — Hoogland et al. have shown LLC transitions in toy models that correspond to identifiable phase changes.</p>
<p><strong>What is open.</strong> Scaling to frontier models is unproven. SGLD-based LLC estimation is expensive and noisy; whether it remains interpretable in billion-parameter models with complex loss landscapes is unknown. The correspondence between LLC drops and specific named circuits is hand-verified in small cases — there is no systematic method yet for automatically identifying what structure formed at a given transition. SLT was developed for Bayesian inference over a fixed data distribution, not stochastic gradient descent with learning rate schedules, data augmentation, and Adam; the theory's assumptions are strained by modern training.</p>
<p><strong>What it would mean if it works.</strong> If LLC or a successor reliably detects structure formation in large models during training, it becomes a monitoring tool with safety implications: detect when a model acquires a new capability, characterize whether the capability corresponds to a known circuit type, and potentially intervene before training completes. Developmental interpretability would shift the field from retrospective analysis to prospective oversight — watching a model grow rather than performing a post-mortem.</p>`,
        img: `<svg viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="170" y="14" font-family="'JetBrains Mono',monospace" font-size="8.5" fill="#888" text-anchor="middle">maturity map</text>
  <rect x="10" y="26" width="320" height="20" fill="#0a0a0a" rx="2"/>
  <text x="18" y="40" font-family="'JetBrains Mono',monospace" font-size="7" fill="#f8f8f6">Claim</text>
  <text x="240" y="40" font-family="'JetBrains Mono',monospace" font-size="7" fill="#f8f8f6" text-anchor="middle">Status</text>
  <line x1="10" y1="46" x2="330" y2="46" stroke="#ccc" stroke-width="0.5"/>
  <text x="18" y="60" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Grokking is real</text>
  <rect x="190" y="52" width="132" height="8" rx="1" fill="#0a0a0a" opacity="0.75"/>
  <line x1="10" y1="66" x2="330" y2="66" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="80" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">Progress measures track circuits (toy)</text>
  <rect x="190" y="72" width="110" height="8" rx="1" fill="#0a0a0a" opacity="0.65"/>
  <line x1="10" y1="86" x2="330" y2="86" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="100" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">SLT / RLCT mathematically rigorous</text>
  <rect x="190" y="92" width="120" height="8" rx="1" fill="#0a0a0a" opacity="0.7"/>
  <line x1="10" y1="106" x2="330" y2="106" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="120" font-family="'JetBrains Mono',monospace" font-size="7" fill="#0a0a0a">LLC detects transitions (toy models)</text>
  <rect x="190" y="112" width="80" height="8" rx="1" fill="#0a0a0a" opacity="0.5"/>
  <line x1="10" y1="126" x2="330" y2="126" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="140" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">LLC scales to frontier models</text>
  <rect x="190" y="132" width="22" height="8" rx="1" fill="#0a0a0a" opacity="0.2"/>
  <line x1="10" y1="146" x2="330" y2="146" stroke="#eee" stroke-width="0.5"/>
  <text x="18" y="160" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">Automatic circuit ID at transitions</text>
  <rect x="190" y="152" width="10" height="8" rx="1" fill="#0a0a0a" opacity="0.15"/>
  <line x1="10" y1="166" x2="330" y2="166" stroke="#0a0a0a" stroke-width="0.8"/>
  <rect x="10" y="178" width="320" height="72" rx="2" stroke="#0a0a0a" stroke-width="1" fill="none"/>
  <text x="170" y="194" font-family="'JetBrains Mono',monospace" font-size="7.5" fill="#0a0a0a" text-anchor="middle">if it works at scale</text>
  <text x="20" y="212" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">→ detect capability acquisition during training</text>
  <text x="20" y="227" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">→ prospective oversight, not retrospective autopsy</text>
  <text x="20" y="242" font-family="'JetBrains Mono',monospace" font-size="7" fill="#888">→ intervene before training completes</text>
</svg>`
      }
    ]
  },

  // ── ADD YOUR NEXT CONCEPT HERE ─────────────────────────────────────────────

];
