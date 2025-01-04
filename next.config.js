/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ik.imagekit.io", "ipfs.io"],
  },
};

module.exports = nextConfig;
