# doruk.gezici.me

Personal site of Doruk Gezici, founder of [POPJAM.IO](https://popjam.io). A terminal-editorial landing page: the hero is a live terminal that answers `whois doruk` and takes real commands.

Live at [doruk.gezici.me](https://doruk.gezici.me).

## Stack

- [Astro 7](https://astro.build) (static output, zero JS frameworks, vanilla script islands)
- [Tailwind CSS 4](https://tailwindcss.com) (CSS-first config in `src/styles/global.css`)
- Space Grotesk + JetBrains Mono via Fontsource
- Deployed on Vercel

## Structure

```
src/
├── components/    page sections (Nav, Hero, Terminal, Popjam, TrackRecord, Projects, Music, Writing, Contact, Footer)
├── data/          project index + cached Medium RSS fallback
├── layouts/       Layout.astro (SEO, OG, JSON-LD, analytics)
├── pages/         index.astro
└── styles/        global.css (theme tokens, reveals)
```

The Writing section fetches the Medium feed at build time and falls back to the cached XML in `src/data/` if Medium is unreachable.

## Commands

| Command        | Action                       |
| :------------- | :--------------------------- |
| `pnpm install` | Install dependencies         |
| `pnpm dev`     | Dev server at localhost:4321 |
| `pnpm build`   | Production build to `dist/`  |
| `pnpm preview` | Preview the build            |
