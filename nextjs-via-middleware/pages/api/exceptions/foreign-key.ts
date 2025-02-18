import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
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
