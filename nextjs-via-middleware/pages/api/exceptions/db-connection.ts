import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import initialize_server from "../serverInit";

export default async function handler(res: NextApiResponse) {
  initialize_server();
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: "postgresql://wronguser:wrongpassword@localhost:5432/wrongdb",
      },
    },
  });

  await prisma.$connect();
  res.status(200).json({ message: "Connected successfully" });
}
