/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "wallpaperaccess.com",
      "mybayutcdn.bayut.com",
      "www.teahub.io",
      "www.vhv.rs",
      "thumbs.dreamstime.com",
    ],
  },
  reactStrictMode: true,
  optimizeFonts: false
};

module.exports = nextConfig
