/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
    return [
      {
        source: '/36203/01/smt-endmill-price-in-johor', 
        
        destination: '/', 
        
        // This makes it a 301 Permanent Redirect (CRITICAL for SEO)
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
