/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // 👈 required for GitHub Pages
  images: {
    unoptimized: true,        // 👈 GitHub Pages can't optimize images
  },
  basePath: "/my-portfolio.github.io",   // 👈 repo name
  assetPrefix: "/my-portfolio.github.io/",
};

export default nextConfig;
