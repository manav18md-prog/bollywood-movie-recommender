# FilmyForMe — Bollywood Movie Recommender

A quiz-based Hindi/Bollywood movie recommendation engine inspired by the idea of reducing choice overload: answer a few questions and get one movie recommendation at a time.

## Version 2

- 60+ curated Hindi/Bollywood titles across classic, 2000s, 2010s and recent cinema
- Mood, viewing group, era, movie personality and runtime signals
- Weighted recommendation scoring rather than simple genre matching
- Runtime similarity scoring
- Soft quality/curation priors without letting popularity dominate
- Mismatch penalties for poor fits
- Controlled recommendation diversity through the "Not for me" flow
- Explanation of why a movie was selected
- Trailer search links
- Responsive vanilla HTML/CSS/JavaScript frontend

## Run locally

No build step is required.

1. Download or clone the repository.
2. Open `index.html` in a modern browser.

For a local development server, any static server works. For example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Data approach

The catalogue is intentionally hand-curated and manually tagged for recommendation quality. A production version can later replace or enrich the local metadata with a movie API such as TMDB. TMDB provides movie metadata, genres, images and credits through its API.

## Roadmap

- Real poster artwork and image loading
- Actor/director preference questions
- Hindi-language and content-safety filters
- Streaming availability
- Persistent feedback from likes/dislikes
- Larger catalogue with automated metadata ingestion plus manual editorial tags
- Analytics and recommendation evaluation
