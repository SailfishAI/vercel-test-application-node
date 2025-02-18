import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import initialize_server from "../serverInit";

const prisma = new PrismaClient();

export default async function handler(res: NextApiResponse) {
  try {
    initialize_server()
    const greeting = await prisma.greeting.findUnique({
      where: { id: 999999999999 },
    });

    if (!greeting) {
      throw new Error("Record not found");
    }

    res.status(200).json(greeting);
  } catch (error) {
    console.error("[API][Non-Existent Record] Error:", error);
    res.status(404).json({ error: "Record not found" });
  }
}
