import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const userRank = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.userRank.createMany({
    data: [
      {
        id: "1",
        name: "レギュラー",
        basic_fee: 8000,
      },
      {
        id: "2",
        name: "スペシャル",
        basic_fee: 12000,
      },
      {
        id: "3",
        name: "プレミアム",
        basic_fee: 16000,
      },
    ],
  });
};
