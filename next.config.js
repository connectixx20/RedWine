/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["res.cloudinary.com","img.youtube.com","cdn.sanity.io","images.unsplash.com"]
  }
}

module.exports = nextConfig
