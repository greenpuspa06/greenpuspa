import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center text-center px-4">
      <div className="bg-primary/10 p-6 rounded-full mb-8">
        <Leaf className="h-16 w-16 text-primary" />
      </div>
      <h1 className="font-heading text-6xl font-bold text-foreground mb-4">404</h1>
      <h2 className="font-heading text-2xl font-semibold mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Maaf, halaman yang Anda cari mungkin telah dipindahkan atau tidak lagi tersedia. Mari kembali menjelajahi kebun kami.
      </p>
      <Link href="/" className={buttonVariants({ size: "lg" })}>Kembali ke Beranda</Link>
    </div>
  );
}
