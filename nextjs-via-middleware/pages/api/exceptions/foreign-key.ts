import { PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(res: NextApiResponse) {
  await prisma.greeting.create({
    data: {
      message: "Test",
      userId: 890000, // Assuming userId is a foreign key
    },
  });

  res.status(201).json({ message: "Inserted with foreign key" });
}
