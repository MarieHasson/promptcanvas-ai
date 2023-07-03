import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@shared/tailwind-config", "@shared/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "promptcanvas-ai.vercel.app",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
}

export default withContentlayer(nextConfig)
