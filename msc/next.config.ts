import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",         
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true       // Optional: useful for static hosting like GitHub Pages
};

export default nextConfig;
