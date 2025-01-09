import { NextApiRequest, NextApiResponse } from "next";
import "./serverInit";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`[API][Hello] ${req.method} request received at ${req.url}`);

  switch (req.method) {
    case "GET": {
      console.log(
        `[API][Hello] Sending response: { message: 'Hello, world!' }`,
      );
      res.status(200).json({ message: "Hello, world!" });
      break;
    }

    case "POST": {
      console.log(`[API][Hello] Received POST request with body:`, req.body);
      const postResponse = {
        message: "Data received successfully.",
        receivedData: req.body,
      };
      console.log(
        `[API][Hello] Sending response for POST request:`,
        postResponse,
      );
      res.status(201).json(postResponse);
      break;
    }

    case "PUT": {
      console.log(`[API][Hello] Received PUT request with body:`, req.body);
      const putResponse = {
        message: "Data updated successfully.",
        updatedData: req.body,
      };
      console.log(
        `[API][Hello] Sending response for PUT request:`,
        putResponse,
      );
      res.status(200).json(putResponse);
      break;
    }

    default: {
      console.error(`[API][Hello] Method not allowed: ${req.method}`);
      res.status(405).json({ error: "Method not allowed" });
      break;
    }
  }
}
