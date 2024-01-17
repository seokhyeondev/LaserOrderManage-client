/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ordermanage.s3.ap-northeast-2.amazonaws.com",
      "ordermanage-drawing.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
  openAnalyzer: false,
});
module.exports = withBundleAnalyzer(nextConfig);
