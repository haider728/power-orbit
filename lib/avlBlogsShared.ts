import type { Locale } from "@/lib/i18n/config";

export const AVL_WP_API = "https://avl-ksa.com/wp-json/wp/v2";
export const LIST_FIELDS =
  "id,slug,link,date,title,excerpt,yoast_head_json";
export const DETAIL_FIELDS =
  "id,slug,link,date,title,excerpt,content,yoast_head_json";

export type AvlBlogListItem = {
  id: number;
  Title: string;
  Slug: string;
  content: string;
  link: string;
  image?: { url: string };
  date: string;
};

export type AvlBlogDetail = AvlBlogListItem & {
  fullContent: string;
};

export type WpPost = {
  id: number;
  slug: string;
  link: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content?: { rendered: string };
  yoast_head_json?: {
    og_image?: Array<{ url?: string }>;
  };
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function isEnglishPost(link: string): boolean {
  try {
    const path = new URL(link).pathname;
    return path.includes("/en/");
  } catch {
    return link.includes("/en/");
  }
}

export function filterByLocale(posts: WpPost[], locale: Locale): WpPost[] {
  if (locale === "ar") {
    return posts.filter((p) => !isEnglishPost(p.link));
  }
  return posts.filter((p) => isEnglishPost(p.link));
}

function postImageUrl(post: WpPost): string | undefined {
  return post.yoast_head_json?.og_image?.[0]?.url;
}

export function mapListItem(post: WpPost): AvlBlogListItem {
  const imageUrl = postImageUrl(post);
  return {
    id: post.id,
    Title: stripHtml(post.title.rendered),
    Slug: post.slug,
    content: stripHtml(post.excerpt.rendered),
    link: post.link,
    date: post.date,
    ...(imageUrl ? { image: { url: imageUrl } } : {}),
  };
}

export function mapDetail(post: WpPost): AvlBlogDetail {
  return {
    ...mapListItem(post),
    fullContent: post.content?.rendered ?? "",
  };
}
