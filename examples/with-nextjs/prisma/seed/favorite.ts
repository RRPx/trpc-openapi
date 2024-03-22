import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const favorite = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.favorite.createMany({
    data: [
      {
        id: "1",
        client_id: "1",
        cast_id: "1",
        is_display: true,
      },
      {
        id: "2",
        client_id: "2",
        cast_id: "2",
        is_display: true,
      },
      {
        id: "3",
        client_id: "1",
        cast_id: "3",
        is_display: true,
      },
      {
        id: "4",
        client_id: "2",
        cast_id: "7",
      },
      {
        id: "5",
        client_id: "1",
        cast_id: "5",
        is_display: true,
      },
      {
        id: "6",
        client_id: "3",
        cast_id: "2",
        is_display: false,
      },
      {
        id: "7",
        client_id: "4",
        cast_id: "1",
        is_display: true,
      },
      {
        id: "8",
        client_id: "2",
        cast_id: "6",
        is_display: true,
      },
    ],
  });
};
