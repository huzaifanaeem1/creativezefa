import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ✅ Add 80 to the array
    qualities: [72, 75, 80, 90],
    
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },
};

export default nextConfig;