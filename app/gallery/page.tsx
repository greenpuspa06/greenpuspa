"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const categories = ["Semua", "Hidroponik", "Akuaponik", "Kegiatan Komunitas", "Panen", "Kunjungan"];

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=800&auto=format&fit=crop", category: "Hidroponik", alt: "Instalasi Hidroponik" },
  { id: 2, src: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=800&auto=format&fit=crop", category: "Akuaponik", alt: "Kolam Akuaponik" },
  { id: 3, src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop", category: "Kegiatan Komunitas", alt: "Kerja Bakti" },
  { id: 4, src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800&auto=format&fit=crop", category: "Panen", alt: "Panen Sayur" },
  { id: 5, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", category: "Hidroponik", alt: "Bibit Sayuran" },
  { id: 6, src: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=800&auto=format&fit=crop", category: "Kunjungan", alt: "Kunjungan Studi" },
  { id: 7, src: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop", category: "Kegiatan Komunitas", alt: "Penghijauan Gang" },
  { id: 8, src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop", category: "Kegiatan Komunitas", alt: "Pelatihan Warga" },
  { id: 9, src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop", category: "Panen", alt: "Hasil Panen" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("Semua");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === "Semua" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-primary text-white py-20 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Galeri Kegiatan</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Dokumentasi visual semangat gotong royong dan kebersamaan di Green Puspa.
        </p>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button 
                key={cat} 
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Masonry Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((img) => (
              <div 
                key={img.id} 
                className="relative group rounded-xl overflow-hidden cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImage(img.src)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-1 bg-transparent border-none shadow-none">
          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <Image 
                src={selectedImage} 
                alt="Enlarged view" 
                fill 
                className="object-contain" 
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
