/**
 * Copies Images/ → public/gallery-images/ before build.
 * - Browser-native formats (jpg/jpeg/png/webp/gif): hard-linked or copied as-is.
 * - HEIC files: converted to JPEG using sharp (already a project dependency).
 *   If a same-stem JPG already exists in the source folder, the HEIC is skipped
 *   to avoid duplicates (e.g. Persari folder has both (1).HEIC and (1).JPG).
 * - Uses hard links to avoid duplicating disk space where the FS supports it.
 */

const fs = require("fs");
const path = require("path");

const NATIVE = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const SRC = path.join(__dirname, "..", "Images");
const DEST = path.join(__dirname, "..", "public", "gallery-images");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function linkOrCopy(src, dest) {
  if (fs.existsSync(dest)) return false;
  try {
    fs.linkSync(src, dest);
  } catch {
    fs.copyFileSync(src, dest);
  }
  return true;
}

async function convertHeic(src, dest) {
  if (fs.existsSync(dest)) return false;
  const sharp = require("sharp");
  try {
    await sharp(src).jpeg({ quality: 88 }).toFile(dest);
    return true;
  } catch {
    // HEIC/HEVC not supported by this sharp build — skip silently
    return false;
  }
}

async function main() {
  if (!fs.existsSync(SRC)) {
    console.log("⚠  Images/ folder not found, skipping copy.");
    return;
  }

  ensureDir(DEST);

  const folders = fs
    .readdirSync(SRC, { withFileTypes: true })
    .filter((e) => e.isDirectory());

  let copied = 0;
  let converted = 0;
  let skipped = 0;

  for (const folder of folders) {
    const srcFolder = path.join(SRC, folder.name);
    const destFolder = path.join(DEST, folder.name);
    ensureDir(destFolder);

    const files = fs.readdirSync(srcFolder);

    // Build a set of stems that already have a native counterpart in source
    // e.g. "(1).JPG" exists → skip "(1).HEIC"
    const nativeStems = new Set(
      files
        .filter((f) => NATIVE.has(path.extname(f).toLowerCase()))
        .map((f) => path.basename(f, path.extname(f)).toLowerCase())
    );

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      const stem = path.basename(file, path.extname(file)).toLowerCase();

      if (NATIVE.has(ext)) {
        const ok = linkOrCopy(
          path.join(srcFolder, file),
          path.join(destFolder, file)
        );
        ok ? copied++ : skipped++;
        continue;
      }

      if (ext === ".heic") {
        // Skip if a JPG/JPEG with the same stem already exists in source
        if (nativeStems.has(stem)) {
          skipped++;
          continue;
        }
        const destFile = path.join(destFolder, stem + ".jpg");
        const ok = await convertHeic(path.join(srcFolder, file), destFile);
        ok ? converted++ : skipped++;
        continue;
      }

      // Any other format: skip silently
    }
  }

  console.log(
    `✓  Gallery images ready: ${copied} copied, ${converted} HEIC→JPG converted, ${skipped} skipped`
  );
}

main().catch((err) => {
  console.error("✗  copy-images failed:", err.message);
  process.exit(1);
});
