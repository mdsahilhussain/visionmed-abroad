import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/mbbs-in-:country",
        destination: "/mbbs/:country",
      },
      {
        source: "/mbbs-in-:country/:university",
        destination: "/mbbs/:country/:university",
      },
    ]
  },
}

export default nextConfig
