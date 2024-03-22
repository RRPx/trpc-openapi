-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'CAST', 'ADMIN');

-- CreateEnum
CREATE TYPE "PriorityOrder" AS ENUM ('A', 'B', 'C', 'D', 'E');

-- CreateEnum
CREATE TYPE "CupNumber" AS ENUM ('ACUP', 'BCUP', 'CCUP', 'DCUP', 'ECUP', 'FCUP', 'GCUP', 'HCUP', 'OTHER', 'SECRET');

-- CreateEnum
CREATE TYPE "AdminRole" AS ENUM ('Administorator', 'EDITOR', 'READER');

-- CreateEnum
CREATE TYPE "LanguageType" AS ENUM ('English', 'Chinese', 'Korean');

-- CreateEnum
CREATE TYPE "CosplayContent" AS ENUM ('maid', 'anime');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "CastSideReservationStatus" AS ENUM ('TRANSPORTATION', 'AWAITING', 'BOOKED');

-- CreateEnum
CREATE TYPE "ClientSideSlotStatus" AS ENUM ('HOLD', 'UNBOOKED', 'BOOKED');

-- CreateEnum
CREATE TYPE "Approval" AS ENUM ('APPROVAL', 'DENIAL', 'HOLD');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('CAST', 'CLIENT');

-- CreateEnum
CREATE TYPE "InquirerRole" AS ENUM ('CAST', 'CLIENT', 'UNREGISTER');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('NEWCAST', 'WARNING', 'IMPORTANT', 'RESERVATION_COMPLETED', 'RESERVATION_REJECTED');

-- CreateEnum
CREATE TYPE "TargetedUser" AS ENUM ('CAST', 'CLIENT', 'BOTH', 'NONE');

-- CreateTable
CREATE TABLE "Example" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "password_hash" TEXT,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "UserRank" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "basic_fee" INTEGER,
    "is_display" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserRank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CastInformation" (
    "id" TEXT NOT NULL,
    "cast_id" TEXT NOT NULL,
    "age" INTEGER,
    "height" INTEGER,
    "blood_type" TEXT,
    "personality" TEXT,
    "user_image_main" TEXT NOT NULL,
    "user_image_sub1" TEXT,
    "user_image_sub2" TEXT,
    "user_image_sub3" TEXT,
    "user_image_sub4" TEXT,
    "liquor" BOOLEAN,
    "smoking" BOOLEAN,
    "hobby" TEXT,
    "like_spot" TEXT,
    "self_introduction" TEXT,
    "pick_up" BOOLEAN NOT NULL DEFAULT false,
    "is_display" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CastInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_verified" TIMESTAMP(3),
    "firebase_auth_id" TEXT,
    "hash_password" TEXT,
    "stripe_account_id" TEXT,
    "verification_image" TEXT,
    "client_id" TEXT,
    "cast_id" TEXT,
    "admin_role" "AdminRole" NOT NULL DEFAULT 'READER',
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cast" (
    "id" TEXT NOT NULL,
    "nick_name" TEXT NOT NULL,
    "telephone_number" TEXT,
    "birthday" TIMESTAMP(3),
    "locate" TEXT,
    "language_type" "LanguageType"[],
    "language_other" TEXT,
    "cosplay_guide" BOOLEAN NOT NULL,
    "cosplay_content" "CosplayContent"[],
    "cosplay_other" TEXT,
    "cup_number" "CupNumber",
    "memo" TEXT,
    "user_rank_id" TEXT NOT NULL,
    "is_display" BOOLEAN NOT NULL DEFAULT true,
    "homepage_recommended_priority" "PriorityOrder",
    "profile_approval_by_admin" "Approval" NOT NULL DEFAULT 'HOLD',
    "twitter_user_name" TEXT,
    "instagram_user_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "telephone_number" TEXT,
    "birthday" TIMESTAMP(3),
    "age" TEXT,
    "nick_name" TEXT,
    "image" TEXT,
    "gender" "Gender",
    "image2" TEXT,
    "image3" TEXT,
    "is_display" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "note" TEXT,
    "address" TEXT,
    "is_display" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL,
    "client_id" TEXT,
    "cast_id" TEXT,
    "is_display" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShiftManagement" (
    "id" TEXT NOT NULL,
    "cast_id" TEXT NOT NULL,
    "client_id" TEXT,
    "shift_date" TIMESTAMP(3),
    "start_time" TIMESTAMP(3),
    "end_time" TIMESTAMP(3),
    "memo" TEXT,
    "is_display" BOOLEAN NOT NULL DEFAULT true,
    "cast_side_reservation_status" "CastSideReservationStatus" NOT NULL DEFAULT 'AWAITING',
    "client_side_slot_status" "ClientSideSlotStatus" NOT NULL DEFAULT 'UNBOOKED',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reservationId" TEXT,

    CONSTRAINT "ShiftManagement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "cast_id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "nick_name" TEXT NOT NULL,
    "score" TEXT NOT NULL,
    "reviews" TEXT NOT NULL,
    "approval" "Approval" NOT NULL DEFAULT 'HOLD',
    "is_display" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "cast_id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "guide_flg" BOOLEAN NOT NULL DEFAULT false,
    "approval" "Approval" NOT NULL DEFAULT 'HOLD',
    "admin_approval" "Approval" NOT NULL DEFAULT 'HOLD',
    "payment_amount" INTEGER NOT NULL,
    "payment_select" TEXT,
    "payment_id" TEXT,
    "is_display" BOOLEAN NOT NULL DEFAULT true,
    "reservation_date" TIMESTAMP(3) NOT NULL,
    "address_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatRoom" (
    "id" TEXT NOT NULL,
    "reservation_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "chat_room_id" TEXT NOT NULL,
    "message" TEXT,
    "is_seen" BOOLEAN NOT NULL DEFAULT false,
    "is_admin_seen" BOOLEAN NOT NULL DEFAULT false,
    "user_type" "UserType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inquiry" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "is_seen" BOOLEAN NOT NULL DEFAULT false,
    "inquirerRole" "InquirerRole" NOT NULL DEFAULT 'UNREGISTER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Inquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" "Category",
    "notification_date" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "cast_id" TEXT,
    "client_id" TEXT,
    "is_seen" BOOLEAN NOT NULL DEFAULT false,
    "language" TEXT,
    "targeted_user" "TargetedUser" NOT NULL DEFAULT 'NONE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankInformation" (
    "id" TEXT NOT NULL,
    "bank_name" VARCHAR(20),
    "bank_number" TEXT,
    "bank_finance_code" TEXT,
    "account_name" VARCHAR(30),
    "account_number" TEXT,
    "account_type" VARCHAR(10),
    "cast_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "BankInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptionMaster" (
    "id" TEXT NOT NULL,
    "option_menu" TEXT NOT NULL,
    "fee" INTEGER NOT NULL,
    "is_display" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OptionMaster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CastToOptionMaster" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_OptionMasterToReservation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "Example_name_idx" ON "Example"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "CastInformation_cast_id_key" ON "CastInformation"("cast_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_client_id_key" ON "User"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_cast_id_key" ON "User"("cast_id");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_payment_id_key" ON "Reservation"("payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_address_id_key" ON "Reservation"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "ChatRoom_reservation_id_key" ON "ChatRoom"("reservation_id");

-- CreateIndex
CREATE INDEX "Inquiry_email_idx" ON "Inquiry"("email");

-- CreateIndex
CREATE INDEX "Notification_title_idx" ON "Notification"("title");

-- CreateIndex
CREATE UNIQUE INDEX "BankInformation_account_number_key" ON "BankInformation"("account_number");

-- CreateIndex
CREATE UNIQUE INDEX "_CastToOptionMaster_AB_unique" ON "_CastToOptionMaster"("A", "B");

-- CreateIndex
CREATE INDEX "_CastToOptionMaster_B_index" ON "_CastToOptionMaster"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_OptionMasterToReservation_AB_unique" ON "_OptionMasterToReservation"("A", "B");

-- CreateIndex
CREATE INDEX "_OptionMasterToReservation_B_index" ON "_OptionMasterToReservation"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CastInformation" ADD CONSTRAINT "CastInformation_cast_id_fkey" FOREIGN KEY ("cast_id") REFERENCES "Cast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_cast_id_fkey" FOREIGN KEY ("cast_id") REFERENCES "Cast"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cast" ADD CONSTRAINT "Cast_user_rank_id_fkey" FOREIGN KEY ("user_rank_id") REFERENCES "UserRank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_cast_id_fkey" FOREIGN KEY ("cast_id") REFERENCES "Cast"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftManagement" ADD CONSTRAINT "ShiftManagement_cast_id_fkey" FOREIGN KEY ("cast_id") REFERENCES "Cast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShiftManagement" ADD CONSTRAINT "ShiftManagement_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_cast_id_fkey" FOREIGN KEY ("cast_id") REFERENCES "Cast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_cast_id_fkey" FOREIGN KEY ("cast_id") REFERENCES "Cast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatRoom" ADD CONSTRAINT "ChatRoom_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_chat_room_id_fkey" FOREIGN KEY ("chat_room_id") REFERENCES "ChatRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_cast_id_fkey" FOREIGN KEY ("cast_id") REFERENCES "Cast"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankInformation" ADD CONSTRAINT "BankInformation_cast_id_fkey" FOREIGN KEY ("cast_id") REFERENCES "Cast"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CastToOptionMaster" ADD CONSTRAINT "_CastToOptionMaster_A_fkey" FOREIGN KEY ("A") REFERENCES "Cast"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CastToOptionMaster" ADD CONSTRAINT "_CastToOptionMaster_B_fkey" FOREIGN KEY ("B") REFERENCES "OptionMaster"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionMasterToReservation" ADD CONSTRAINT "_OptionMasterToReservation_A_fkey" FOREIGN KEY ("A") REFERENCES "OptionMaster"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionMasterToReservation" ADD CONSTRAINT "_OptionMasterToReservation_B_fkey" FOREIGN KEY ("B") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
