import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/GreenPuspa",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
