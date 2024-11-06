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
}
