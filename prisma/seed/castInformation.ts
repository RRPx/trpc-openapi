import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const castInformation = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.castInformation.createMany({
    data: [
      {
        id: "1",
        cast_id: "1",
        age: 20,
        height: 158,
        blood_type: "O+",
        user_image_main: "https://i.ibb.co/YDv0gQ9/Cast-Image-1.png",
        user_image_sub1: "https://i.ibb.co/GVCYK1K/cast-photo-sub-one.png",
        user_image_sub2: "https://i.ibb.co/9p7XN6V/cast-photo-sub-two.png",
        user_image_sub3: "https://i.ibb.co/wy1vMN5/cast-photo-sub-three.png",
        user_image_sub4: "https://i.ibb.co/qx9DjRt/cast-photo-sub-four.png",
        liquor: true,
        smoking: true,
        hobby: "Listening Music",
        self_introduction:
          "<p>Hi there! <strong>I'm Kiko Mizuhara, </strong>a 19-year-old Tokyoite with a passion for fashion. As a model, I love expressing myself through unique styles and showcasing the latest trends on the runway. Let's embrace individuality and make the world our catwalk!</p>",
      },
      {
        id: "2",
        cast_id: "2",
        age: 23,
        height: 160,
        blood_type: "O-",
        user_image_main: "https://i.ibb.co/0cFq1JY/Cast-Image-2.png",
        user_image_sub1: "https://i.ibb.co/wy1vMN5/cast-photo-sub-three.png",
        user_image_sub2: "https://i.ibb.co/9p7XN6V/cast-photo-sub-two.png",
        user_image_sub3: "https://i.ibb.co/GVCYK1K/cast-photo-sub-one.png",
        user_image_sub4: "https://i.ibb.co/qx9DjRt/cast-photo-sub-four.png",
        hobby: "Watching Movie",
        self_introduction:
          "<p>Konnichiwa! <strong>I'm Suzu Hirose, </strong>a 20-year-old aspiring model from Osaka. Beyond the glamour, I'm a fitness enthusiast who believes in a healthy mind and body. Excited to inspire others to embrace wellness and redefine beauty standards.</p>",
      },
      {
        id: "3",
        cast_id: "3",
        age: 19,
        height: 158,
        blood_type: "B+",
        user_image_main: "https://i.ibb.co/ZcbBSfq/Cast-Image-3.png",
        user_image_sub1: "https://i.ibb.co/wy1vMN5/cast-photo-sub-three.png",
        user_image_sub2: "https://i.ibb.co/9p7XN6V/cast-photo-sub-two.png",
      },
      {
        id: "4",
        cast_id: "4",
        age: 19,
        height: 173,
        user_image_main: "https://i.ibb.co/Xy6Gh3x/Cast-Image-4.png",
        smoking: false,
      },
      {
        id: "5",
        cast_id: "5",
        age: 28,
        height: 158,
        user_image_main: "https://i.ibb.co/KqhVfgL/Cast-Image-5.png",
        self_introduction:
          "<p>Yo,<strong> I'm Nana Komatsu,</strong> a 19-year-old model from Sapporo. With a background in streetwear, I'm all about bringing a fresh urban vibe to the fashion scene. Let's break boundaries and redefine cool together!</p>",
      },
      {
        id: "6",
        cast_id: "6",
        age: 22,
        height: 158,
        user_image_main: "https://i.ibb.co/FhFZ09S/Cast-Image-6.png",
        liquor: true,
      },
      {
        id: "7",
        cast_id: "7",
        age: 30,
        height: 158,
        user_image_main: "https://i.ibb.co/Xy6Gh3x/Cast-Image-4.png",
      },
      {
        id: "8",
        cast_id: "8",
        age: 28,
        height: 174,
        user_image_main: "https://i.ibb.co/0cFq1JY/Cast-Image-2.png",
      },
    ],
  });
};
