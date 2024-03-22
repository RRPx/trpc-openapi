import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const user = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.user.createMany({
    data: [
      {
        id: "1",
        last_name: "John",
        first_name: "Doe",
        email: "client2@example.com",
        // password: hashedPassword,
        firebase_auth_id: "1111",
        stripe_account_id: "2222",
        verification_image: "https://i.ibb.co/ZcPsY1y/Cards.png",
        client_id: "1",
      },
      {
        id: "2",
        last_name: "Shiojiri",
        first_name: "Tomoyo",
        email: "tomoyo.shiojiri@gmail.com",
        hash_password: hashedPassword,
        role: "ADMIN",
      },
      {
        id: "3",
        last_name: "Alex",
        first_name: "Carry",
        email: "client@example.com",
        // password: hashedPassword,
        firebase_auth_id: "2222",
        stripe_account_id: "3333",
        client_id: "3",
        verification_image: "https://i.ibb.co/ZcPsY1y/Cards.png",
      },
      {
        id: "4",
        last_name: "Mizuhara",
        first_name: "Kiko",
        email: "cast@example.com",
        cast_id: "1",
        hash_password: hashedPassword,
        role: "CAST",
        verification_image: "https://i.ibb.co/ZcPsY1y/Cards.png",
      },
      {
        id: "5",
        last_name: "Hirose",
        first_name: "Suzu",
        email: "tomdshihab@gmail.com",
        cast_id: "2",
        hash_password: hashedPassword,
        role: "CAST",
        verification_image: "https://i.ibb.co/ZcPsY1y/Cards.png",
      },
      {
        id: "6",
        last_name: "Komatsu",
        first_name: "Nana",
        email: "sanjida.noushin.bd@gmail.com",
        cast_id: "3",
        hash_password: hashedPassword,
        role: "CAST",
        verification_image: "https://i.ibb.co/ZcPsY1y/Cards.png",
      },
      {
        id: "7",
        last_name: "Yamada",
        first_name: "Yu",
        email: "tomoki.chiba@mail.brandcloud.co.jp",
        cast_id: "4",
        hash_password: hashedPassword,
        role: "CAST",
        verification_image: "https://i.ibb.co/ZcPsY1y/Cards.png",
      },
      // {
      //   role_id: 1,
      //   company_id: 3,
      //   name: 'Free1',
      //   email: 'free1@example.com',
      //   password: hashedPassword,
      // },
    ],
  });
};
