import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // enables next export automatically
  distDir: "dist",        // sets build output folder
};

export default nextConfig;
