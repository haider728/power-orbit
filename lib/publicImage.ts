/** Build a public `/images/...` URL; encodes spaces for reliable loading. */
export function publicImagePath(filename: string): string {
  return `/images/${filename.split("/").map(encodeURIComponent).join("/")}`;
}

/** Remote URLs must bypass Next.js image optimization (AVL SSL chain fails in Node). */
export function isExternalImageSrc(src: string): boolean {
  return /^https?:\/\//i.test(src);
}
