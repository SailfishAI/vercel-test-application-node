import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import initialize_server from "../serverInit";

const prisma = new PrismaClient();
prisma.$disconnect(); // Force disconnect before a query

export default async function handler(res: NextApiResponse) {
  initialize_server();
  const greetings = await prisma.greeting.findMany();
  res.status(200).json(greetings);
}
