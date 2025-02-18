import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
prisma.$disconnect(); // Force disconnect before a query

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const greetings = await prisma.greeting.findMany();
    res.status(200).json(greetings);
  } catch (error) {
    console.error("[API][DB Disconnected] Error:", error);
    res.status(500).json({ error: "Database connection lost" });
  }
}

