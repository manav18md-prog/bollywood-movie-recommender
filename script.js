const questions = [
  { eyebrow:'SET THE MOOD', title:'What are you feeling tonight?', subtitle:'Pick the vibe you want from your movie.', key:'mood', options:[['Romance ❤️','Love, chemistry and butterflies'],['Comedy 😂','Something light and hilarious'],['Thriller 🔥','Suspense, twists and tension'],['Drama 🎭','A story that hits hard'],['Action 💥','Big moments and adrenaline'],['Feel-good ☀️','Warm, uplifting and comforting']] },
  { eyebrow:'WHO IS WATCHING?', title:'Who are you watching with?', subtitle:'We will tune the recommendation to the occasion.', key:'company', options:[['Just me','Solo movie night'],['My partner ❤️','Date night or cozy evening'],['Friends 🍿','Something everyone can enjoy'],['Family 👨‍👩‍👧','A family-friendly pick']] },
  { eyebrow:'THE ERA', title:'What kind of Bollywood are you craving?', subtitle:"From old-school magic to today's hits.", key:'era', options:[['Classic','Before 2000'],['2000s','Nostalgia and iconic soundtracks'],['2010s','Modern classics'],['Recent','2020 and newer'],['Surprise me','Any era is fair game']] },
  { eyebrow:'THE VIBE', title:'Choose your movie personality.', subtitle:'This helps us find something more specific than a genre.', key:'style', options:[['Blockbuster','Big stars, big moments'],['Underrated gem','Something you may have missed'],['Cult favourite','The movie people keep talking about'],['True story','Inspired by real life'],['Book adaptation','A story born on the page'],['No preference','Just give me something good']] },
  { eyebrow:'ONE LAST THING', title:'How much time do you have?', subtitle:'Because sometimes you want a movie, not a three-hour commitment.', key:'runtime', options:[['Under 2 hours','Keep it tight'],['Around 2 hours','The sweet spot'],['2.5+ hours','Give me the full experience'],['No preference','Runtime does not matter']] }
];

// Curated Bollywood/Hindi catalogue. The recommendation engine uses this metadata rather than popularity alone.
const rawMovies = [
['Jab We Met',2007,138,'Romance,Comedy,Feel-good','Romance,Comedy,Feel-good','My partner ❤️,Friends 🍿,Just me','2000s','Blockbuster,Cult favourite','Rom-com,Feel-good,Cult classic','Joyful, endlessly quotable and ideal when you want romance with a huge dose of personality.'],
['Dilwale Dulhania Le Jayenge',1995,189,'Romance,Drama,Feel-good','Romance,Feel-good','My partner ❤️,Family 👨‍👩‍👧','Classic','Blockbuster,Cult favourite','Romance,Classic,Family','A defining Bollywood romance about love, family and choosing your own future.'],
['Kuch Kuch Hota Hai',1998,185,'Romance,Comedy,Drama','Romance,Comedy','My partner ❤️,Family 👨‍👩‍👧,Friends 🍿','Classic','Blockbuster,Cult favourite','Romance,Friendship,Classic','A nostalgic love triangle full of friendship, songs and peak 90s Bollywood emotion.'],
['Kabhi Khushi Kabhie Gham',2001,210,'Romance,Drama,Feel-good','Romance,Drama,Feel-good','Family 👨‍👩‍👧,My partner ❤️','2000s','Blockbuster,Cult favourite','Family,Romance,Epic','Big emotions, family drama, iconic performances and an unforgettable soundtrack.'],
['Kal Ho Naa Ho',2003,186,'Romance,Comedy,Drama','Romance,Comedy,Drama','My partner ❤️,Friends 🍿,Family 👨‍👩‍👧','2000s','Blockbuster,Cult favourite','Romance,Friendship,Emotional','A funny, romantic and deeply emotional story about friendship and living in the moment.'],
['Veer-Zaara',2004,192,'Romance,Drama','Romance,Drama','My partner ❤️,Family 👨‍👩‍👧','2000s','Blockbuster,Cult favourite','Epic romance,Music,Emotional','A sweeping cross-border love story with classic Bollywood scale and emotion.'],
['Om Shanti Om',2007,162,'Romance,Comedy,Drama','Romance,Comedy,Feel-good','My partner ❤️,Friends 🍿,Family 👨‍👩‍👧','2000s','Blockbuster','Masala,Romance,Songs','A glamorous reincarnation saga packed with romance, revenge, music and movie magic.'],
['Rockstar',2011,159,'Romance,Drama,Music','Romance,Drama','My partner ❤️,Just me','2010s','Blockbuster,Cult favourite','Music,Romance,Intense','A passionate musician story for nights when you want love, ambition and emotional intensity.'],
['Tamasha',2015,139,'Romance,Drama','Romance,Drama','My partner ❤️,Just me','2010s','Cult favourite,Underrated gem','Romance,Self-discovery,Emotional','A deeply emotional story about identity, expectations and finding the courage to be yourself.'],
['Barfi!',2012,151,'Romance,Comedy,Drama','Romance,Comedy,Drama,Feel-good','My partner ❤️,Family 👨‍👩‍👧,Just me','2010s','Cult favourite,Underrated gem','Romance,Heartwarming,Classic','A charming, unconventional love story told with warmth, humour and a huge heart.'],
['Yeh Jawaani Hai Deewani',2013,160,'Romance,Comedy,Drama','Romance,Comedy,Feel-good','My partner ❤️,Friends 🍿','2010s','Blockbuster,Cult favourite','Friendship,Travel,Romance','A glossy coming-of-age favourite about friendship, travel, ambition and love.'],
['2 States',2014,149,'Romance,Comedy,Drama','Romance,Comedy','My partner ❤️,Friends 🍿,Family 👨‍👩‍👧','2010s','Blockbuster,Book adaptation','Romance,Family,Comedy','A modern romance that turns cultural differences and family expectations into heartfelt comedy.'],
['Hasee Toh Phasee',2014,141,'Romance,Comedy','Romance,Comedy,Feel-good','My partner ❤️,Just me','2010s','Underrated gem','Rom-com,Quirky,Feel-good','A quirky, warm rom-com for when you want something lighter and less predictable.'],
['Bareilly Ki Barfi',2017,116,'Romance,Comedy','Romance,Comedy,Feel-good','My partner ❤️,Friends 🍿,Family 👨‍👩‍👧','2010s','Underrated gem','Rom-com,Small town,Fun','A playful small-town romantic comedy with a breezy runtime and lots of charm.'],
['Queen',2014,146,'Comedy,Drama,Feel-good','Comedy,Drama,Feel-good','Just me,Friends 🍿','2010s','Blockbuster,Underrated gem','Empowering,Comedy,Travel','After a cancelled wedding, a shy woman takes the honeymoon trip alone and discovers herself.'],
['Zindagi Na Milegi Dobara',2011,155,'Drama,Comedy,Feel-good','Comedy,Drama,Feel-good','Friends 🍿,My partner ❤️,Just me','2010s','Blockbuster,Cult favourite','Friendship,Adventure,Feel-good','Three friends, one road trip and a reminder to actually live the life you have.'],
['3 Idiots',2009,171,'Comedy,Drama,Feel-good','Comedy,Drama,Feel-good','Friends 🍿,Family 👨‍👩‍👧,Just me','2000s','Blockbuster,Cult favourite','Friendship,Comedy,Inspirational','Three college friends challenge the pressure to follow the crowd and find their own definition of success.'],
['Munna Bhai M.B.B.S.',2003,156,'Comedy,Drama,Feel-good','Comedy,Feel-good','Friends 🍿,Family 👨‍👩‍👧,Just me','2000s','Blockbuster,Cult favourite','Comedy,Heartwarming,Classic','A lovable gangster tries to become a doctor and learns that kindness can be its own superpower.'],
['Lage Raho Munna Bhai',2006,144,'Comedy,Drama,Feel-good','Comedy,Feel-good,Drama','Friends 🍿,Family 👨‍👩‍👧,Just me','2000s','Blockbuster,Cult favourite','Comedy,Gandhi,Feel-good','A charming comedy that turns an unusual friendship with Gandhi into a lesson in everyday kindness.'],
['Hera Pheri',2000,156,'Comedy','Comedy','Friends 🍿,Just me','2000s','Cult favourite,Blockbuster','Comedy,Chaos,Cult classic','Three broke men, one chaotic scheme and some of Bollywood’s most rewatchable comedy.'],
['Andaz Apna Apna',1994,160,'Comedy,Romance','Comedy,Feel-good','Friends 🍿,Family 👨‍👩‍👧,Just me','Classic','Cult favourite','Comedy,Cult classic,Quotable','A gloriously silly cult comedy that rewards repeat viewing and group movie nights.'],
['Gol Maal',1979,116,'Comedy','Comedy,Feel-good','Friends 🍿,Family 👨‍👩‍👧,Just me','Classic','Cult favourite','Comedy,Classic,Shorter watch','A timeless Hrishikesh Mukherjee comedy built around mistaken identity and effortless charm.'],
['Khosla Ka Ghosla!',2006,135,'Comedy,Drama','Comedy,Feel-good','Friends 🍿,Family 👨‍👩‍👧,Just me','2000s','Underrated gem,Cult favourite','Comedy,Middle class,Clever','A middle-class family fights back against a property scam with wit rather than muscle.'],
['Vicky Donor',2012,126,'Comedy,Romance','Comedy,Romance,Feel-good','My partner ❤️,Friends 🍿,Just me','2010s','Underrated gem,Blockbuster','Rom-com,Offbeat,Fun','A fresh, cheeky rom-com that mixes an unusual premise with genuine warmth.'],
['Stree',2018,128,'Comedy,Horror','Comedy,Thriller','Friends 🍿,Just me','2010s','Blockbuster,Cult favourite','Horror comedy,Fun,Spooky','A small-town legend about a mysterious woman becomes a hilarious supernatural adventure.'],
['Bhool Bhulaiyaa',2007,159,'Comedy,Horror,Thriller','Thriller,Comedy','Friends 🍿,Just me,Family 👨‍👩‍👧','2000s','Blockbuster,Cult favourite','Horror comedy,Mystery,Classic','A spooky psychological mystery with comedy, memorable characters and a strong twist.'],
['Andhadhun',2018,139,'Thriller,Drama,Comedy','Thriller,Drama,Comedy','Just me,Friends 🍿','2010s','Underrated gem,Cult favourite','Dark comedy,Twisty,Suspense','A blind pianist gets pulled into a murder mystery where absolutely nothing is what it seems.'],
['Drishyam',2015,163,'Thriller,Drama','Thriller,Drama','Just me,Family 👨‍👩‍👧','2010s','Blockbuster','Thriller,Family,Mystery','A family man will do anything to protect his loved ones after an unexpected crime changes everything.'],
['Kahaani',2012,122,'Thriller,Drama','Thriller,Drama','Just me,Friends 🍿','2010s','Underrated gem','Mystery,Kolkata,Twist','A pregnant woman searches for her missing husband in Kolkata as the mystery keeps deepening.'],
['Talvar',2015,132,'Thriller,Drama','Thriller,Drama','Just me','2010s','True story,Underrated gem','Investigation,True story,Serious','A gripping investigation drama inspired by a notorious real-life case.'],
['Special 26',2013,144,'Thriller,Drama','Thriller,Drama','Just me,Friends 🍿','2010s','Blockbuster,Underrated gem','Heist,True events,Smart','A clever con story about a group posing as officials to pull off audacious robberies.'],
['A Wednesday!',2008,104,'Thriller,Drama','Thriller,Drama','Just me','2000s','Cult favourite,Underrated gem','Short,Tense,Political thriller','A tightly paced thriller built around one ordinary man making an extraordinary demand.'],
['Gangs of Wasseypur',2012,321,'Drama,Action','Drama,Action','Just me,Friends 🍿','2010s','Cult favourite','Crime saga,Epic,Dark','A sprawling crime saga for viewers who want something intense, violent and unapologetically ambitious.'],
['Gully Boy',2019,154,'Drama,Romance,Music','Drama,Romance','Just me,Friends 🍿,My partner ❤️','2010s','Blockbuster,True story','Music,Ambition,Mumbai','A young man from Mumbai’s streets finds his voice through hip-hop and refuses to be defined by his circumstances.'],
['Dangal',2016,161,'Drama,Action,Feel-good','Drama,Action,Feel-good','Family 👨‍👩‍👧,Friends 🍿,Just me','2010s','Blockbuster,True story','Sports,True story,Family','An ambitious father trains his daughters to become champions against every expectation.'],
['Chak De! India',2007,153,'Drama,Action,Feel-good','Drama,Action,Feel-good','Family 👨‍👩‍👧,Friends 🍿,Just me','2000s','Blockbuster,Cult favourite','Sports,Teamwork,Inspirational','A disgraced hockey coach builds an unlikely women’s team into contenders.'],
['Lagaan',2001,224,'Drama,Feel-good','Drama,Feel-good','Family 👨‍👩‍👧,Friends 🍿','2000s','Blockbuster,Cult favourite','Period,Sports,Epic','A village stakes everything on a cricket match against their colonial rulers.'],
['Swades',2004,189,'Drama,Feel-good','Drama,Feel-good','Just me,Family 👨‍👩‍👧','2000s','Cult favourite,Underrated gem','Social,Inspirational,Classic','A NASA engineer returns to India and reconnects with a village he thought he had left behind.'],
['Rang De Basanti',2006,167,'Drama,Action,Feel-good','Drama,Action,Feel-good','Friends 🍿,Just me','2000s','Blockbuster,Cult favourite','Friendship,Patriotism,Youth','A group of friends find their carefree lives transformed by a documentary and a sense of purpose.'],
['Rock On!!',2008,145,'Drama,Music','Drama,Feel-good','Friends 🍿,Just me','2000s','Cult favourite,Underrated gem','Music,Friendship,Comeback','Four friends reunite with music and confront the lives they chose after their band broke apart.'],
['Udaan',2010,138,'Drama','Drama','Just me','2010s','Underrated gem,Cult favourite','Coming of age,Emotional,Indie','A young man struggles against a controlling father while trying to build a life of his own.'],
['Masaan',2015,109,'Drama,Romance','Drama,Romance','Just me,My partner ❤️','2010s','Underrated gem','Human,Emotional,Short','A moving, intimate drama about grief, love, social pressure and new beginnings.'],
['12th Fail',2023,147,'Drama,Feel-good','Drama,Feel-good','Just me,Family 👨‍👩‍👧,Friends 🍿','Recent','True story,Underrated gem','True story,Inspiring,Human','A determined young man rises from hardship to pursue his dream of becoming a civil servant.'],
['Laapataa Ladies',2024,124,'Comedy,Drama,Feel-good','Comedy,Feel-good,Drama','Family 👨‍👩‍👧,Friends 🍿,My partner ❤️','Recent','Underrated gem','Comedy,Social,Warm','A gentle, funny story about two brides, mistaken identities and unexpected independence.'],
['Stree 2',2024,149,'Comedy,Horror,Action','Comedy,Thriller,Action','Friends 🍿,Family 👨‍👩‍👧','Recent','Blockbuster','Horror comedy,Franchise,Fun','A bigger supernatural comedy adventure when you want scares without taking them too seriously.'],
['Article 15',2019,130,'Drama,Thriller','Drama,Thriller','Just me','2010s','True story,Underrated gem','Social,Investigation,Serious','A police investigation becomes a confrontation with entrenched social inequality.'],
['Piku',2015,123,'Comedy,Drama','Comedy,Drama,Feel-good','Family 👨‍👩‍👧,My partner ❤️,Just me','2010s','Underrated gem,Cult favourite','Family,Road trip,Warm','A prickly father and daughter take a road trip that becomes unexpectedly affectionate and funny.'],
['English Vinglish',2012,134,'Drama,Comedy,Feel-good','Drama,Feel-good','Family 👨‍👩‍👧,Just me','2010s','Underrated gem','Family,Confidence,Warm','A homemaker quietly rebuilds her confidence when she finds herself outside her comfort zone.'],
['Taare Zameen Par',2007,165,'Drama,Feel-good','Drama,Feel-good','Family 👨‍👩‍👧,Just me','2000s','Blockbuster,Cult favourite','Family,School,Emotional','A teacher helps a misunderstood child discover that his difference is also his strength.'],
['Paan Singh Tomar',2012,135,'Drama,Action','Drama,Action','Just me','2010s','True story,Underrated gem','True story,Sports,Intense','The remarkable true story of an athlete whose life takes a very different turn.'],
['Shahid',2012,129,'Drama','Drama','Just me','2010s','True story,Underrated gem','True story,Legal,Serious','A powerful biographical drama about lawyer and human-rights activist Shahid Azmi.'],
['Maqbool',2003,132,'Drama,Thriller','Drama,Thriller','Just me','2000s','Cult favourite,Underrated gem','Crime,Shakespeare,Dark','A dark Mumbai crime tragedy inspired by Shakespeare’s Macbeth.'],
['Haider',2014,160,'Drama,Thriller','Drama,Thriller','Just me','2010s','Cult favourite','Shakespeare,Political,Intense','A haunting adaptation of Hamlet set against conflict in Kashmir.'],
['Omkara',2006,155,'Drama,Crime','Drama,Thriller','Just me','2000s','Cult favourite,Underrated gem','Shakespeare,Crime,Dark','A gritty North Indian crime drama inspired by Othello.'],
['Wake Up Sid',2009,138,'Comedy,Drama,Feel-good','Comedy,Drama,Feel-good','Just me,Friends 🍿,My partner ❤️','2000s','Cult favourite,Underrated gem','Coming of age,Mumbai,Feel-good','A directionless college graduate slowly figures out what he actually wants from life.'],
['Delhi Belly',2011,103,'Comedy,Thriller','Comedy,Thriller','Friends 🍿,Just me','2010s','Cult favourite','Dark comedy,Fast,Chaotic','A fast, irreverent comedy-thriller for a group that wants something outrageous and quick.'],
['Bhaag Milkha Bhaag',2013,189,'Drama,Action','Drama,Action,Feel-good','Family 👨‍👩‍👧,Just me','2010s','True story,Blockbuster','Sports,True story,Inspirational','The extraordinary journey of athlete Milkha Singh from trauma to international glory.'],
['Neerja',2016,122,'Drama,Thriller','Drama,Thriller','Just me,Family 👨‍👩‍👧','2010s','True story,Underrated gem','True story,Courage,Tense','A brave flight attendant puts others before herself during a terrifying hijacking.'],
['Raazi',2018,138,'Drama,Thriller','Drama,Thriller','Just me,My partner ❤️','2010s','True story,Blockbuster','Spy,True story,Emotional','A young woman becomes an undercover operative during a dangerous period of India-Pakistan tension.']
];

const movies = rawMovies.map(([title,year,runtime,genres,mood,company,era,style,tags,desc]) => ({
  title, year, runtime,
  genres: genres.split(','), mood: mood.split(','), company: company.split(','), era,
  style: style.split(','), tags: tags.split(','), desc,
  trailer: `https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' official trailer')}`
}));

let step = 0;
let answers = {};
let shown = [];
const $ = id => document.getElementById(id);
const clean = value => String(value || '').replace(/[❤️🔥😂🎭💥☀️🍿👨‍👩‍👧]/g, '').trim();

function renderQuestion() {
  const q = questions[step];
  $('progressText').textContent = `Question ${step + 1} of ${questions.length}`;
  $('progressPercent').textContent = `${Math.round(((step + 1) / questions.length) * 100)}%`;
  $('progressBar').style.width = `${((step + 1) / questions.length) * 100}%`;
  $('questionEyebrow').textContent = q.eyebrow;
  $('questionTitle').textContent = q.title;
  $('questionSubtitle').textContent = q.subtitle;
  $('backBtn').style.visibility = step ? 'visible' : 'hidden';
  $('options').innerHTML = q.options.map(([label,sub]) => {
    const selected = answers[q.key] === label ? ' aria-current="true"' : '';
    return `<button class="option" data-value="${label}"${selected}><span>${label}<small>${sub}</small></span><strong>→</strong></button>`;
  }).join('');
  document.querySelectorAll('.option').forEach(btn => btn.addEventListener('click', () => choose(btn.dataset.value)));
}

function choose(value) {
  answers[questions[step].key] = value;
  if (step < questions.length - 1) { step++; renderQuestion(); }
  else showResult();
}

function runtimeFit(runtime, preference) {
  if (preference === 'No preference') return 1;
  if (preference === 'Under 2 hours') return runtime <= 120 ? 1 : Math.max(0, 1 - (runtime - 120) / 120);
  if (preference === 'Around 2 hours') return Math.max(0, 1 - Math.abs(runtime - 130) / 80);
  if (preference === '2.5+ hours') return runtime >= 150 ? 1 : Math.max(0, runtime / 150);
  return 0;
}

function scoreMovie(movie) {
  const weights = { mood:.34, company:.20, era:.14, style:.18, runtime:.10 };
  const mood = clean(answers.mood);
  const company = answers.company || '';
  const era = answers.era || '';
  const style = answers.style || '';
  const runtime = answers.runtime || '';
  let score = 0;
  const reasons = [];

  if (movie.mood.some(x => clean(x) === mood)) { score += weights.mood; reasons.push(`matches your ${mood.toLowerCase()} mood`); }
  if (movie.company.includes(company)) { score += weights.company; reasons.push('fits your viewing group'); }
  if (era === 'Surprise me' || movie.era === era) { score += weights.era; if (era !== 'Surprise me') reasons.push(`from the ${era}`); }
  if (style === 'No preference' || movie.style.includes(style)) { score += weights.style; if (style !== 'No preference') reasons.push(style.toLowerCase()); }

  const rf = runtimeFit(movie.runtime, runtime);
  score += weights.runtime * rf;
  if (rf >= .85 && runtime !== 'No preference') reasons.push('fits your time window');

  // Small quality prior; taste still dominates the score.
  if (movie.style.includes('Blockbuster')) score += .035;
  else if (movie.style.includes('Cult favourite')) score += .03;
  else if (movie.style.includes('Underrated gem')) score += .025;
  else score += .015;

  // Explicit mismatch penalties.
  if (company === 'Family 👨‍👩‍👧' && (movie.genres.includes('Crime') || movie.tags.includes('Dark'))) score -= .08;
  if (runtime === 'Under 2 hours' && movie.runtime > 180) score -= .12;

  return { movie, score: Math.max(0, Math.min(1, score)), reasons };
}

function getRecommendations() {
  const available = movies.filter(movie => !shown.includes(movie.title));
  const pool = available.length ? available : movies;
  // No artificial index penalty: ranking is determined by the actual score.
  return pool.map(scoreMovie).sort((a,b) => b.score - a.score);
}

function matchLabel(score) {
  const pct = Math.round(score * 100);
  if (pct >= 90) return `${pct}% excellent match`;
  if (pct >= 78) return `${pct}% great match`;
  if (pct >= 65) return `${pct}% good match`;
  if (pct >= 50) return `${pct}% possible match`;
  return `${pct}% wildcard match`;
}

function showResult() {
  $('quiz').classList.add('hidden');
  $('result').classList.remove('hidden');
  const ranked = getRecommendations();
  if (ranked.length) renderResult(ranked[0]);
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderResult(result) {
  const movie = result.movie || result;
  if (!shown.includes(movie.title)) shown.push(movie.title);
  $('matchBadge').textContent = matchLabel(result.score ?? .5);
  $('movieTitle').textContent = movie.title;
  $('movieMeta').textContent = `${movie.year}  ·  ${movie.runtime} min  ·  ${movie.genres.join(' · ')}`;
  const why = result.reasons?.length ? `Why this pick: ${result.reasons.slice(0,3).join(', ')}.` : 'Why this pick: it is a strong overall fit for your answers.';
  $('movieDescription').textContent = `${movie.desc} ${why}`;
  $('movieTags').innerHTML = movie.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  $('posterInitials').textContent = movie.title.split(/\s+/).slice(0,2).map(w => w[0]).join('');
  $('trailerBtn').href = movie.trailer;
}

$('startBtn').addEventListener('click', () => { $('quiz-start').classList.add('hidden'); $('quiz').classList.remove('hidden'); renderQuestion(); window.scrollTo({top:0,behavior:'smooth'}); });
$('backBtn').addEventListener('click', () => { if (step > 0) { step--; renderQuestion(); } });
$('nextBtn').addEventListener('click', () => { const next = getRecommendations()[0]; if (next) { renderResult(next); window.scrollTo({top:0,behavior:'smooth'}); } });
$('restartBtn').addEventListener('click', () => { step=0; answers={}; shown=[]; $('result').classList.add('hidden'); $('quiz').classList.remove('hidden'); renderQuestion(); window.scrollTo({top:0,behavior:'smooth'}); });
