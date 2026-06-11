import https from "node:https";
import type { Locale } from "@/lib/i18n/config";
import {
  AVL_WP_API,
  DETAIL_FIELDS,
  LIST_FIELDS,
  filterByLocale,
  mapDetail,
  mapListItem,
  type AvlBlogDetail,
  type AvlBlogListItem,
  type WpPost,
} from "@/lib/avlBlogsShared";

export type { AvlBlogDetail, AvlBlogListItem } from "@/lib/avlBlogsShared";

function fetchInsecureHttps(url: string): Promise<Response> {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = https.request(
      {
        hostname: parsed.hostname,
        port: parsed.port || 443,
        path: `${parsed.pathname}${parsed.search}`,
        method: "GET",
        headers: { "User-Agent": "PowerOrbit/1.0" },
        rejectUnauthorized: false,
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          const body = Buffer.concat(chunks).toString("utf8");
          resolve(
            new Response(body, {
              status: res.statusCode ?? 500,
              headers: res.headers as HeadersInit,
            }),
          );
        });
      },
    );
    req.on("error", reject);
    req.end();
  });
}

async function avlFetch(url: string): Promise<Response> {
  const headers = { "User-Agent": "PowerOrbit/1.0" };

  try {
    const res = await fetch(url, {
      headers,
      next: { revalidate: 300 },
    });
    if (res.ok) return res;
  } catch {
    /* use https fallback */
  }

  return fetchInsecureHttps(url);
}

async function fetchWpPosts(perPage: number): Promise<WpPost[]> {
  const url = `${AVL_WP_API}/posts?per_page=${perPage}&orderby=date&order=desc&_fields=${LIST_FIELDS}`;
  const res = await avlFetch(url);

  if (!res.ok) {
    throw new Error(`AVL WordPress API ${res.status}`);
  }

  return (await res.json()) as WpPost[];
}

export async function fetchAvlBlogList(
  locale: Locale,
  perPage = 50,
): Promise<AvlBlogListItem[]> {
  const posts = await fetchWpPosts(perPage);
  return filterByLocale(posts, locale).map(mapListItem);
}

export async function fetchAvlBlogDetail(id: number): Promise<AvlBlogDetail | null> {
  const res = await avlFetch(`${AVL_WP_API}/posts/${id}?_fields=${DETAIL_FIELDS}`);

  if (!res.ok) return null;

  const post = (await res.json()) as WpPost;
  return mapDetail(post);
}
