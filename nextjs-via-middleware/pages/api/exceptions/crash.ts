import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("req", req);
  console.log("res", res);
  throw new Error("Manual Server Crash Test");
}
