export default async function getContentData(id: string) {
  const response = await fetch(
    `${process.env.BASE_URL}/api/getCaseStudyData?id=${id}&table=p_project_2&apiKey=${process.env.API_KEY}`,
    {
      headers: {
        Accept: 'application/json',
        method: 'GET',
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch data in error: ${response.statusText}`);
  }
  const result = await response.json();
  return [result.body, result.h2, result.h3, result.h4];
}
