import { PrismaClient } from "@prisma/client";
// import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
// import path from "path";
export const config = {
  runtime: "nodejs", // Use "nodejs" runtime instead of Edge
};

const prisma = (global as any).prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  (global as any).prisma = prisma;
}

// const targetPath = "./node_modules/next/dist/shared";

// const targetPath_1 = path.resolve("./node_modules/next/dist/server");

// const targetPath_2 = path.resolve("./node_modules/next/dist/lib");

// function listDirectoryContents(dirPath: string): void {
//   try {
//     if (!fs.existsSync(dirPath)) {
//       console.error(`Error: Path does not exist - ${dirPath}`);
//       return;
//     }

//     const files = fs.readdirSync(dirPath);
//     console.log(`Contents of ${dirPath}:`);
//     files.forEach((file) => console.log(file));
//   } catch (error) {
//     console.error("Error reading directory:", error);
//   }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // register()
  // Run the function
  // listDirectoryContents(targetPath);
  // listDirectoryContents(targetPath_1);
  // listDirectoryContents(targetPath_2);

  console.log(`[API][Hello] ${req.method} request received at ${req.url}`);

  try {
    switch (req.method) {
      case "GET": {
        // Retrieve all greetings from the database
        const greetings = await prisma.greeting.findMany();
        console.log("[API][Hello] Fetched greetings:", greetings);
        res.status(200).json({ greetings });
        break;
      }

      case "POST": {
        console.log("[API][Hello] Received POST request with body:", req.body);

        // Ensure userId is optional but valid
        const { message, userId } = req.body;
        const data: any = { message: message || "Hello, world!" };

        if (userId) {
          data.user = { connect: { id: parseInt(userId) } }; // Ensure userId is an integer
        }

        const newGreeting = await prisma.greeting.create({ data });

        console.log("[API][Hello] Created greeting:", newGreeting);
        res.status(201).json(newGreeting);
        break;
      }

      case "PUT": {
        console.log("[API][Hello] Received PUT request with body:", req.body);

        const { id, message } = req.body;
        if (!id || !message) {
          res
            .status(400)
            .json({ error: "Missing id or message in request body" });
          return;
        }

        const updatedGreeting = await prisma.greeting.update({
          where: { id: parseInt(id) }, // Ensure id is an integer
          data: { message },
        });

        console.log("[API][Hello] Updated greeting:", updatedGreeting);
        res.status(200).json(updatedGreeting);
        break;
      }

      default: {
        console.error(`[API][Hello] Method not allowed: ${req.method}`);
        res.status(405).json({ error: "Method not allowed" });
        break;
      }
    }
  } catch (error: any) {
    console.error("[API][Hello] Error handling request:", error);
    res.status(500).json({
      error: error.message || "Server error",
    });
  }
}
