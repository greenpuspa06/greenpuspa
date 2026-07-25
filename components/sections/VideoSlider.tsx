"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const videos = [
  {
    src: "https://www.youtube.com/embed/-OsJA50R7ds?rel=0",
    title: "Green Puspa – Video 1",
  },
  {
    src: "https://www.youtube.com/embed/qqPvfOIzo0U?rel=0&start=750",
    title: "Green Puspa – Video 2",
  },
  {
    src: "https://www.youtube.com/embed/FAVUEcJsnxs?rel=0",
    title: "Green Puspa – Video 3",
  },
  {
    src: "https://www.youtube.com/embed/r10dwo-qKtM?rel=0",
    title: "Green Puspa – Video 4",
  },
  {
    src: "https://www.youtube.com/embed/pqHIp6VR81U?rel=0&start=1",
    title: "Green Puspa – Video 5",
  },
  {
    src: "https://www.youtube.com/embed/VEz6QWPSYTY?rel=0&start=105",
    title: "Green Puspa – Video 6",
  },
];

export function VideoSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + videos.length) % videos.length);
  const next = () => setCurrent((c) => (c + 1) % videos.length);

  return (
    <div className="w-full">
      {/* Main featured video */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black mb-6">
        <iframe
          key={videos[current].src}
          className="absolute inset-0 w-full h-full"
          src={videos[current].src}
          title={videos[current].title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Navigation row */}
      <div className="flex items-center justify-between gap-4">
        {/* Prev button */}
        <button
          onClick={prev}
          aria-label="Video sebelumnya"
          className="flex-shrink-0 rounded-full border border-border bg-card p-2 shadow hover:bg-primary hover:text-white hover:border-primary transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Thumbnail strip */}
        <div className="flex gap-3 overflow-x-auto scrollbar-none flex-1 justify-center">
          {videos.map((video, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Tonton ${video.title}`}
              className={cn(
                "relative flex-shrink-0 w-28 aspect-video rounded-lg overflow-hidden border-2 transition-all",
                current === index
                  ? "border-primary shadow-md scale-105"
                  : "border-transparent opacity-60 hover:opacity-90"
              )}
            >
              {/* YouTube thumbnail */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${extractVideoId(video.src)}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              {current === index && (
                <span className="absolute inset-0 flex items-center justify-center bg-primary/20">
                  <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white ml-0.5" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          aria-label="Video berikutnya"
          className="flex-shrink-0 rounded-full border border-border bg-card p-2 shadow hover:bg-primary hover:text-white hover:border-primary transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Video ${index + 1}`}
            className={cn(
              "rounded-full transition-all",
              current === index
                ? "bg-primary w-5 h-2"
                : "bg-border w-2 h-2 hover:bg-primary/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}

/** Extract YouTube video ID from an embed URL */
function extractVideoId(src: string): string {
  const match = src.match(/embed\/([^?]+)/);
  return match ? match[1] : "";
}
