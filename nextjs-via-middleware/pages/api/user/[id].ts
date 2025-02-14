// import "../serverInit";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  console.log(`[API][User] ${req.method} request received`);
  console.log(`[API][User] Query parameters:`, req.query);

  if (req.method === "GET") {
    console.log(
      `[API][User] Fetching data from external API for user ID: ${id}`,
    );

    try {
      const response = await fetch("https://httpbin.org/get");
      const data = await response.json();

      console.log(`[API][User] Data fetched successfully:`, data);
      res.status(200).json({ userId: id, externalData: data });
      console.log(
        `[API][User] Response sent with external data for user ID: ${id}`,
      );
    } catch (error) {
      console.error(`[API][User] Error fetching external data:`, error);
      res.status(500).json({ error: "Failed to fetch external data" });
    }
  } else {
    console.error(`[API][User] Invalid method: ${req.method}`);
    res.status(405).json({ error: "Method not allowed" });
    console.error(`[API][User] Response sent: { error: 'Method not allowed' }`);
  }
}
