import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tomaschacana.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;