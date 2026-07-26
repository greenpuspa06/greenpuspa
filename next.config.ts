import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    // Static export only for production builds (gh-pages deploy).
    // In dev mode this spawns excessive worker processes and wastes RAM.
    ...(isDev ? {} : { output: "export" }),
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
    experimental: {
      // Optimizes memory usage in webpack compilation.
      webpackMemoryOptimizations: true,
      // Target memory limit for Turbopack in bytes (4GB).
      turbopackMemoryLimit: 4 * 1024 * 1024 * 1024,
      // Avoid compiling all pages on start, only compile on-demand.
      preloadEntriesOnStart: false,
      // Optimize package imports to reduce memory footprint.
      optimizePackageImports: ["lucide-react", "framer-motion", "@base-ui/react"],
    },
  };
};
