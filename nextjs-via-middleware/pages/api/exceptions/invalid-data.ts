import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import initialize_server from "../serverInit";

const prisma = new PrismaClient();

export default async function handler(res: NextApiResponse) {
  initialize_server();
  await prisma.greeting.create({
    data: { message: 12345 as any }, // Invalid: Prisma expects a string
  });

  res.status(201).json({ message: "Inserted successfully" });
}
