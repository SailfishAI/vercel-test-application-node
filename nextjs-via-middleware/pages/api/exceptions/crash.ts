import { NextApiRequest, NextApiResponse } from "next";
import initialize_server from "../serverInit";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  initialize_server()
  console.log("req", req);
  console.log("res", res)
  throw new Error("Manual Server Crash Test");
}
