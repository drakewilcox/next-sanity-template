import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), "styles")],
  },
};

export default nextConfig;
