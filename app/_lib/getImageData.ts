export default async function getImageData(folderName: string) {
  const response = await fetch(
    `${process.env.BASE_URL}/api/getCaseStudyImages?folder=${folderName}&apiKey=${process.env.API_KEY}`,
    {
      headers: {
        Accept: 'application/json',
        method: 'GET',
      },
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch images in ${folderName}: ${response.statusText}`
    );
  }
  const images = await response.json();

  return images;
}
