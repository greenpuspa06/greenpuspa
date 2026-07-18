import { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Green Puspa",
    short_name: "Green Puspa",
    description: "Kampung Sehat Terpadu RW 06 Utan Kayu Selatan",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FFF8",
    theme_color: "#2E7D32",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
