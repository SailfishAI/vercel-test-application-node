import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import initialize_server from "../serverInit";

const prisma = new PrismaClient();

export default async function handler(res: NextApiResponse) {
  try {
    initialize_server()
    await prisma.greeting.create({
      data: {
        message: "Test",
        userId: 890000, // Assuming userId is a foreign key
      },
    });

    res.status(201).json({ message: "Inserted with foreign key" });
  } catch (error) {
    console.error("[API][Foreign Key] Error:", error);
    res.status(500).json({ error: "Foreign key constraint failed" });
  }
}
