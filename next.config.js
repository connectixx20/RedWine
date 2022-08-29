/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["res.cloudinary.com","img.youtube.com","images.unsplash.com"]
  }
}

module.exports = nextConfig
