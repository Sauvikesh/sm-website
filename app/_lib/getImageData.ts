import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
  region: process.env.STM_AWS_REGION,
  credentials: {
    accessKeyId: process.env.STM_AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.STM_AWS_SECRET_ACCESS_KEY ?? '',
  },
});

export default async function getImageData(folderName: string) {
  const listCommand = new ListObjectsV2Command({
    Bucket: process.env.STM_S3_BUCKET_NAME,
    Prefix: folderName.endsWith('/') ? folderName : `${folderName}/`, // Ensure folder ends with a "/"
  });

  const { Contents } = await s3Client.send(listCommand);

  if (!Contents || Contents.length === 0) {
    throw new Error(`Failed to fetch images in ${folderName}`);
  }

  const sortedContents = Contents?.sort((a, b) => {
    // If either date is undefined, consider it as the latest date for sorting purposes
    const dateA = a.LastModified ? new Date(a.LastModified).getTime() : 0;
    const dateB = b.LastModified ? new Date(b.LastModified).getTime() : 0;

    return dateA - dateB; // Ascending order
  });

  const imageUrls = sortedContents
    .map((item) => {
      if (item.Key) {
        const publicUrl = `https://d3fgvik0glrwu1.cloudfront.net/${item.Key}`;
        return { key: item.Key, url: publicUrl };
      }
    })
    .filter(Boolean); // Remove any undefined results

  return imageUrls;
}
