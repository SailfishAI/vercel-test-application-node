import { NextApiRequest, NextApiResponse } from "next";
// import "./serverInit";

// Define a function with a try-catch block
function exampleFunction() {
  const xxxxxx = 12;
  const yyyyyy = 21;
  const sum = xxxxxx + yyyyyy;
  console.log("sum is : ", sum);
  throw new Error("This is a test exception");
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // console.log(`[API][Exception] ${req} request received at /api/exception`);

  switch (req.method) {
    case "GET": {
      try {
        exampleFunction();
        // res.status(200).json({ params: { message: "Exception, world!" } });
      } catch (error) {
        console.error("Error in GET request:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
      break;
    }
    case "POST": {
      console.log(
        `[API][Exception] Sending response: { message: 'Exception, world!' } for request POST`,
      );
      const postResponse = {
        message: "Data received successfully.",
        receivedData: req.body,
      };
      console.log(
        `[API][POST] Sending response for POST request:`,
        postResponse,
      );
      res.status(200).json({ message: "Exception, world!" });
      break;
    }

    case "PUT": {
      console.log(`[API][Exception] Received PUT request with body:`, req.body);
      const putResponse = {
        message: "Data updated successfully.",
        updatedData: req.body,
      };
      console.log(
        `[API][Exception] Sending response for request PUT:`,
        putResponse,
      );
      res.status(200).json(putResponse); // 200 OK
      break;
    }

    default: {
      console.error(`[API][Exception] Method not allowed: ${req.method}`);
      res.status(405).json({ error: "Method not allowed" });
      break;
    }
  }
}
