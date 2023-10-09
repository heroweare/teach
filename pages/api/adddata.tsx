import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    if (request.method !== 'POST') {
      throw new Error('Invalid request method');
    }

    const { date, p1, p2, p3, p4, p5, p6, p7 } = request.body;

    if (!date || !p1) {
      throw new Error('Date and p1 are required');
    }

    await sql`
      INSERT INTO my_table (Date, p1, p2, p3, p4, p5, p6, p7)
      VALUES (${date}, ${p1}, ${p2}, ${p3}, ${p4}, ${p5}, ${p6}, ${p7})
      ON CONFLICT (Date)
      DO UPDATE SET
        p1 = excluded.p1,
        p2 = excluded.p2,
        p3 = excluded.p3,
        p4 = excluded.p4,
        p5 = excluded.p5,
        p6 = excluded.p6,
        p7 = excluded.p7;
    `;
  } catch (error) {
    return response.status(500).json({ error: "error.message" });
  }

  try {
    const my_table = await sql`SELECT * FROM my_table;`;
    return response.status(200).json({ my_table });
  } catch (error) {
    return response.status(500).json({ error: "error.message" });
  }
}