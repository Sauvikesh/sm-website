import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: process.env.STM_AWS_REGION,
  credentials: {
    accessKeyId: process.env.STM_AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.STM_AWS_SECRET_ACCESS_KEY ?? '',
  },
});

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const folder = url.searchParams.get('folder');
  // const apiKey = url.searchParams.get('apiKey');
  try {
    // if (apiKey !== process.env.API_KEY) {
    //   return new Response(JSON.stringify({ error: 'Unauthorized' }), {
    //     status: 401,
    //   });
    // }
    // Validate ID and table name
    if (!folder) {
      return new Response(
        JSON.stringify({ error: 'Folder parameter is required' }),
        { status: 400 }
      );
    }

    const listCommand = new ListObjectsV2Command({
      Bucket: process.env.STM_S3_BUCKET_NAME,
      Prefix: folder.endsWith('/') ? folder : `${folder}/`, // Ensure folder ends with a "/"
    });

    const { Contents } = await s3Client.send(listCommand);

    if (!Contents || Contents.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No images found in specified folder' }),
        {
          status: 404,
        }
      );
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

    return new Response(JSON.stringify(imageUrls), { status: 200 });
  } catch (error) {
    console.error('Error retrieving data:', error);
    return new Response(JSON.stringify({ error: 'Error retrieving data' }), {
      status: 500,
    });
  }
}
