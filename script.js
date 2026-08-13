const questions = [
  { eyebrow: 'SET THE MOOD', title: 'What are you feeling tonight?', subtitle: 'Pick the vibe you want from your movie.', key: 'mood', options: [
    ['Romance ❤️', 'Love, chemistry and butterflies'], ['Comedy 😂', 'Something light and hilarious'], ['Thriller 🔥', 'Suspense, twists and tension'], ['Drama 🎭', 'A story that hits hard'], ['Action 💥', 'Big moments and adrenaline'], ['Feel-good ☀️', 'Warm, uplifting and comforting']
  ]},
  { eyebrow: 'WHO IS WATCHING?', title: 'Who are you watching with?', subtitle: 'We will tune the recommendation to the occasion.', key: 'company', options: [
    ['Just me', 'Solo movie night'], ['My partner ❤️', 'Date night or cozy evening'], ['Friends 🍿', 'Something everyone can enjoy'], ['Family 👨‍👩‍👧', 'A family-friendly pick']
  ]},
  { eyebrow: 'THE ERA', title: 'What kind of Bollywood are you craving?', subtitle: 'From old-school magic to today's hits.', key: 'era', options: [
    ['Classic', 'Before 2000'], ['2000s', 'Nostalgia and iconic soundtracks'], ['2010s', 'Modern classics'], ['Recent', '2020 and newer'], ['Surprise me', 'Any era is fair game']
  ]},
  { eyebrow: 'THE VIBE', title: 'Choose your movie personality.', subtitle: 'This helps us find something more specific than a genre.', key: 'style', options: [
    ['Blockbuster', 'Big stars, big moments'], ['Underrated gem', 'Something you may have missed'], ['Cult favourite', 'The movie people keep talking about'], ['True story', 'Inspired by real life'], ['Book adaptation', 'A story born on the page'], ['No preference', 'Just give me something good']
  ]},
  { eyebrow: 'ONE LAST THING', title: 'How much time do you have?', subtitle: 'Because sometimes you want a movie, not a three-hour commitment.', key: 'runtime', options: [
    ['Under 2 hours', 'Keep it tight'], ['Around 2 hours', 'The sweet spot'], ['2.5+ hours', 'Give me the full experience'], ['No preference', 'Runtime does not matter']
  ]}
];

const movies = [
  { title: 'Jab We Met', year: 2007, runtime: 138, genres: ['Romance','Comedy','Feel-good'], mood: ['Romance','Comedy','Feel-good'], company: ['My partner ❤️','Friends 🍿','Just me'], era: '2000s', style: ['Blockbuster','Cult favourite'], tags: ['Rom-com','Feel-good','Cult classic'], desc: 'A joyful, endlessly quotable journey about two strangers who change each other’s lives.', trailer: 'https://www.youtube.com/results?search_query=Jab+We+Met+official+trailer' },
  { title: 'Zindagi Na Milegi Dobara', year: 2011, runtime: 155, genres: ['Drama','Comedy','Feel-good'], mood: ['Comedy','Drama','Feel-good'], company: ['Friends 🍿','My partner ❤️','Just me'], era: '2010s', style: ['Blockbuster','Cult favourite'], tags: ['Friendship','Adventure','Feel-good'], desc: 'Three friends, one road trip and a reminder to actually live the life you have.', trailer: 'https://www.youtube.com/results?search_query=Zindagi+Na+Milegi+Dobara+official+trailer' },
  { title: 'Andhadhun', year: 2018, runtime: 139, genres: ['Thriller','Drama','Comedy'], mood: ['Thriller','Drama','Comedy'], company: ['Just me','Friends 🍿'], era: '2010s', style: ['Underrated gem','Cult favourite'], tags: ['Dark comedy','Twisty','Suspense'], desc: 'A blind pianist gets pulled into a murder mystery where absolutely nothing is what it seems.', trailer: 'https://www.youtube.com/results?search_query=Andhadhun+official+trailer' },
  { title: '3 Idiots', year: 2009, runtime: 171, genres: ['Comedy','Drama','Feel-good'], mood: ['Comedy','Drama','Feel-good'], company: ['Friends 🍿','Family 👨‍👩‍👧','Just me'], era: '2000s', style: ['Blockbuster','Cult favourite'], tags: ['Friendship','Comedy','Inspirational'], desc: 'Three college friends challenge the pressure to follow the crowd and find their own definition of success.', trailer: 'https://www.youtube.com/results?search_query=3+Idiots+official+trailer' },
  { title: 'Tamasha', year: 2015, runtime: 139, genres: ['Romance','Drama'], mood: ['Romance','Drama'], company: ['My partner ❤️','Just me'], era: '2010s', style: ['Cult favourite','Underrated gem'], tags: ['Romance','Self-discovery','Emotional'], desc: 'A deeply emotional love story about identity, expectations and finding the courage to be yourself.', trailer: 'https://www.youtube.com/results?search_query=Tamasha+official+trailer' },
  { title: 'Queen', year: 2014, runtime: 146, genres: ['Comedy','Drama','Feel-good'], mood: ['Comedy','Drama','Feel-good'], company: ['Just me','Friends 🍿'], era: '2010s', style: ['Blockbuster','Underrated gem'], tags: ['Empowering','Comedy','Travel'], desc: 'After a cancelled wedding, a shy woman takes the honeymoon trip alone and discovers herself.', trailer: 'https://www.youtube.com/results?search_query=Queen+2014+official+trailer' },
  { title: 'Drishyam', year: 2015, runtime: 163, genres: ['Thriller','Drama'], mood: ['Thriller','Drama'], company: ['Just me','Family 👨‍👩‍👧'], era: '2010s', style: ['Blockbuster'], tags: ['Thriller','Family','Mystery'], desc: 'A family man will do anything to protect his loved ones after an unexpected crime changes everything.', trailer: 'https://www.youtube.com/results?search_query=Drishyam+2015+official+trailer' },
  { title: '12th Fail', year: 2023, runtime: 147, genres: ['Drama','Feel-good'], mood: ['Drama','Feel-good'], company: ['Just me','Family 👨‍👩‍👧','Friends 🍿'], era: 'Recent', style: ['True story','Underrated gem'], tags: ['True story','Inspiring','Human'], desc: 'A determined young man rises from hardship to pursue his dream of becoming a civil servant.', trailer: 'https://www.youtube.com/results?search_query=12th+Fail+official+trailer' },
  { title: 'Gully Boy', year: 2019, runtime: 154, genres: ['Drama','Romance'], mood: ['Drama','Romance'], company: ['Just me','Friends 🍿','My partner ❤️'], era: '2010s', style: ['Blockbuster','True story'], tags: ['Music','Ambition','Mumbai'], desc: 'A young man from Mumbai’s streets finds his voice through hip-hop and refuses to let his circumstances define him.', trailer: 'https://www.youtube.com/results?search_query=Gully+Boy+official+trailer' },
  { title: 'Lagaan', year: 2001, runtime: 224, genres: ['Drama','Feel-good'], mood: ['Drama','Feel-good'], company: ['Family 👨‍👩‍👧','Friends 🍿'], era: '2000s', style: ['Blockbuster','Cult favourite'], tags: ['Period','Sports','Epic'], desc: 'A village stakes everything on a cricket match against their colonial rulers.', trailer: 'https://www.youtube.com/results?search_query=Lagaan+official+trailer' },
  { title: 'Barfi!', year: 2012, runtime: 151, genres: ['Romance','Comedy','Drama'], mood: ['Romance','Comedy','Drama','Feel-good'], company: ['My partner ❤️','Family 👨‍👩‍👧','Just me'], era: '2010s', style: ['Cult favourite','Underrated gem'], tags: ['Romance','Heartwarming','Classic'], desc: 'A charming, unconventional love story told with warmth, humour and a huge heart.', trailer: 'https://www.youtube.com/results?search_query=Barfi+official+trailer' },
  { title: 'Stree', year: 2018, runtime: 128, genres: ['Comedy','Horror'], mood: ['Comedy','Thriller'], company: ['Friends 🍿','Just me'], era: '2010s', style: ['Blockbuster','Cult favourite'], tags: ['Horror comedy','Fun','Spooky'], desc: 'A small-town legend about a mysterious woman becomes a hilarious supernatural adventure.', trailer: 'https://www.youtube.com/results?search_query=Stree+2018+official+trailer' },
  { title: 'Dangal', year: 2016, runtime: 161, genres: ['Drama','Action'], mood: ['Drama','Action','Feel-good'], company: ['Family 👨‍👩‍👧','Friends 🍿','Just me'], era: '2010s', style: ['Blockbuster','True story'], tags: ['Sports','True story','Family'], desc: 'An ambitious father trains his daughters to become champions against every expectation.', trailer: 'https://www.youtube.com/results?search_query=Dangal+official+trailer' },
  { title: 'Dil Chahta Hai', year: 2001, runtime: 183, genres: ['Comedy','Drama'], mood: ['Comedy','Drama','Feel-good'], company: ['Friends 🍿','Just me'], era: '2000s', style: ['Cult favourite','Blockbuster'], tags: ['Friendship','Road trip','Classic'], desc: 'Three best friends navigate love, adulthood and a life-changing trip to Goa.', trailer: 'https://www.youtube.com/results?search_query=Dil+Chahta+Hai+official+trailer' },
  { title: 'Om Shanti Om', year: 2007, runtime: 162, genres: ['Romance','Comedy','Drama'], mood: ['Romance','Comedy','Feel-good'], company: ['My partner ❤️','Friends 🍿','Family 👨‍👩‍👧'], era: '2000s', style: ['Blockbuster'], tags: ['Masala','Romance','Songs'], desc: 'A glamorous Bollywood reincarnation saga packed with romance, revenge, music and movie magic.', trailer: 'https://www.youtube.com/results?search_query=Om+Shanti+Om+official+trailer' },
  { title: 'Kahaani', year: 2012, runtime: 122, genres: ['Thriller','Drama'], mood: ['Thriller','Drama'], company: ['Just me','Friends 🍿'], era: '2010s', style: ['Underrated gem'], tags: ['Mystery','Kolkata','Twist'], desc: 'A pregnant woman arrives in Kolkata searching for her missing husband, and the mystery keeps deepening.', trailer: 'https://www.youtube.com/results?search_query=Kahaani+official+trailer' }
];

let step = 0;
let answers = {};
let shown = [];
const $ = id => document.getElementById(id);

function renderQuestion() {
  const q = questions[step];
  $('progressText').textContent = `Question ${step + 1} of ${questions.length}`;
  $('progressPercent').textContent = `${Math.round(((step + 1) / questions.length) * 100)}%`;
  $('progressBar').style.width = `${((step + 1) / questions.length) * 100}%`;
  $('questionEyebrow').textContent = q.eyebrow;
  $('questionTitle').textContent = q.title;
  $('questionSubtitle').textContent = q.subtitle;
  $('backBtn').style.visibility = step ? 'visible' : 'hidden';
  $('options').innerHTML = q.options.map(([label, sub]) => `<button class="option" data-value="${label}"><span>${label}<small>${sub}</small></span><strong>→</strong></button>`).join('');
  document.querySelectorAll('.option').forEach(btn => btn.addEventListener('click', () => choose(btn.dataset.value)));
}

function choose(value) {
  answers[questions[step].key] = value;
  if (step < questions.length - 1) { step++; renderQuestion(); } else showResult();
}

function scoreMovie(movie) {
  let score = 0;
  if (answers.mood && movie.mood.includes(answers.mood.split(' ')[0])) score += 30;
  if (answers.company && movie.company.includes(answers.company)) score += 18;
  if (answers.era === 'Surprise me' || movie.era === answers.era) score += 15;
  if (answers.style && answers.style !== 'No preference' && movie.style.includes(answers.style)) score += 18;
  if (answers.runtime === 'Under 2 hours' && movie.runtime < 120) score += 12;
  else if (answers.runtime === 'Around 2 hours' && movie.runtime >= 120 && movie.runtime <= 145) score += 12;
  else if (answers.runtime === '2.5+ hours' && movie.runtime >= 150) score += 12;
  else if (answers.runtime === 'No preference') score += 7;
  return score + Math.random() * 5;
}

function getRecommendation() {
  return movies.filter(m => !shown.includes(m.title)).map(movie => ({ movie, score: scoreMovie(movie) })).sort((a,b) => b.score - a.score)[0] || movies[Math.floor(Math.random()*movies.length)];
}

function showResult() {
  $('quiz').classList.add('hidden');
  $('result').classList.remove('hidden');
  renderResult(getRecommendation());
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function renderResult(result) {
  const movie = result.movie || result;
  shown.push(movie.title);
  const percent = Math.min(98, Math.max(74, Math.round(68 + (result.score || 20) / 1.7)));
  $('matchBadge').textContent = `${percent}% match`;
  $('movieTitle').textContent = movie.title;
  $('movieMeta').textContent = `${movie.year}  ·  ${movie.runtime} min  ·  ${movie.genres.join(' · ')}`;
  $('movieDescription').textContent = movie.desc;
  $('movieTags').innerHTML = movie.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  $('posterInitials').textContent = movie.title.split(/\s+/).slice(0,2).map(w => w[0]).join('');
  $('trailerBtn').href = movie.trailer;
}

$('startBtn').addEventListener('click', () => { $('quiz-start').classList.add('hidden'); $('quiz').classList.remove('hidden'); renderQuestion(); window.scrollTo({top:0, behavior:'smooth'}); });
$('backBtn').addEventListener('click', () => { if (step > 0) { step--; renderQuestion(); } });
$('nextBtn').addEventListener('click', () => { renderResult(getRecommendation()); window.scrollTo({top:0, behavior:'smooth'}); });
$('restartBtn').addEventListener('click', () => { step = 0; answers = {}; shown = []; $('result').classList.add('hidden'); $('quiz').classList.remove('hidden'); renderQuestion(); window.scrollTo({top:0, behavior:'smooth'}); });
