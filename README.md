# Thursday 26 November 2026 — World News in One Image

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/gamessinner666-dot/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/gamessinner666-dot/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

An unboxed archival 1024×1024 editorial world-news broadsheet summarizing **Thursday 26 November 2026** across **49 verified single-item stories, 9 regions, and 18 fields** (Europe, East Asia, Africa, Middle East, South & SE Asia, North America, Latin America, Oceania, and World & Space), featuring 13 bespoke pure-pictorial archival SVG scenes, 5 high-contrast open key numbers, a full-day UTC timeline, a clean 11-pin / 36-dot world locator map with 2 Global/Orbit callouts, 36 strictly single-story dateline briefs, consistent epistemic badges (`OFFICIAL`, `CONFIRMED`, `REPORTED`, `CLAIM`), Tier-1 source attributions, programmatically verified region/field totals, and a strict adjacent-date exclusion audit box.

- **Bounty:** [Sum up 26 November's world news in one image](https://make.fun/bounty/news-image-20261126)
- **Join make.fun:** [https://make.fun/r/vkcytp13](https://make.fun/r/vkcytp13)

## Run locally

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` uses Node 22 standard library only (zero network, zero external dependencies), validates the PNG signature, dimensions (1024×1024), chunk framing, IEND terminator, and byte cap (< 1 MiB), and writes byte-identical outputs across repeated runs to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`).

## Regenerate image from source

```bash
node scripts/generate.ts
```

## License

MIT (`SPDX-License-Identifier: MIT`).
