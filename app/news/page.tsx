import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/markdown";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export const metadata = {
  title: "Berita & Kegiatan | Green Puspa",
  description: "Kabar terbaru dan dokumentasi kegiatan dari komunitas Green Puspa.",
};

export default function NewsPage() {
  const posts = getAllPosts();
  if (!posts || posts.length === 0) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Belum ada berita.</h1>
      </div>
    );
  }

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Berita & Kegiatan</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Ikuti kabar terbaru dan inspirasi kegiatan komunitas Green Puspa.
        </p>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Featured Post */}
          <Link href={`/news/${featuredPost.slug}`} className="group block mb-16">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg mb-6">
              <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">{featuredPost.category}</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {featuredPost.date}</span>
            </div>
            <h2 className="font-heading text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{featuredPost.title}</h2>
            <p className="text-lg text-muted-foreground line-clamp-2">{featuredPost.content.substring(0, 150)}...</p>
          </Link>

          {/* Grid Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map(post => (
              <Link key={post.slug} href={`/news/${post.slug}`} className="group block">
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-64 w-full">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{post.category}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
