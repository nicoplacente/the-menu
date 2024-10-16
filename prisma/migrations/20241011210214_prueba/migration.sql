-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_appId_fkey";

-- AlterTable
ALTER TABLE "App" ALTER COLUMN "image" SET DEFAULT '';
