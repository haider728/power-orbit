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

export async function fetchAvlBlogListClient(
  locale: Locale,
  perPage = 50,
): Promise<AvlBlogListItem[]> {
  const url = `${AVL_WP_API}/posts?per_page=${perPage}&orderby=date&order=desc&_fields=${LIST_FIELDS}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`AVL WordPress API ${res.status}`);
  }

  const posts = (await res.json()) as WpPost[];
  return filterByLocale(posts, locale).map(mapListItem);
}

export async function fetchAvlBlogDetailClient(id: number): Promise<AvlBlogDetail | null> {
  const res = await fetch(`${AVL_WP_API}/posts/${id}?_fields=${DETAIL_FIELDS}`);

  if (!res.ok) return null;

  const post = (await res.json()) as WpPost;
  return mapDetail(post);
}
