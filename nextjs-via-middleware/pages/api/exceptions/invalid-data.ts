import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(res: NextApiResponse) {
  await prisma.greeting.create({
    data: { message: 12345 as any }, // Invalid: Prisma expects a string
  });

  res.status(201).json({ message: "Inserted successfully" });
}
