import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import initialize_server from "../serverInit";

const prisma = new PrismaClient();

export default async function handler(res: NextApiResponse) {
  initialize_server();
  const greeting = await prisma.greeting.findUnique({
    where: { id: 999999999999 },
  });

  if (!greeting) {
    throw new Error("Record not found");
  }

  res.status(200).json(greeting);
}
