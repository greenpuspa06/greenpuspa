import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/markdown";
import ReactMarkdown from "react-markdown";
import { Calendar, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) {
    return {
      title: "Not Found",
    };
  }
  return {
    title: `${post.title} | Green Puspa`,
    description: post.content.substring(0, 150),
  };
}

export default async function PostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto mt-20">
          <div className="flex items-center justify-center gap-4 text-sm font-medium mb-6">
            <span className="bg-primary px-3 py-1 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/news" className={buttonVariants({ variant: "ghost", className: "mb-8 -ml-4" })}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Kembali ke Berita
          </Link>
          
          <article className="prose prose-lg max-w-none prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary/80">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </div>
      </section>
    </div>
  );
}
