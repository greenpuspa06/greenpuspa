import { getGalleryManifest } from "@/lib/gallery";
import { GalleryTabs } from "@/components/sections/GalleryTabs";
import { Images } from "lucide-react";

export const metadata = {
  title: "Galeri – Green Puspa",
  description: "Dokumentasi visual kegiatan, pelatihan, dan kunjungan di Green Puspa RW 06.",
};

export default function GalleryPage() {
  const manifest = getGalleryManifest();
  const totalImages =
    [...manifest.pelatihan, ...manifest.kunjungan, ...manifest.lainnya].reduce(
      (sum, f) => sum + f.images.length,
      0
    );
  const totalFolders =
    manifest.pelatihan.length + manifest.kunjungan.length + manifest.lainnya.length;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 px-4 text-center">
        {/* decorative blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <Images className="h-3.5 w-3.5" />
            Dokumentasi Kegiatan
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            Galeri Green Puspa
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Rekaman visual perjalanan gotong royong, pelatihan, dan kunjungan komunitas RW 06
            Utan Kayu Selatan.
          </p>

          {/* Stats */}
          <div className="inline-flex gap-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 text-white">
            <div className="text-center">
              <div className="font-heading text-2xl font-bold">{totalImages}+</div>
              <div className="text-xs text-white/70 mt-0.5">Foto</div>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <div className="font-heading text-2xl font-bold">{totalFolders}</div>
              <div className="text-xs text-white/70 mt-0.5">Album</div>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <div className="font-heading text-2xl font-bold">3</div>
              <div className="text-xs text-white/70 mt-0.5">Kategori</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <GalleryTabs manifest={manifest} />
        </div>
      </section>
    </div>
  );
}
