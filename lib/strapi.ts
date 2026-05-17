/**
 * Strapi base URL for server-side and build-time use.
 * Set STRAPI_URL in Vercel (Project → Settings → Environment Variables), e.g. http://your-vps-ip:1337
 * Do not rely on mixed HTTP calls from the browser on HTTPS production sites — use /api/strapi/* routes instead.
 */
export function getStrapiServerUrl(): string {
  const raw =
    process.env.STRAPI_URL?.trim() ||
    process.env.NEXT_PUBLIC_STRAPI_URL?.trim() ||
    "http://144.24.219.37:1337";
  return raw.replace(/\/$/, "");
}
