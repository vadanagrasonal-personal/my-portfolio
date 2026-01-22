/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",    // 👈 REQUIRED for GitHub Pages

  images: {
    unoptimized: true,
  },

  basePath: "/my-portfolio.github.io",
  assetPrefix: "/my-portfolio.github.io/",
};

export default nextConfig;
