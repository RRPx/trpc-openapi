import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const bankInformation = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.bankInformation.createMany({
    data: [
      {
        id: "1",
        bank_name: "みずほ銀行",
        bank_number: "998",
        bank_finance_code: "0001",
        account_name: "キムラユウイチ",
        account_number: "183927",
        account_type: "普通",
        cast_id: "1",
      },
      {
        id: "2",
        bank_name: "三菱銀行",
        bank_number: "689",
        bank_finance_code: "4790",
        account_name: "サトウタカコ",
        account_number: "3732945",
        account_type: "普通",
        cast_id: "2",
      },
    ],
  });
};
