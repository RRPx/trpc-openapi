import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const reservation = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.reservation.createMany({
    data: [
      {
        id: "1",
        cast_id: "1",
        client_id: "1",
        start_time: new Date(`2024/02/07/ 13:00`),
        end_time: new Date(`2024/02/07/ 14:00`),
        payment_amount: 16000,
        guide_flg: true,
        approval: "HOLD",
        admin_approval: "APPROVAL",
        reservation_date: new Date(`2024/02/07/ 10:00`),
        payment_id: "342342",
        address_id: "1",
        // password: hashedPassword,
      },
      {
        id: "2",
        cast_id: "2",
        client_id: "2",
        start_time: new Date(`2024/02/09/ 11:00`),
        end_time: new Date(`2024/02/09/ 12:00`),
        guide_flg: true,
        approval: "HOLD",
        payment_amount: 10000,
        reservation_date: new Date(`2024/02/09/ 08:00`),
        payment_id: "2342342",
        address_id: "2",
      },
      {
        id: "3",
        cast_id: "1",
        client_id: "3",
        approval: "HOLD",
        start_time: new Date(`2024/02/04/ 13:00`),
        end_time: new Date(`2024/02/04/ 14:00`),
        payment_amount: 10000,
        reservation_date: new Date(`2024/02/04/ 10:00`),
        payment_id: "32432423",
        address_id: "3",
      },
      {
        id: "4",
        cast_id: "4",
        client_id: "4",
        start_time: new Date(`2024/02/13/ 11:00`),
        end_time: new Date(`2024/02/13/ 12:00`),
        payment_amount: 10000,
        reservation_date: new Date(`2024/02/13/ 08:00`),
        payment_id: "435345",
        address_id: "4",
      },
    ],
  });
};
