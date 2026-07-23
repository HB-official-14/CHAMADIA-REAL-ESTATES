import fs from "fs";
import path from "path";

const PROJECTS_DIR = path.join(process.cwd(), "public", "projects");

interface ImageFile {
  name: string;
  url: string;
}

let cachedImages: ImageFile[] | null = null;

function isImageByMagicBytes(filePath: string): boolean {
  try {
    const buf = Buffer.alloc(8);
    const fd = fs.openSync(filePath, "r");
    fs.readSync(fd, buf, 0, 8, 0);
    fs.closeSync(fd);
    if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return true;
    if (buf[0] === 0x89 && buf[1] === 0x50) return true;
    if (buf[0] === 0x52 && buf[1] === 0x49) return true;
  } catch {}
  return false;
}

const VALID_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function getImageFiles(): ImageFile[] {
  if (cachedImages) return cachedImages;

  const entries = fs.readdirSync(PROJECTS_DIR, { withFileTypes: true });

  cachedImages = entries
    .filter((entry) => {
      if (!entry.isFile()) return false;
      const ext = path.extname(entry.name).toLowerCase();
      if (VALID_EXTS.has(ext)) return true;
      return isImageByMagicBytes(path.join(PROJECTS_DIR, entry.name));
    })
    .map((entry) => ({
      name: path.parse(entry.name).name,
      url: `/projects/${encodeURIComponent(entry.name)}`,
    }));

  return cachedImages;
}

function normalize(s: string): string {
  return s.toLowerCase().replace(/[\s_-]+/g, " ").trim();
}

function imagesMatch(projectName: string, imageName: string): boolean {
  const a = normalize(projectName);
  const b = normalize(imageName);
  if (a === b) return true;
  if (a.length > 2 && b.includes(a)) return true;
  if (b.length > 2 && a.includes(b)) return true;
  const minLen = Math.min(a.length, b.length);
  let prefixLen = 0;
  while (prefixLen < minLen && a[prefixLen] === b[prefixLen]) prefixLen++;
  if (prefixLen >= 8 && prefixLen >= minLen * 0.7) return true;
  return false;
}

export function getProjectImages(projectName: string): string[] {
  if (projectName === "Centric Elite") {
    return getProjectImages("Centric Tower");
  }
  const images = getImageFiles();
  return images
    .filter((img) => imagesMatch(projectName, img.name))
    .map((img) => img.url);
}

export function getProjectCoverImage(projectName: string): string | null {
  const images = getProjectImages(projectName);
  return images.length > 0 ? images[0] : null;
}
