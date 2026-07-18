"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop",
    title: "Green Puspa",
    subtitle: "Kampung Sehat Terpadu Green Puspa RW 06 Utan Kayu Selatan",
    description: "Mewujudkan lingkungan hijau, sehat, dan produktif melalui semangat gotong royong dan inovasi pertanian perkotaan.",
    primaryLink: "/about",
    primaryLabel: "Tentang Kami",
    secondaryLink: "#programs",
    secondaryLabel: "Jelajahi Program"
  },
  {
    image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2000&auto=format&fit=crop",
    title: "Inovasi Hidroponik",
    subtitle: "Kemandirian Pangan di Lahan Sempit",
    description: "Lebih dari 1500 lubang tanam hidroponik produktif dikelola langsung secara kolektif oleh warga setempat.",
    primaryLink: "#programs",
    primaryLabel: "Program Kami",
    secondaryLink: "/gallery",
    secondaryLabel: "Lihat Galeri"
  },
  {
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=2000&auto=format&fit=crop",
    title: "Sinergi Akuaponik",
    subtitle: "Budidaya Terintegrasi Alami",
    description: "Ekosistem sirkular tertutup yang menggabungkan kolam ikan dengan tanaman sayuran bernutrisi.",
    primaryLink: "#programs",
    primaryLabel: "Pelajari Sistem",
    secondaryLink: "/contact",
    secondaryLabel: "Hubungi Kami"
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-gray-950 flex items-center justify-center">
      {/* Slideshow Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/45 z-10" />
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              {slides[current].title}
              <span className="block text-xl md:text-2xl mt-3 font-normal text-green-300">
                {slides[current].subtitle}
              </span>
            </h1>
            <p className="text-sm md:text-lg mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed font-light">
              {slides[current].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                href={slides[current].primaryLink}
                className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-white min-w-[160px]")}
              >
                {slides[current].primaryLabel}
              </Link>
              <Link
                href={slides[current].secondaryLink}
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "bg-white/10 text-white border-white hover:bg-white hover:text-black min-w-[160px]")}
              >
                {slides[current].secondaryLabel}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left & Right Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/15 hover:bg-black/40 text-white/70 hover:text-white transition-colors outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/15 hover:bg-black/40 text-white/70 hover:text-white transition-colors outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300 outline-none",
              current === index ? "w-6 bg-primary" : "w-2.5 bg-white/40 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
