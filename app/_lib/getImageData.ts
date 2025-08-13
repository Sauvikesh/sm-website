import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

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

  const imageUrls = await Promise.all(
    sortedContents.map(async (item) => {
      if (item.Key) {
        const getCommand = new GetObjectCommand({
          Bucket: process.env.STM_S3_BUCKET_NAME,
          Key: item.Key,
        });

        const url = await getSignedUrl(s3Client, getCommand, {
          expiresIn: 3600,
        });
        return { key: item.Key, url };
      }
    })
  );
  return imageUrls;
}
