/*
  Warnings:

  - You are about to drop the column `userId` on the `App` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "App" DROP CONSTRAINT "App_userId_fkey";

-- AlterTable
ALTER TABLE "App" DROP COLUMN "userId";
