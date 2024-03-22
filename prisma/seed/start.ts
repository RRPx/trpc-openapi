import { PrismaClient } from '@prisma/client'
import { user } from './user'
import { userRank } from './userRank'
import { cast } from './cast'
import { client } from './client'
import { address } from './address'
import { favorite } from './favorite'
import { castInformation } from './castInformation'
import { shiftManagement } from './shiftManagement'
import { review } from './review'
import { reservation } from './reservation'
import { chatRoom } from './chatRoom'
import { chatMessage } from './chatMessage'
import { inquiry } from './inquiry'
import { notification } from './notification'
import { optionMaster } from './optionMaster'
import { bankInformation } from './bankInformation'



const prisma = new PrismaClient()

const main = async () => {
  await userRank()
  await cast()
  await client()
  await user()
  await address()
  await favorite() 
  await castInformation() 
  await shiftManagement() 
  await review() 
  await reservation() 
  await chatRoom() 
  await chatMessage() 
  await inquiry() 
  await notification() 
  await optionMaster() 
  await bankInformation() 

}
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
