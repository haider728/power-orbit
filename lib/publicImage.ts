/** Build a public `/images/...` URL; encodes spaces for reliable loading. */
export function publicImagePath(filename: string): string {
  return `/images/${filename.split("/").map(encodeURIComponent).join("/")}`;
}
