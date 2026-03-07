import type { NextConfig } from "next";
import path from "path";

// __dirname is available when Next.js compiles next.config.ts to CommonJS
const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  webpack: (config) => {
    config.context = projectRoot;
    return config;
  },
};

export default nextConfig;
