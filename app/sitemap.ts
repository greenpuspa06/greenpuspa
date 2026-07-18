import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/markdown";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://greenpuspa.org";

  const routes = [
    "",
    "/about",
    "/smart-farming",
    "/gallery",
    "/news",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...routes, ...posts];
}
