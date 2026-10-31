import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    resolveExtensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".css"],
  },
};

export default nextConfig;
