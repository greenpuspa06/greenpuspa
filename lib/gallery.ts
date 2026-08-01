import fs from "fs";
import path from "path";

const IMAGES_DIR = path.join(process.cwd(), "Images");

// Extensions that browsers can display natively (HEIC excluded)
const ALLOWED_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

export interface FolderData {
  /** Original folder name on disk */
  name: string;
  /** URL-safe slug (encodeURIComponent of name) */
  slug: string;
  /** Public URLs for all displayable images */
  images: string[];
}

export interface GalleryManifest {
  pelatihan: FolderData[];
  kunjungan: FolderData[];
  lainnya: FolderData[];
}

function toSlug(name: string): string {
  return encodeURIComponent(name);
}

function getImages(folderPath: string, folderName: string): string[] {
  try {
    return fs
      .readdirSync(folderPath)
      .filter((f) => ALLOWED_EXTS.has(path.extname(f).toLowerCase()))
      .sort()
      .map(
        (f) =>
          `/gallery-images/${toSlug(folderName)}/${encodeURIComponent(f)}`
      );
  } catch {
    return [];
  }
}

export function getGalleryManifest(): GalleryManifest {
  const pelatihan: FolderData[] = [];
  const kunjungan: FolderData[] = [];
  const lainnya: FolderData[] = [];

  if (!fs.existsSync(IMAGES_DIR)) return { pelatihan, kunjungan, lainnya };

  const entries = fs.readdirSync(IMAGES_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const name = entry.name;
    const images = getImages(path.join(IMAGES_DIR, name), name);
    if (images.length === 0) continue;

    const data: FolderData = { name, slug: toSlug(name), images };
    const lower = name.toLowerCase();

    if (lower.startsWith("pelatihan")) {
      pelatihan.push(data);
    } else if (lower.startsWith("kunjungan")) {
      kunjungan.push(data);
    } else {
      lainnya.push(data);
    }
  }

  const sort = (a: FolderData, b: FolderData) => a.name.localeCompare(b.name);
  pelatihan.sort(sort);
  kunjungan.sort(sort);
  lainnya.sort(sort);

  return { pelatihan, kunjungan, lainnya };
}
