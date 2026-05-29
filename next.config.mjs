// Static export configuration — `next build` emits a fully static site to ./out
// that can be hosted on GitHub Pages (or any static host).
//
// For a GitHub Pages PROJECT site served from a sub-path
// (https://<user>.github.io/<repo>/), set NEXT_PUBLIC_BASE_PATH=/<repo> at build
// time. For a user/root site (https://<user>.github.io/) or any custom domain at
// the root, leave it unset. The bundled deploy workflow sets it automatically.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
