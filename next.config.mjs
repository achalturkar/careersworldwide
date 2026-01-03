/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // ✅ STATIC MODE
  images: {
    unoptimized: true,     // ✅ REQUIRED for static
  },

  async redirects() {
    return [
      {
        source: "/36203/01/smt-endmill-price-in-johor",
        destination: "/",
        permanent: true,    // 301 SEO safe
      },
    ];
  },
};

export default nextConfig;
