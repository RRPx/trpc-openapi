import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export const chatMessage = async () => {
  const saltRounds = 10;
  const password = "password";
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await prisma.chatMessage.createMany({
    data: [
      {
        id: "1",
        chat_room_id: "1",
        user_type: "CLIENT",
        message: "Hi, I'm Nick",
      },
      {
        id: "2",
        chat_room_id: "2",
        user_type: "CAST",
        message: "Hello, I'm Bom",
      },
      {
        id: "3",
        chat_room_id: "1",
        user_type: "CAST",
        message: "Good afternoon",
      },
      {
        id: "4",
        chat_room_id: "2",
        user_type: "CLIENT",
        message: "Good afternoon",
      },
      {
        id: "5",
        chat_room_id: "1",
        user_type: "CAST",
        message: "This is a test message",
      },
      {
        id: "6",
        chat_room_id: "1",
        user_type: "CLIENT",
        message: "okay, I understand this is a test message",
      },
      {
        id: "7",
        chat_room_id: "1",
        user_type: "CLIENT",
        message: "Is everything okay?",
      },
      {
        id: "8",
        chat_room_id: "2",
        user_type: "CLIENT",
        message: "yes, that's fine",
      },
      {
        id: "9",
        chat_room_id: "1",
        user_type: "CLIENT",
        message: "When will you available today?",
      },
      {
        id: "10",
        chat_room_id: "2",
        user_type: "CAST",
        message: "Wow!!!!!!!!",
      },
      {
        id: "11",
        chat_room_id: "1",
        user_type: "CAST",
        message: "I'm available at 4:00 PM JST",
      },
      {
        id: "12",
        chat_room_id: "1",
        user_type: "CLIENT",
        message: "Okay, thanks for informing",
      },
      {
        id: "13",
        chat_room_id: "1",
        user_type: "CAST",
        message: "Thank you!!",
      },
    ],
  });
};
