/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['stm-website-private-image-storage.s3.us-east-2.amazonaws.com'], // Replace with your actual S3 bucket domain
  },
};

export default nextConfig;
