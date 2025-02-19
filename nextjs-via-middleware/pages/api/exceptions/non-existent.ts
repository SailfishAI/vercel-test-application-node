import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(res: NextApiResponse) {
  const greeting = await prisma.greeting.findUnique({
    where: { id: 999999999999 },
  });

  if (!greeting) {
    throw new Error("Record not found");
  }

  res.status(200).json(greeting);
}
