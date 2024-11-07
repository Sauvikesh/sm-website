/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'stm-website-private-image-storage.s3.us-east-2.amazonaws.com',
      'd1ejtjbpinwbmz.cloudfront.net',
    ],
  },
};

export default nextConfig;
