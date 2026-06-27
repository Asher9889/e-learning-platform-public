import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.mssplonline.in",
      },
    ],
  },
};

export default nextConfig;
