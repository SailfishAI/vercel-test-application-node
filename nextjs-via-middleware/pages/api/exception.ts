import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(
    `[API][Exception] ${req.method} request received at /api/exception`,
  );
  // Define a function with a try-catch block
  function exampleFunction() {
    const xxxxxx = 12;
    const yyyyyy = 21;
    const sum = xxxxxx + yyyyyy;
    console.log("sum is : ", sum);
    throw new Error("This is a test exception");
  }
  switch (req.method) {
    case "GET": {
      try {
        exampleFunction();

        res.status(200).json({ message: "GET request processed successfully" });
      } catch (error) {
        console.error("Error in GET request:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
      break;
    }

    case "POST": {
      console.log("[API][Exception] Processing POST request.");
      const postResponse = {
        message: "Data received successfully.",
        receivedData: req.body,
      };
      console.log("[API][POST] Response:", postResponse);
      res.status(200).json(postResponse);
      break;
    }

    case "PUT": {
      console.log(
        "[API][Exception] Processing PUT request with body:",
        req.body,
      );
      const putResponse = {
        message: "Data updated successfully.",
        updatedData: req.body,
      };
      console.log("[API][PUT] Response:", putResponse);
      res.status(200).json(putResponse);
      break;
    }

    default: {
      console.error(`[API][Exception] Method not allowed: ${req.method}`);
      res.status(405).json({ error: "Method not allowed" });
      break;
    }
  }
}
