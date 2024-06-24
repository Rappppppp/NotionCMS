/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**", // Allows all domain with HTTPS protocol
          },
        ],
      },
};

export default nextConfig;
