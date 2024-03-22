import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const notification = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.notification.createMany({
    data: [
      {
        id: "1",
        title: "お知らせ",
        notification_date: new Date(`2024/01/10/ 10:00`),
        content: "お知らせです",
        cast_id: "1",
        // password: hashedPassword,
      },
      {
        id: "2",
        title: "お知らせ２",
        notification_date: new Date(`2023/12/16/ 11:00`),
        content: "お知らせがあります。",
        cast_id: "1",
      },
      {
        id: "3",
        title: "お知らせ 3",
        notification_date: new Date(`2024/01/18/ 10:00`),
        content: "お知らせがあります。",
        cast_id: "3",
      },
      {
        id: "4",
        title: "お知らせ 4",
        notification_date: new Date(`2023/12/17/ 11:00`),
        content: "お知らせがあります。",
        cast_id: "4",
      },
    ],
  });
};
