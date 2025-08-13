/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'd1ejtjbpinwbmz.cloudfront.net',
      'd3fgvik0glrwu1.cloudfront.net',
      `${process.env.STM_S3_BUCKET_NAME}.s3.${process.env.STM_AWS_REGION}.amazonaws.com`,
    ],
  },
};

export default nextConfig;
