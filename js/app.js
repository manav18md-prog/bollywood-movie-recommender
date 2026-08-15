/* ═══════════════════════════════════════════════════════════
   PickAMovieForMe — quiz-based recommendation engine
   ═══════════════════════════════════════════════════════════ */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ── theme ── */
(function theme() {
  const btn = $('[data-theme-toggle]');
  const root = document.documentElement;
  let mode = 'dark'; // cinema-first: dark by default, toggle always available
  const SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  const MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  const paint = () => {
    root.setAttribute('data-theme', mode);
    btn.innerHTML = mode === 'dark' ? SUN : MOON;
    btn.setAttribute('aria-label', 'Switch to ' + (mode === 'dark' ? 'light' : 'dark') + ' mode');
  };
  paint();
  btn.addEventListener('click', () => { mode = mode === 'dark' ? 'light' : 'dark'; paint(); });
})();

/* ── icons ── */
const ico = (p, w = 22) =>
  `<svg viewBox="0 0 24 24" width="${w}" height="${w}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const I = {
  solo: ico('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
  date: ico('<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1z"/>'),
  friends: ico('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>'),
  family: ico('<path d="M3 21v-2a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2"/><circle cx="7" cy="9" r="3"/><path d="M14 21v-3a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v3"/><circle cx="17.5" cy="10.5" r="2.5"/>'),
  sun: ico('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  laugh: ico('<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/>'),
  tense: ico('<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/>'),
  scary: ico('<path d="M12 2a7 7 0 0 0-7 7v4l-1 3h16l-1-3V9a7 7 0 0 0-7-7z"/><path d="M9 10h.01M15 10h.01M10 20l2-3 2 3"/>'),
  brain: ico('<path d="M9.5 3A3.5 3.5 0 0 0 6 6.5v.4A3.5 3.5 0 0 0 4 10a3.5 3.5 0 0 0 1 2.4A3.5 3.5 0 0 0 6.5 19H9a2 2 0 0 0 2-2V5a2 2 0 0 0-1.5-2z"/><path d="M14.5 3A3.5 3.5 0 0 1 18 6.5v.4A3.5 3.5 0 0 1 20 10a3.5 3.5 0 0 1-1 2.4A3.5 3.5 0 0 1 17.5 19H15a2 2 0 0 1-2-2V5a2 2 0 0 1 1.5-2z"/>'),
  tear: ico('<path d="M12 2s6 7.6 6 12a6 6 0 0 1-12 0c0-4.4 6-12 6-12z"/>'),
  cozy: ico('<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><path d="M6 2v2M10 2v2M14 2v2"/>'),
  heart: ico('<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1z"/>'),
  epic: ico('<path d="M3 20h18M6 20V9l6-6 6 6v11"/><path d="M10 20v-6h4v6"/>'),
  think: ico('<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.9-.9 1.6v.6"/><path d="M12 17h.01"/>'),
  rush: ico('<path d="M14 2 4 14h6l-1 8 11-13h-7z"/>'),
  dark: ico('<path d="M21 12.8A9 9 0 1 1 11.2 3A7 7 0 0 0 21 12.8z"/>'),
  clock: ico('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>'),
  film: ico('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 10h4M17 10h4M3 15h4M17 15h4"/>'),
  globe: ico('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/>'),
  feather: ico('<path d="M20 4a5.5 5.5 0 0 0-7.8 0L4 12.2V20h7.8l8.2-8.2A5.5 5.5 0 0 0 20 4z"/><path d="M8 16 20 4"/>'),
  music: ico('<circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/><path d="M9 18V5l12-2v13"/>'),
  flame: ico('<path d="M12 2s4 4.5 4 8a4 4 0 0 1-8 0c0-1.4.7-2.8 1.5-4C10.5 4.5 12 2 12 2z"/><path d="M6.5 13A7 7 0 0 0 12 22a7 7 0 0 0 5.5-9"/>'),
  tick: '<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1z"/></svg>',
  play: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  next: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h13M12 5l7 7-7 7"/></svg>',
  bookmark: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M19 21 12 16 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  empty: ico('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16"/><path d="M9.5 12h5"/>', 40)
};

/* ── quiz definition ── */
const ALL_QUESTIONS = [
  {
    key: 'situation',
    title: "Who's watching tonight?",
    sub: 'This is the single strongest filter — a great date film is rarely a great group film.',
    max: 1,
    options: [
      { v: 'solo', label: 'Just me', desc: 'Free to pick something demanding', icon: I.solo },
      { v: 'date-night', label: 'Date night', desc: 'Two people, one remote', icon: I.date },
      { v: 'friends', label: 'With friends', desc: 'Talkable, shared reactions', icon: I.friends },
      { v: 'family', label: 'Family', desc: 'Mixed ages in the room', icon: I.family }
    ]
  },
  {
    key: 'moods',
    title: 'What do you actually want to feel?',
    sub: 'Pick one or two. This shapes the recommendation more than genre ever will.',
    max: 2,
    min: 1,
    options: [
      { v: 'uplifting', label: 'Uplifting', desc: 'Leave lighter than you arrived', icon: I.sun },
      { v: 'funny', label: 'Funny', desc: 'Actual laughs', icon: I.laugh },
      { v: 'tense', label: 'Tense', desc: 'Gripped, forward-leaning', icon: I.tense },
      { v: 'scary', label: 'Scary', desc: 'Lights off, properly frightened', icon: I.scary },
      { v: 'mind-bending', label: 'Mind-bending', desc: 'Something to untangle after', icon: I.brain },
      { v: 'heartbreaking', label: 'Heartbreaking', desc: 'A good cry is the point', icon: I.tear },
      { v: 'cozy', label: 'Cozy', desc: 'Warm, low-stakes, comforting', icon: I.cozy },
      { v: 'romantic', label: 'Romantic', desc: 'Longing, chemistry, swoon', icon: I.heart },
      { v: 'epic', label: 'Epic', desc: 'Big scale, big screen energy', icon: I.epic },
      { v: 'thought-provoking', label: 'Thought-provoking', desc: 'Ideas worth arguing about', icon: I.think },
      { v: 'adrenaline', label: 'Adrenaline', desc: 'Kinetic, relentless, loud', icon: I.rush },
      { v: 'dark', label: 'Dark', desc: 'Bleak, bitter, no easy comfort', icon: I.dark }
    ]
  },
  {
    key: 'effort',
    title: 'How much attention can you give it?',
    sub: 'Be honest — the wrong answer here is why films get abandoned 20 minutes in.',
    max: 1,
    cols2: true,
    options: [
      { v: 'low', label: 'Not much', desc: 'Easy to follow, phone-in-hand friendly', icon: I.cozy },
      { v: 'medium', label: 'Fully watching', desc: 'Engaged, but no homework required', icon: I.film },
      { v: 'high', label: 'Give me everything', desc: 'Demanding, slow-burn or structurally tricky', icon: I.brain }
    ]
  },
  {
    key: 'runtime',
    title: 'How much time do you have?',
    sub: 'Runtime is the most common reason a good recommendation goes unwatched.',
    max: 1,
    libraries: ['all', 'world'],
    options: [
      { v: '100', label: 'Under 100 min', desc: 'In and out, no commitment', icon: I.clock },
      { v: '130', label: 'Under 2h 10m', desc: 'A normal evening', icon: I.clock },
      { v: '999', label: 'Time is no object', desc: 'Bring on the long one', icon: I.epic }
    ]
  },
  {
    key: 'runtime',
    title: 'How much time do you have?',
    sub: 'Hindi cinema runs long — these brackets are calibrated to that, interval and all.',
    max: 1,
    libraries: ['bollywood'],
    options: [
      { v: '140', label: 'Under 2h 20m', desc: 'Short by Bollywood standards', icon: I.clock },
      { v: '170', label: 'Under 2h 50m', desc: 'A proper evening with an interval', icon: I.clock },
      { v: '999', label: 'Time is no object', desc: 'Three hours, songs and all', icon: I.epic }
    ]
  },
  {
    key: 'subtitles',
    title: 'Are subtitles welcome?',
    sub: 'Saying yes roughly doubles how good the recommendation can be.',
    max: 1,
    cols2: true,
    libraries: ['all', 'world'],
    options: [
      { v: 'yes', label: 'Yes, bring them on', desc: 'World cinema unlocked', icon: I.globe },
      { v: 'no', label: 'No reading tonight', desc: 'English or Hindi audio only', icon: I.feather }
    ]
  },
  {
    key: 'songs',
    title: 'How do you feel about songs?',
    sub: 'Hindi cinema splits neatly here — full song-and-dance, or a story that just moves.',
    max: 1,
    libraries: ['all', 'bollywood'],
    options: [
      { v: 'yes', label: 'Bring the songs', desc: 'Interval-block energy, playlist included', icon: I.music },
      { v: 'no', label: 'Keep it lean', desc: 'Minimal songs, story straight through', icon: I.feather },
      { v: 'any', label: "Doesn't matter", desc: 'Surprise me either way', icon: I.film }
    ]
  },
  {
    key: 'intensity',
    title: 'How heavy can it get?',
    sub: 'Violence, dread, grief — where is your ceiling this evening?',
    max: 1,
    options: [
      { v: '2', label: 'Keep it gentle', desc: 'Nothing distressing', icon: I.cozy },
      { v: '3', label: 'Some weight is fine', desc: 'Tension yes, brutality no', icon: I.tense },
      { v: '5', label: 'No limits', desc: 'Ruin me, I signed up for this', icon: I.flame }
    ]
  }
];

/* ── state ── */
const state = {
  answers: {}, step: 0, movies: [], deck: [], index: 0,
  shortlist: [], relaxed: [], library: 'all', questions: []
};

const LIB_NAME = { all: 'the whole shelf', world: 'Hollywood & world cinema', bollywood: 'Bollywood' };

function inLibrary(m) {
  return state.library === 'all' || m.library === state.library;
}
function libraryPool() {
  return state.movies.filter(inLibrary);
}
function questionsFor(lib) {
  return ALL_QUESTIONS.filter(q => !q.libraries || q.libraries.includes(lib));
}

/* ── data ── */
async function loadMovies() {
  const [world, bolly] = await Promise.all([
    fetch('data/movies.json').then(r => (r.ok ? r.json() : Promise.reject(new Error('world library')))),
    fetch('data/bollywood.json').then(r => (r.ok ? r.json() : []))
  ]);
  state.movies = [
    ...world.map(m => ({ ...m, library: 'world' })),
    ...bolly.map(m => ({ ...m, library: 'bollywood' }))
  ];
  const n = k => state.movies.filter(m => k === 'all' || m.library === k).length;
  $('[data-movie-count]').textContent = state.movies.length;
  $$('[data-lib-count]').forEach(el => { el.textContent = n(el.dataset.libCount); });
  $$('[data-library]').forEach(btn =>
    btn.addEventListener('click', () => {
      state.library = btn.dataset.library;
      $$('[data-library]').forEach(b => b.classList.toggle('is-on', b === btn));
      renderStubs();
    })
  );
  renderStubs();
}

/* ── hero ticket stubs ── */
function renderStubs() {
  const [a, b, m] = [...libraryPool()].sort(() => Math.random() - 0.5).slice(0, 3);
  if (!m) return;
  $('[data-stub-stack]').innerHTML = `
    <div class="stub stub-ghost" style="--accent:${a.accent};z-index:1;
      transform:translate(-58%,-58%) rotate(-7deg);animation-delay:0ms"></div>
    <div class="stub stub-ghost" style="--accent:${b.accent};z-index:2;
      transform:translate(-46%,-54%) rotate(4deg);animation-delay:80ms"></div>
    <article class="stub" style="--accent:${m.accent};z-index:3;
      transform:translate(-52%,-50%) rotate(-1.5deg);animation-delay:160ms">
      <p class="stub-meta">Tonight's pick · ${m.runtime} min</p>
      <h3 class="stub-title">${m.title}</h3>
      <p class="stub-line">${m.why.charAt(0).toUpperCase() + m.why.slice(1)}.</p>
    </article>`;
}

/* ── scoring ── */
function buildDeck() {
  const a = state.answers;
  const situation = a.situation?.[0];
  const moods = a.moods || [];
  const effort = a.effort?.[0];
  const runtimeCap = Number(a.runtime?.[0] || 999);
  const subsOk = a.subtitles ? a.subtitles[0] === 'yes' : true;
  const songs = a.songs?.[0] || 'any';
  const intensityCap = Number(a.intensity?.[0] || 5);

  const filters = [
    { id: 'subtitles', label: 'the no-subtitles rule', test: m => (subsOk ? true : !m.subtitles) },
    { id: 'songs', label: 'your song preference', test: m =>
        (songs === 'any' || m.library !== 'bollywood') ? true : m.musical === (songs === 'yes') },
    { id: 'situation', label: 'who you are watching with', test: m => m.situations.includes(situation) },
    { id: 'intensity', label: 'your intensity ceiling', test: m => m.intensity <= intensityCap },
    { id: 'runtime', label: 'the runtime limit', test: m => m.runtime <= runtimeCap }
  ];

  const relaxOrder = ['runtime', 'intensity', 'situation', 'songs', 'subtitles'];
  let active = filters.map(f => f.id);
  let pool = [];
  state.relaxed = [];

  for (;;) {
    pool = libraryPool().filter(m => filters.every(f => (active.includes(f.id) ? f.test(m) : true)));
    if (pool.length >= 4 || !relaxOrder.some(id => active.includes(id))) break;
    const drop = relaxOrder.find(id => active.includes(id));
    active = active.filter(id => id !== drop);
    state.relaxed.push(filters.find(f => f.id === drop).label);
  }

  const MAX = 2 * 34 + 22 + 12 + 10;
  const scored = pool.map(m => {
    let s = 0;
    const hits = m.moods.filter(x => moods.includes(x));
    s += Math.min(hits.length, 2) * 34;
    if (m.effort === effort) s += 22;
    else if (Math.abs(['low', 'medium', 'high'].indexOf(m.effort) - ['low', 'medium', 'high'].indexOf(effort)) === 1) s += 9;
    if (m.situations[0] === situation) s += 6;
    if (m.runtime <= runtimeCap) s += 6;
    if (songs !== 'any' && m.library === 'bollywood' && m.musical === (songs === 'yes')) s += 6;
    s += Math.max(0, (m.imdb - 6.5) / 2.5) * 10;
    return { m, score: s, jitter: Math.random(), hits };
  });

  scored.sort((x, y) => y.score - x.score || y.jitter - x.jitter);
  state.deck = scored.map(o => ({ ...o, match: Math.max(52, Math.min(99, Math.round((o.score / MAX) * 100))) }));
  state.index = 0;
}

/* ── screens ── */
function show(name) {
  $$('.screen').forEach(s => { s.hidden = s.dataset.screen !== name; });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── quiz rendering ── */
function renderQuestion() {
  const q = state.questions[state.step];
  const picked = state.answers[q.key] || [];
  const stage = $('[data-question-stage]');

  stage.innerHTML = `
    <h2 class="q-title">${q.title}</h2>
    <p class="q-sub">${q.sub}</p>
    <div class="options ${q.cols2 ? 'cols-2' : ''}" role="group" aria-label="${q.title}">
      ${q.options.map(o => `
        <button class="option" data-value="${o.v}" aria-pressed="${picked.includes(o.v)}">
          ${I.tick}
          <span class="option-icon">${o.icon}</span>
          <span class="option-label">${o.label}</span>
          <span class="option-desc">${o.desc}</span>
        </button>`).join('')}
    </div>`;

  $('[data-progress-fill]').style.width = ((state.step + (picked.length ? 1 : 0)) / state.questions.length) * 100 + '%';
  $('[data-progress-label]').textContent = `Question ${state.step + 1} of ${state.questions.length}`;
  $('[data-back]').style.visibility = state.step === 0 ? 'hidden' : 'visible';
  $('[data-hint]').textContent = q.max > 1 ? `Pick up to ${q.max}.` : '';
  syncNext();

  $$('.option', stage).forEach(btn =>
    btn.addEventListener('click', () => choose(q, btn.dataset.value))
  );
}

function choose(q, value) {
  let picked = state.answers[q.key] || [];
  if (q.max === 1) {
    state.answers[q.key] = [value];
    renderQuestion();
    setTimeout(advance, 220);
    return;
  }
  if (picked.includes(value)) picked = picked.filter(v => v !== value);
  else if (picked.length < q.max) picked = [...picked, value];
  else picked = [...picked.slice(1), value];
  state.answers[q.key] = picked;
  renderQuestion();
}

function syncNext() {
  const q = state.questions[state.step];
  const picked = state.answers[q.key] || [];
  const btn = $('[data-next]');
  btn.hidden = q.max === 1;
  btn.disabled = picked.length < (q.min || 1);
  btn.textContent = state.step === state.questions.length - 1 ? 'Show my film' : 'Continue';
}

function advance() {
  if (state.step === state.questions.length - 1) {
    buildDeck();
    show('result');
    renderCard();
  } else {
    state.step++;
    renderQuestion();
  }
}

/* ── result rendering ── */
function renderCard() {
  const stage = $('[data-card-stage]');
  const entry = state.deck[state.index];

  if (!entry) { renderExhausted(); return; }

  const m = entry.m;
  const saved = state.shortlist.some(x => x.id === m.id);
  const badges = [];
  if (m.trueStory) badges.push('Based on a true story');
  if (m.bookAdaptation) badges.push('Book adaptation');
  if (m.animated) badges.push('Animated');
  if (m.subtitles) badges.push(m.language + ' with subtitles');
  if (m.library === 'bollywood') badges.push(m.musical ? 'Full song-and-dance' : 'Songs kept light');

  $('[data-result-rank]').textContent =
    state.index === 0 ? 'Your best match' : `Suggestion ${state.index + 1} of ${state.deck.length}`;

  const effortCopy = { low: 'Easy watch', medium: 'Fully engaged', high: 'Demands attention' };
  const dots = n =>
    Array.from({ length: 5 }, (_, i) => `<i class="${i < n ? 'on' : ''}"></i>`).join('');

  stage.innerHTML = `
    <article class="movie-card" style="--accent:${m.accent}">
      <span class="card-glow"></span>
      <div class="card-body">
        <div class="card-main">
          <p class="card-meta-top">
            <span>${m.genres.join(' · ')}</span><span class="dot">/</span>
            <span>${m.era}</span><span class="dot">/</span>
            <span class="rating">${I.star} ${m.imdb.toFixed(1)} IMDb</span>
          </p>
          <h2 class="movie-title">${m.title} <span class="year">(${m.year})</span></h2>
          <p class="pitch">${m.pitch}</p>
          <div class="why"><strong>Why this one:</strong> <span>${m.why}.</span></div>
          <div class="tags">
            ${entry.hits.map(h => `<span class="tag solid">${h}</span>`).join('')}
            ${badges.map(b => `<span class="tag">${b}</span>`).join('')}
          </div>
          <div class="card-actions">
            <button class="cta" data-trailer="${m.trailerId}" data-title="${m.title}">${I.play} Watch the trailer</button>
            <button class="ghost-btn" data-save="${m.id}">${I.bookmark} ${saved ? '<span class="saved-flag">On your shortlist</span>' : 'Save for later'}</button>
            <button class="ghost-btn" data-skip>Not tonight ${I.next}</button>
          </div>
        </div>

        <aside class="card-side">
          <dl class="slip">
            <div><dt>Director</dt><dd>${m.director}</dd></div>
            <div><dt>Runtime</dt><dd>${Math.floor(m.runtime / 60)}h ${m.runtime % 60}m</dd></div>
            <div><dt>Origin</dt><dd>${m.country}${m.language !== 'English' ? ` · ${m.language}` : ''}</dd></div>
            <div><dt>Attention</dt><dd>${effortCopy[m.effort]}</dd></div>
          </dl>
          <div class="meter">
            <span>Intensity</span>
            <span class="dots">${dots(m.intensity)}</span>
          </div>
        </aside>

        <p class="match-strip">
          <span>Match</span>
          <span class="match-bar"><i style="width:${entry.match}%"></i></span>
          <span>${entry.match}%</span>
          <span class="dot">/</span>
          <span>${state.deck.length} films fit your answers</span>
          ${state.relaxed.length ? `<span class="dot">/</span><span>relaxed ${state.relaxed[0]}</span>` : ''}
        </p>
      </div>
    </article>`;

  $('[data-trailer]', stage).addEventListener('click', e => openTrailer(e.currentTarget.dataset.trailer, e.currentTarget.dataset.title));
  $('[data-save]', stage).addEventListener('click', () => toggleSave(m));
  $('[data-skip]', stage).addEventListener('click', () => { state.index++; renderCard(); });
}

function renderExhausted() {
  $('[data-result-rank]').textContent = 'End of the deck';
  $('[data-card-stage]').innerHTML = `
    <div class="empty-state">
      <span class="empty-icon">${I.empty}</span>
      <h3>That's every film that fit</h3>
      <p>You've seen all ${state.deck.length} matches from ${LIB_NAME[state.library]}. Loosen a constraint — a longer runtime, or a different shelf — and the options open right up.</p>
      <div class="empty-actions">
        <button class="cta" data-restart-inline>Start over</button>
        <button class="ghost-btn" data-replay>Show them again</button>
      </div>
    </div>`;
  $('[data-restart-inline]').addEventListener('click', restart);
  $('[data-replay]').addEventListener('click', () => { state.index = 0; renderCard(); });
}

/* ── trailer modal ── */
function openTrailer(id, title) {
  const modal = $('[data-modal]');
  $('[data-modal-title]').textContent = `${title} — trailer`;
  $('[data-video-frame]').innerHTML =
    `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1" title="${title} trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  $('[data-modal-foot]').innerHTML =
    `Trailer not playing? <a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">Open it on YouTube</a>.`;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeTrailer() {
  $('[data-modal]').hidden = true;
  $('[data-video-frame]').innerHTML = '';
  document.body.style.overflow = '';
}

/* ── shortlist ── */
function toggleSave(m) {
  const i = state.shortlist.findIndex(x => x.id === m.id);
  if (i > -1) state.shortlist.splice(i, 1);
  else state.shortlist.push(m);
  syncShortlist();
  renderCard();
}
function syncShortlist() {
  const btn = $('[data-open-shortlist]');
  btn.hidden = state.shortlist.length === 0;
  $('[data-shortlist-count]').textContent = state.shortlist.length;
  const body = $('[data-drawer-body]');
  body.innerHTML = state.shortlist.length
    ? state.shortlist.map(m => `
        <div class="saved-row">
          <div>
            <h4>${m.title} <span class="year">(${m.year})</span></h4>
            <p>${m.runtime} min · ${m.genres.join(' · ')}</p>
          </div>
          <button class="remove-btn" data-remove="${m.id}" aria-label="Remove ${m.title}">${I.x}</button>
        </div>`).join('')
    : `<div class="empty-state"><span class="empty-icon">${I.empty}</span><h3>Nothing saved yet</h3><p>Hit “Save for later” on any suggestion and it will wait for you here.</p></div>`;
  $$('[data-remove]', body).forEach(b =>
    b.addEventListener('click', () => {
      state.shortlist = state.shortlist.filter(x => x.id !== b.dataset.remove);
      syncShortlist();
      if (!$('[data-screen="result"]').hidden) renderCard();
    })
  );
}

/* ── restart ── */
function restart() {
  state.answers = {};
  state.step = 0;
  state.index = 0;
  show('intro');
}

function startQuiz() {
  state.answers = {};
  state.step = 0;
  state.index = 0;
  state.questions = questionsFor(state.library);
  $('[data-library-tag]').textContent = LIB_NAME[state.library];
  show('quiz');
  renderQuestion();
}

/* ── wiring ── */
$('[data-start]').addEventListener('click', startQuiz);
$('[data-next]').addEventListener('click', advance);
$('[data-back]').addEventListener('click', () => { if (state.step > 0) { state.step--; renderQuestion(); } });
$('[data-restart]').addEventListener('click', restart);
$$('[data-modal-close]').forEach(el => el.addEventListener('click', closeTrailer));
$('[data-open-shortlist]').addEventListener('click', () => { $('[data-drawer]').hidden = false; });
$$('[data-drawer-close]').forEach(el => el.addEventListener('click', () => { $('[data-drawer]').hidden = true; }));
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  closeTrailer();
  $('[data-drawer]').hidden = true;
});

loadMovies()
  .then(syncShortlist)
  .catch(err => {
    $('[data-start]').disabled = true;
    $('.lede').innerHTML = `We couldn't load the film library (${err.message}). Reload the page to try again.`;
  });
