"use client";

import { useState } from "react";
import { GalleryFolder } from "@/components/ui/gallery-folder";
import { cn } from "@/lib/utils";
import { GraduationCap, Eye, Grid3X3 } from "lucide-react";

interface FolderData {
  name: string;
  slug: string;
  images: string[];
}

interface GalleryManifest {
  pelatihan: FolderData[];
  kunjungan: FolderData[];
  lainnya: FolderData[];
}

const TABS = [
  {
    key: "pelatihan" as const,
    label: "Pelatihan",
    icon: GraduationCap,
    description: "Dokumentasi kegiatan pelatihan dan edukasi komunitas.",
  },
  {
    key: "kunjungan" as const,
    label: "Kunjungan",
    icon: Eye,
    description: "Kunjungan tamu, studi banding, dan mitra komunitas.",
  },
  {
    key: "lainnya" as const,
    label: "Lainnya",
    icon: Grid3X3,
    description: "Kegiatan dan dokumentasi lain Green Puspa.",
  },
];

export function GalleryTabs({ manifest }: { manifest: GalleryManifest }) {
  const [activeTab, setActiveTab] = useState<"pelatihan" | "kunjungan" | "lainnya">("pelatihan");

  const currentTab = TABS.find((t) => t.key === activeTab)!;
  const folders = manifest[activeTab];
  const totalImages = folders.reduce((s, f) => s + f.images.length, 0);

  return (
    <div>
      {/* Tab pills */}
      <div className="flex flex-wrap gap-3 mb-8">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          const count = manifest[tab.key].length;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all border",
                isActive
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
              <span
                className={cn(
                  "text-xs px-1.5 py-0.5 rounded-full font-medium",
                  isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active tab header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-heading text-xl font-bold text-foreground">{currentTab.label}</h2>
          <p className="text-sm text-muted-foreground mt-0.5">{currentTab.description}</p>
        </div>
        <div className="text-sm text-muted-foreground bg-card border border-border rounded-lg px-3 py-1.5 hidden sm:block">
          {folders.length} album · {totalImages} foto
        </div>
      </div>

      {/* Folder grid */}
      {folders.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <Grid3X3 className="h-12 w-12 mx-auto mb-4 opacity-30" />
          <p>Tidak ada album ditemukan.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {folders.map((folder, index) => (
            <GalleryFolder
              key={folder.slug}
              folder={folder}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}
