import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import initialize_server from "./serverInit";

const prisma = (global as any).prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  (global as any).prisma = prisma;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(`[API][Hello] ${req.method} request received at ${req.url}`);

  // Ensure server initialization before handling requests
  initialize_server();

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
