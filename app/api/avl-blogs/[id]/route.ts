import { NextResponse } from "next/server";
import { fetchAvlBlogDetail } from "@/lib/avlBlogsServer";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const postId = Number(id);

  if (!Number.isFinite(postId)) {
    return NextResponse.json({ error: "Invalid post id" }, { status: 400 });
  }

  try {
    const post = await fetchAvlBlogDetail(postId);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ data: post });
  } catch (e) {
    console.error("[avl-blogs] detail fetch failed:", e);
    return NextResponse.json({ error: "Could not load blog post" }, { status: 502 });
  }
}
