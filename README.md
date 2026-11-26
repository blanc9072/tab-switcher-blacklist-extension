# tab-switcher-blacklist-extension

When you're working at your computer, it's really easy to just mindlessly switch tabs on chrome to a site like youtube, instagram, or reddit, which kills your productivity. I am building a lightweight Chrome extension that detects when you switch to a distracting site during focus sessions and provides a popup warning to redirect your attention.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (includes npm)
- Google Chrome

## Build

```sh
npm install
npm run build
```

`npm run build` deletes `dist/`, compiles `src/**/*.ts` with `tsc`, then runs `scripts/copy-static.mjs` to copy the HTML, CSS, `manifest.json` and icons into `dist/`. `dist/` is the extension you load into Chrome.

Other scripts:

- `npm run watch`: recompiles TypeScript when a file changes. It doesn't copy static files, so run `npm run build` again after editing HTML, CSS, `manifest.json` or icons.
- `npm run clean`: deletes `dist/`.

## Load the extension in Chrome

1. Run `npm run build`.
2. Open `chrome://extensions`.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and select the `dist/` folder.
5. After rebuilding, click the reload icon on the extension's card to pick up the changes.

## Project layout

```
public/          copied as-is to the root of dist/ (manifest.json, icons/)
scripts/         build helpers
src/background/  service worker
src/content/     content script (warning overlay)
src/popup/       toolbar popup
src/shared/      types and helpers shared by the service worker and popup
```
