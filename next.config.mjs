/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true, // Keep this if you had it before
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blog.logomaster.ai",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
