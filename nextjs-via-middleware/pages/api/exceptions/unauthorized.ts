import { NextApiRequest, NextApiResponse } from "next";
import initialize_server from "../serverInit";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  initialize_server()
  if (!req.headers.authorization) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  res.status(200).json({ message: "Authorized request" });
}
