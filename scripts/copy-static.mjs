// Copies the static files tsc doesn't handle into dist/. Runs after tsc.
//   - every non-.ts file under src/ goes to dist/ at the same relative path
//   - everything under public/ goes to the dist/ root
// Dotfiles and dot-directories (.gitkeep, .DS_Store) are skipped.
// Plain Node 18+, no dependencies.

import { copyFile, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");

/**
 * Recursively copies files from srcDir into destDir, skipping dotfiles and any
 * file whose name matches `skip`. Returns the number of files copied.
 */
async function copyTree(srcDir, destDir, skip) {
  let count = 0;
  for (const entry of await readdir(srcDir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const from = path.join(srcDir, entry.name);
    const to = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      count += await copyTree(from, to, skip);
    } else if (entry.isFile() && !skip(entry.name)) {
      await mkdir(destDir, { recursive: true });
      await copyFile(from, to);
      count += 1;
    }
  }
  return count;
}

const fromSrc = await copyTree(path.join(root, "src"), distDir, (name) => name.endsWith(".ts"));
const fromPublic = await copyTree(path.join(root, "public"), distDir, () => false);

console.log(`copy-static: ${fromSrc} file(s) from src/, ${fromPublic} from public/ -> dist/`);
