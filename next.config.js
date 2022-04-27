/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_API_KEY: "4e3f338ccf364dc5acdf474ac6a36f86",
  },
  images: {
    domains: ["spoonacular.com"],
  },
};

module.exports = nextConfig;
