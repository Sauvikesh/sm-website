import { sql } from '@vercel/postgres';

export async function POST(req: Request) {
  try {
    // Parse the JSON body from the request
    const { body, h2, h3, h4, misc } = await req.json();

    // Insert the data into the errorMessagingContent table
    const result = await sql`
      INSERT INTO p_project_2 (body, h2, h3, h4, misc)
      VALUES (${body}, ${h2}, ${h3}, ${h4}, ${misc})
      RETURNING id;
    `;

    // Return a success response with the inserted record's id
    return new Response(JSON.stringify({ id: result.rows[0].id }), {
      status: 201,
    });
  } catch (error) {
    console.error('Error inserting data:', error);
    return new Response(JSON.stringify({ error: 'Error inserting data' }), {
      status: 500,
    });
  }
}
