import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const cast = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.cast.createMany({
    data: [
      {
        id: "1",
        nick_name: "Kiko",
        language_type: ["English"],
        cosplay_guide: true,
        user_rank_id: "3",
        profile_approval_by_admin: "APPROVAL",
        // password: hashedPassword,
      },
      {
        id: "2",
        nick_name: "Suzu Hirose",
        language_type: ["Chinese"],
        cosplay_guide: true,
        user_rank_id: "3",
        profile_approval_by_admin: "APPROVAL",
      },
      {
        id: "3",
        nick_name: "Nana Komatsu",
        cosplay_guide: true,
        user_rank_id: "1",
        profile_approval_by_admin: "APPROVAL",
      },
      {
        id: "4",
        nick_name: "Yu Yamada",
        language_type: ["Chinese"],
        cosplay_guide: true,
        user_rank_id: "3",
        cup_number: "DCUP",
        profile_approval_by_admin: "APPROVAL",
      },
      {
        id: "5",
        nick_name: "Ai Tominaga",
        language_type: ["English"],
        cosplay_guide: true,
        user_rank_id: "2",
        profile_approval_by_admin: "APPROVAL",
      },
      {
        id: "6",
        nick_name: "Sora Choi",
        language_type: ["Korean"],
        cosplay_guide: true,
        user_rank_id: "3",
        cup_number: "BCUP",
        profile_approval_by_admin: "APPROVAL",
      },
      {
        id: "7",
        nick_name: "Yuri Ebihara",
        cosplay_guide: true,
        user_rank_id: "1",
        profile_approval_by_admin: "APPROVAL",
      },
      {
        id: "8",
        nick_name: "Yuka Mannami",
        language_type: ["Korean"],
        cosplay_guide: true,
        user_rank_id: "2",
        profile_approval_by_admin: "APPROVAL",
      },
    ],
  });
};
