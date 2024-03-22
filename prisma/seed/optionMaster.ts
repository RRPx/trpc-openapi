import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

export const optionMaster = async () => {
  const saltRounds = 10
  const password = 'password'
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  await prisma.optionMaster.createMany({
    data: [
      {
        id: "1",
        option_menu: "アイドルコス",
        fee: 10000
        // password: hashedPassword,
      },
      {
        id: "2",
        option_menu: "アニメコス",
        fee: 15000
      }
    ],
  })
}
