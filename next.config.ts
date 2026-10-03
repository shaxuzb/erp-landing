import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Asosiy til — o'zbekcha. Tilsiz manzil shu tilga yo'naltiriladi.
      { source: "/", destination: "/uz", permanent: false },
    ];
  },
};

export default nextConfig;
