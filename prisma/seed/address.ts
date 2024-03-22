import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const address = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.address.createMany({
    data: [
      {
        id: "1",
        lat: "34.0138520",
        long: "135.235250",
      },
      {
        id: "2",
        lat: "34.01548520",
        long: "135.234560",
      },
      {
        id: "3",
        lat: "35.0138520",
        long: "134.235250",
      },
      {
        id: "4",
        lat: "34.01548520",
        long: "134.234560",
      },
    ],
  });
};
