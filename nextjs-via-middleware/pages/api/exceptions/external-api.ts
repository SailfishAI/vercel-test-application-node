import { NextApiResponse } from "next";
import initialize_server from "../serverInit";

export default async function handler(res: NextApiResponse) {
  initialize_server();
  const response = await fetch("https://httpbin.org/status/500"); // Simulate API failure
  if (!response.ok) {
    throw new Error(`External API failed with status: ${response.status}`);
  }

  res.status(200).json({ message: "External API succeeded" });
}
