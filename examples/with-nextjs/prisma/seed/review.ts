import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const review = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.review.createMany({
    data: [
      {
        id: "1",
        cast_id: "1",
        client_id: "1",
        nick_name: "Jhon",
        score: "3",
        reviews: "キャストが可愛かった",
        // password: hashedPassword,
      },
      {
        id: "2",
        cast_id: "2",
        client_id: "2",
        nick_name: "Dong",
        score: "5",
        reviews: "また利用したい",
      },
      {
        id: "3",
        cast_id: "1",
        client_id: "3",
        nick_name: "Alex",
        score: "3",
        reviews: "キャストが可愛かった",
        // password: hashedPassword,
      },
      {
        id: "4",
        cast_id: "2",
        client_id: "4",
        nick_name: "Carry",
        score: "5",
        reviews: "また利用したい",
      },
      {
        id: "5",
        cast_id: "2",
        client_id: "1",
        nick_name: "Jhon",
        score: "3",
        reviews: "キャストが可愛かった",
        // password: hashedPassword,
      },
      {
        id: "6",
        cast_id: "6",
        client_id: "2",
        nick_name: "Dong",
        score: "5",
        reviews: "また利用したい",
      },
      {
        id: "7",
        cast_id: "1",
        client_id: "3",
        nick_name: "Alex",
        score: "3",
        reviews: "キャストが可愛かった",
        // password: hashedPassword,
      },
      {
        id: "8",
        cast_id: "2",
        client_id: "4",
        nick_name: "Carry",
        score: "5",
        reviews: "また利用したい",
      },
      {
        id: "9",
        cast_id: "6",
        client_id: "1",
        nick_name: "Jhon",
        score: "4",
        reviews: "キャストが可愛かった",
        // password: hashedPassword,
      },
      {
        id: "10",
        cast_id: "8",
        client_id: "2",
        nick_name: "Dong",
        score: "2",
        reviews: "また利用したい",
      },
      {
        id: "11",
        cast_id: "3",
        client_id: "2",
        nick_name: "Dong",
        score: "1",
        reviews: "キャストが可愛かった",
        // password: hashedPassword,
      },
      {
        id: "12",
        cast_id: "4",
        client_id: "1",
        nick_name: "John",
        score: "4",
        reviews: "また利用したい",
      },
      {
        id: "13",
        cast_id: "5",
        client_id: "1",
        nick_name: "Jhon",
        score: "2",
        reviews: "また利用したい",
      },
    ],
  });
};
