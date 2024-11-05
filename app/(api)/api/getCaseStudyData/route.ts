import { sql } from '@vercel/postgres';

// Define a union of allowed table names for type safety
type TableName = 'p_project_2' | 'anotherTableName';

// Define the expected shape of the data
export interface ErrorMessageContent {
  id: number;
  body: string[];
  h2: string[];
  h3: string[];
  h4: string[];
}

// Utility function to check if a given table name is allowed
function isValidTableName(table: string): table is TableName {
  return ['p_project_2', 'anotherTableName'].includes(table);
}

// GET request handler to fetch data by id and table name
export async function GET(req: Request): Promise<Response> {
  try {
    // Parse query parameters
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    const table = url.searchParams.get('table');
    const apiKey = url.searchParams.get('apiKey');

    if (apiKey !== process.env.API_KEY) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
      });
    }
    // Validate ID and table name
    if (!id) {
      return new Response(
        JSON.stringify({ error: 'ID parameter is required' }),
        { status: 400 }
      );
    }
    if (!table || !isValidTableName(table)) {
      return new Response(
        JSON.stringify({ error: 'Invalid or missing table name' }),
        { status: 400 }
      );
    }

    // Construct the query with the validated table name
    const query = `SELECT * FROM ${table} WHERE id = ${id}`;
    const result = await sql.query(query);

    // If no data is found, return a 404 response
    if (result.rowCount === 0) {
      return new Response(JSON.stringify({ error: 'Content not found' }), {
        status: 404,
      });
    }

    // Return the data as JSON
    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (error) {
    console.error('Error retrieving data:', error);
    return new Response(JSON.stringify({ error: 'Error retrieving data' }), {
      status: 500,
    });
  }
}
