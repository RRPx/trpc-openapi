import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const client = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.client.createMany({
    data: [
      {
        id: "1",
        telephone_number: "+8801871428132",
        birthday: new Date("1990-11-01"),
        age: "35",
        nick_name: "John",
        image: "https://i.ibb.co/b7Qvnn2/client1.png",
        gender: "male",
        image2: "https://i.ibb.co/PmWRxMk/client-sub-2.png",
        image3: "https://i.ibb.co/TrxD171/client-sub-3.png",
      },
      {
        id: "2",
        telephone_number: "+8801871428100",
        nick_name: "Dong",
        birthday: new Date("1992-09-01"),
        image: "https://i.ibb.co/8YZ5PsK/client2.png",
        image3: "https://i.ibb.co/w70rGgq/client-sub-4.png",
      },
      {
        id: "3",
        telephone_number: "+8801871428999",
        nick_name: "Alex",
        birthday: new Date("1992-09-01"),
        image2: "https://i.ibb.co/Yk6Z177/client-sub-1.png",
        image: "https://i.ibb.co/8YZ5PsK/client2.png",
      },
      {
        id: "4",
        telephone_number: "+8801871428111",
        nick_name: "Carry",
        birthday: new Date("1992-09-01"),
        image: "https://i.ibb.co/8YZ5PsK/client2.png",
      },
    ],
  });
};
