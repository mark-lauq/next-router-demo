import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "standalone",
  basePath: isProd ? "/next-router-demo" : undefined,
  assetPrefix: isProd ? "/next-router-demo" : "",
  trailingSlash: true,
};

export default nextConfig;
