# PickAMovieForMe — movies.json Verification Report

## Summary

- **Total movies:** 72
- **oEmbed trailer verification pass rate: 72/72 (100%)**
- **Duplicate IDs:** 0
- **Non-English / subtitled films:** 21 (exceeds the ≥12 minimum requirement)
- **File:** `/home/user/workspace/pickamovie/data/movies.json` (valid JSON array, UTF-8, 72 objects)

## Verification method

Every `trailerId` was checked with a live HTTP request to the YouTube oEmbed endpoint:

```
https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<ID>&format=json
```

A request was scored **PASS** only if it returned HTTP 200 with a JSON body containing a `"title"` field, and that returned title was manually reviewed against the target film to rule out false positives (e.g. wrong film, TV series with the same name, fan edit, or unrelated video that happens to load).

The verification script (`/home/user/workspace/pickamovie/data/fill_and_verify.py`) iterated a per-movie ordered list of candidate video IDs (`/home/user/workspace/pickamovie/data/trailer_ids.py`), gathered via web search targeting official studio/distributor YouTube channels (A24, Neon, Miramax, Paramount, Universal, Warner Bros., Sony Pictures, Focus Features, Lionsgate, 20th Century Fox, IFC Films/Midnight, Netflix, National Geographic, Movieclips Classic Trailers, StudioCanal, GKIDS/Studio Ghibli-affiliated uploads). The first candidate per movie that passed the oEmbed check was written into the film's record. All 72 movies passed on their first attempted candidate — no re-research cycle was required.

Raw per-movie verification detail (chosen ID, returned oEmbed title, and all attempted candidates) is saved at `/home/user/workspace/pickamovie/data/verify_results.json` for audit purposes.

## Spot-check of returned titles vs. target films

All 72 returned oEmbed titles were manually compared to the intended film title. Examples of notable ones reviewed carefully to avoid mismatches:

- `rrr` → returned title is *"RRR - Official Trailer (2023 Fan CelebRRRation Re-release)"* — confirmed this is the correct film's official U.S. re-release trailer (Variance Films/DVV Entertainment), not a different film.
- `amadeus` → returned *"Amadeus | 4K Ultra HD Trailer | Warner Bros. Entertainment"* — confirmed this is the 1984 Miloš Forman film's WB restoration trailer, not the unrelated 2025 TV miniseries of the same name (candidate IDs for the miniseries were explicitly excluded during research).
- `what-we-do-in-the-shadows` → confirmed trailer is for the 2014 Jemaine Clement/Taika Waititi mockumentary film, not the later FX television series of the same name.
- `hunt-for-the-wilderpeople`, `paddington-2`, `coco`, `wall-e`, `the-iron-giant`, `a-quiet-place`, `hereditary`, `the-babadook`, `alien`, `the-thing`, `jaws`, `mad-max-fury-road`, `spider-man-into-the-spider-verse`, `eternal-sunshine-of-the-spotless-mind`, `little-miss-sunshine` — all verified against official studio channel uploads (Disney/Pixar, Warner Bros., Paramount Movies, A24, IFC Midnight, 20th Century Fox, Universal, Sony Pictures Animation, Focus Features, Fox Searchlight/Movieclips Classic Trailers respectively).

## Data quality checks performed

- **Schema completeness:** every one of the 72 objects contains all required keys (`id, title, year, runtime, director, country, language, genres, moods, situations, effort, intensity, era, trueStory, bookAdaptation, animated, subtitles, imdb, pitch, why, trailerId, accent`) — confirmed programmatically, zero missing keys.
- **No duplicate `id` values** across the 72 kebab-case slugs.
- **Controlled vocabularies:** `moods` values are drawn only from the fixed set (uplifting, tense, funny, heartbreaking, mind-bending, cozy, dark, romantic, epic, thought-provoking, scary, adrenaline); `situations` values only from (solo, date-night, friends, family, background); `effort` restricted to low/medium/high; `era` restricted to the six listed decade buckets.
- **Country/language spread:** 21 of 72 films are subtitled/non-English-language productions, spanning South Korea, France, Japan, Brazil, Spain, India, Germany, Iran, Italy, Argentina, Mexico — well above the ≥12 minimum required.
- **Decade spread:** films range from 1975 (*Jaws*) through 2023 (*Society of the Snow*, *Anatomy of a Fall*), with the majority concentrated in 1995–2024 as required.

## Notes / caveats

- Runtimes, years, directors, and IMDb ratings were populated during the curation phase using reference data cross-checked against IMDb/Wikipedia conventions; this verification pass focused specifically on the trailer-ID requirement, which is the item explicitly flagged as highest-risk (hallucinated or dead video IDs). If any runtime/rating figure needs a fresh double-check against a live source before shipping, that would be a reasonable follow-up but was out of scope for this verification pass.
- Two films — `ex-machina` (build data uses year 2014; some sources, including the original list file, cite 2015 as the wider international release year) — this reflects the film's UK theatrical release year (2014) vs. its later US release (2015); IMDb lists 2014 as the production/primary release year, which is what was retained.
- All trailer IDs point to the *film's* official trailer, not teasers-only or fan-made content, except where noted above that a legitimate official re-release/anniversary trailer was used because it was the most reliably live official-channel upload at verification time.
