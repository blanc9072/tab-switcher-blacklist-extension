// Content script that will draw the warning overlay on blocked sites.
// It is not registered in manifest.json yet, so Chrome never injects it.
//
// Chrome runs content scripts as classic scripts, not ES modules. Keep this file
// free of top-level `import`/`export`: tsc emits `export {};` for any module file
// (even one with only `import type`), and that line fails to parse in a classic script.

// TODO(milestone 5): build the overlay ("Back to work" / "Continue anyway").
// TODO(milestone 6): inject it on blocked pages.
