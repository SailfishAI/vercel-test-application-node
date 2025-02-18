import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await prisma.greeting.create({
      data: { message: 12345 as any }, // Invalid: Prisma expects a string
    });

    res.status(201).json({ message: "Inserted successfully" });
  } catch (error) {
    console.error("[API][Invalid Data] Error:", error);
    res.status(400).json({ error: "Invalid data type" });
  }
}

