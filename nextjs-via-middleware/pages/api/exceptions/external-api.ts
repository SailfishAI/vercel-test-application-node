import { NextApiResponse } from "next";
import initialize_server from "../serverInit";

export default async function handler(res: NextApiResponse) {
  try {
    initialize_server()
    const response = await fetch("https://httpbin.org/status/500"); // Simulate API failure
    if (!response.ok) {
      throw new Error(`External API failed with status: ${response.status}`);
    }

    res.status(200).json({ message: "External API succeeded" });
  } catch (error) {
    console.error("[API][External API] Error:", error);
    res.status(500).json({ error: "Failed to fetch external data" });
  }
}
