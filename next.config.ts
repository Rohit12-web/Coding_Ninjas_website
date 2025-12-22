import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb",
    },
    // Disable filesystem cache for builds to avoid Windows symlink permission issues
    turbopackFileSystemCacheForBuild: false,
  },
  // Prevent Turbopack from creating symlinks for external packages on Windows
  serverExternalPackages: ["mongodb", "mongoose"],
  typedRoutes: true,
};

export default nextConfig;
