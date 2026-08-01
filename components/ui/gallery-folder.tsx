"use client";

import { useState, useCallback, useEffect } from "react";
import {
  ChevronDown,
  FolderOpen,
  Folder,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FolderData {
  name: string;
  slug: string;
  images: string[];
}

// ─── GalleryFolder ────────────────────────────────────────────────────────────

interface GalleryFolderProps {
  folder: FolderData;
  defaultOpen?: boolean;
}

export function GalleryFolder({ folder, defaultOpen = false }: GalleryFolderProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setLightbox((i) => (i !== null ? Math.max(0, i - 1) : null));
      if (e.key === "ArrowRight")
        setLightbox((i) => (i !== null ? Math.min(folder.images.length - 1, i + 1) : null));
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, folder.images.length]);

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const noImages = folder.images.length === 0;

  return (
    <>
      {/* ── Folder card ─────────────────────────────────────────────────────── */}
      <div
        className={cn(
          "rounded-2xl border overflow-hidden bg-card transition-shadow",
          open ? "shadow-md border-primary/20" : "shadow-sm border-border hover:shadow-md"
        )}
      >
        {/* Header */}
        <button
          onClick={() => !noImages && setOpen((v) => !v)}
          disabled={noImages}
          className={cn(
            "w-full flex items-center gap-3 px-5 py-4 transition-colors text-left",
            noImages
              ? "opacity-50 cursor-not-allowed"
              : open
              ? "bg-primary/5 hover:bg-primary/8"
              : "hover:bg-muted/50"
          )}
          aria-expanded={open}
        >
          {/* Icon */}
          <div
            className={cn(
              "flex-shrink-0 rounded-lg p-2 transition-colors",
              open ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
            )}
          >
            {open ? <FolderOpen className="h-4 w-4" /> : <Folder className="h-4 w-4" />}
          </div>

          {/* Name */}
          <span
            className={cn(
              "flex-1 font-semibold text-sm md:text-base leading-snug",
              open && "text-primary"
            )}
          >
            {folder.name}
          </span>

          {/* Count badge */}
          <span
            className={cn(
              "flex items-center gap-1 text-xs px-2.5 py-1 rounded-full flex-shrink-0 font-medium",
              noImages
                ? "bg-muted text-muted-foreground"
                : open
                ? "bg-primary/10 text-primary"
                : "bg-muted text-muted-foreground"
            )}
          >
            <Images className="h-3 w-3" />
            {noImages ? "Tidak ada foto" : `${folder.images.length} foto`}
          </span>

          {/* Chevron */}
          {!noImages && (
            <ChevronDown
              className={cn(
                "h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200",
                open && "rotate-180"
              )}
            />
          )}
        </button>

        {/* ── Expanded grid ────────────────────────────────────────────────── */}
        {open && !noImages && (
          <div className="border-t border-border/60 p-5">
            {/* Cover strip: first 4 images as a preview row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {folder.images.map((src, idx) => (
                <LazyImage
                  key={src}
                  src={src}
                  alt={`${folder.name} – foto ${idx + 1}`}
                  index={idx}
                  onClick={() => setLightbox(idx)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Lightbox ────────────────────────────────────────────────────────── */}
      {lightbox !== null && (
        <Lightbox
          images={folder.images}
          folderName={folder.name}
          current={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((i) => (i !== null ? Math.max(0, i - 1) : null))}
          onNext={() =>
            setLightbox((i) => (i !== null ? Math.min(folder.images.length - 1, i + 1) : null))
          }
          onSelect={setLightbox}
        />
      )}
    </>
  );
}

// ─── Lightbox ────────────────────────────────────────────────────────────────

interface LightboxProps {
  images: string[];
  folderName: string;
  current: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (i: number) => void;
}

function Lightbox({ images, folderName, current, onClose, onPrev, onNext, onSelect }: LightboxProps) {
  const hasPrev = current > 0;
  const hasNext = current < images.length - 1;

  // Thumbnail strip scroll: keep active thumb visible
  const thumbRef = useCallback((node: HTMLButtonElement | null) => {
    node?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b border-white/10 flex-shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p className="text-white font-semibold text-sm leading-tight">{folderName}</p>
          <p className="text-white/50 text-xs mt-0.5">
            {current + 1} / {images.length}
          </p>
        </div>
        <button
          className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
          onClick={onClose}
          aria-label="Tutup"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Main image area */}
      <div className="flex-1 flex items-center justify-center relative min-h-0 px-14" onClick={onClose}>
        {/* Prev */}
        {hasPrev && (
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2.5 rounded-xl hover:bg-white/10 transition-all z-10"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={images[current]}
          src={images[current]}
          alt={`${folderName} – foto ${current + 1}`}
          className="max-h-full max-w-full object-contain rounded-xl shadow-2xl select-none"
          onClick={(e) => e.stopPropagation()}
          draggable={false}
        />

        {/* Next */}
        {hasNext && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2.5 rounded-xl hover:bg-white/10 transition-all z-10"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Berikutnya"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      <div
        className="flex-shrink-0 border-t border-white/10 bg-black/60 px-4 py-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2 overflow-x-auto scrollbar-none justify-start max-w-full">
          {images.map((src, idx) => (
            <button
              key={src}
              ref={idx === current ? thumbRef : undefined}
              onClick={() => onSelect(idx)}
              className={cn(
                "relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all",
                idx === current
                  ? "border-primary scale-110 shadow-lg shadow-primary/30"
                  : "border-transparent opacity-50 hover:opacity-80"
              )}
              aria-label={`Foto ${idx + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── LazyImage ───────────────────────────────────────────────────────────────

interface LazyImageProps {
  src: string;
  alt: string;
  index: number;
  onClick: () => void;
}

function LazyImage({ src, alt, index, onClick }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  const setRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { rootMargin: "300px" }
    );
    io.observe(node);
  }, []);

  return (
    <div
      ref={setRef}
      onClick={onClick}
      className="group relative aspect-square rounded-xl overflow-hidden bg-muted cursor-zoom-in"
      style={{ animationDelay: `${Math.min(index * 30, 300)}ms` }}
    >
      {/* Skeleton shimmer */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/60 to-muted animate-pulse" />
      )}

      {visible && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 group-hover:scale-110",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2.5">
          <ZoomIn className="h-5 w-5 text-white" />
        </div>
      </div>
    </div>
  );
}
