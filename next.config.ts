import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://localhost:3000"],
  output: isProd ? "export" : undefined,
  images: {
    unoptimized: isProd,
  },
};

export default nextConfig;
