# Honglin Wei - Arcade

My personal site, rebuilt as a small arcade with SvelteKit and Svelte 5. It has the mini crossword from Project 1 and a new 2048 game. The 2048 rules come from my npm package [@honglinwei/arcade-core](https://www.npmjs.com/package/@honglinwei/arcade-core).

Live site: https://YOUR-PROJECT.vercel.app

Repo: https://github.com/grapefruit-leaf/arcade

## Pages

| Page      | URL          | File                                |
| --------- | ------------ | ----------------------------------- |
| Home      | `/`          | `src/routes/+page.svelte`           |
| Crossword | `/crossword` | `src/routes/crossword/+page.svelte` |
| 2048      | `/2048`      | `src/routes/2048/+page.svelte`      |
| About     | `/about`     | `src/routes/about/+page.svelte`     |
| Contact   | `/contact`   | `src/routes/contact/+page.svelte`   |

## Folder structure

```
src/
  app.html              page template
  routes/               one folder per page
  lib/
    assets/             favicon and portrait
    components/         Svelte components, grouped by page
    data/crossword.ts   crossword squares and clues
    state/              shared 2048 game state (game2048.svelte.ts)
    styles/global.css   shared styles (variables, type scale, spacing, tile colours)
    types/              shared TypeScript types
    utils/              seeded random, localStorage, swipe and tile helpers
```

The 2048 page only renders in the browser because the game is saved in `localStorage`. Every other page is prerendered.

## Run locally

Needs Node 22.17 or later.

```sh
npm install
npm run dev
```
