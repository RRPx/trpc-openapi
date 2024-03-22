import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const chatRoom = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.chatRoom.createMany({
    data: [
      {
        id: "1",
        reservation_id: "1",
      },
      {
        id: "2",
        reservation_id: "2",
      },
      {
        id: "3",
        reservation_id: "3",
      },
      {
        id: "4",
        reservation_id: "4",
      },
    ],
  });
};
