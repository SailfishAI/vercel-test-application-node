import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import initialize_server from "../serverInit";

export default async function handler(res: NextApiResponse) {
  initialize_server()
  try {
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: "postgresql://wronguser:wrongpassword@localhost:5432/wrongdb",
        },
      },
    });

    await prisma.$connect();
    res.status(200).json({ message: "Connected successfully" });
  } catch (error) {
    console.error("[API][DB Connection] Error:", error);
    res.status(500).json({ error: "Could not connect to the database" });
  }
}
