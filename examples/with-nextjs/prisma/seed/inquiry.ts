import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const inquiry = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.inquiry.createMany({
    data: [
      {
        id: "1",
        name: "john",
        email: "a@example.com",
        title: "クレーム",
        content: "クレームです",
        inquirerRole: "CLIENT",
        // password: hashedPassword,
      },
      {
        id: "2",
        name: "Kiko",
        email: "cast@example.com",
        title: "質問",
        content: "質問があります",
        inquirerRole: "CAST",
      },
      {
        id: "3",
        name: "Ben",
        email: "test@example.com",
        title: "質問",
        content: "他の支払い方法は可能ですか？",
      },
      {
        id: "4",
        name: "Ben",
        email: "test@example.com",
        title: "クレーム",
        content: "権限者に話しかける方法を教えていただけますか？ ",
      },
    ],
  });
};
