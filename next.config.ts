import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático: GitHub Pages solo sirve archivos, no ejecuta Node.
  output: "export",
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  // El GDS se enlaza como paquete local (file:) — transpilarlo garantiza
  // compatibilidad total con el bundler de Next aunque cambie su build.
  transpilePackages: ["@gallardo/design-system"],
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
};

export default nextConfig;
