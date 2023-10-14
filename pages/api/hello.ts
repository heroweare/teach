import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const result =
      await sql`CREATE TABLE Grade9secB(
        id SERIAL PRIMARY KEY,
        date TEXT,
        p1 TEXT,
        p2 TEXT,
        p3 TEXT,
        p4 TEXT,
        p5 TEXT,
        p6 TEXT,
        p7 TEXT
      );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}