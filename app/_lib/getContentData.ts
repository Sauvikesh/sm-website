import { sql } from '@vercel/postgres';

export default async function getContentData(id: string) {
  // Construct the query with the validated table name
  const query = `SELECT * FROM p_project_2 WHERE id = ${id}`;
  const result = await sql.query(query);

  // If no data is found, return a 404 response
  if (result.rowCount === 0) {
    throw new Error(`Failed to fetch data in`);
  }

  const content = result.rows[0];
  return [content.body, content.h2, content.h3, content.h4];
  //   const response = await fetch(
  //     `${process.env.BASE_URL}/api/getCaseStudyData?id=${id}&table=p_project_2&apiKey=${process.env.API_KEY}`
  //   );
  //   if (!response.ok) {
  //     throw new Error(`Failed to fetch data in error: ${response.statusText}`);
  //   }
  //   const result = await response.json();
  //   return [result.body, result.h2, result.h3, result.h4];
}
