/*
  Warnings:

  - You are about to drop the column `categoryId` on the `App` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `App` table. All the data in the column will be lost.
  - You are about to drop the column `preferences` on the `App` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `appId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `recommended` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `subcategoryId` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `App` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[appName]` on the table `App` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `appName` to the `App` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "App" DROP CONSTRAINT "App_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "App" DROP CONSTRAINT "App_userId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_appId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_subcategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Subcategory" DROP CONSTRAINT "Subcategory_categoryId_fkey";

-- DropIndex
DROP INDEX "App_userId_key";

-- AlterTable
ALTER TABLE "App" DROP COLUMN "categoryId",
DROP COLUMN "name",
DROP COLUMN "preferences",
ADD COLUMN     "appName" TEXT NOT NULL,
ADD COLUMN     "bgColor" TEXT DEFAULT '#FFF',
ADD COLUMN     "image" TEXT,
ADD COLUMN     "isImageRounded" BOOLEAN DEFAULT true,
ADD COLUMN     "isTitleVisible" BOOLEAN DEFAULT false,
ADD COLUMN     "primaryColor" TEXT DEFAULT '#48E',
ADD COLUMN     "textColor" TEXT DEFAULT '#000',
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "image",
ADD COLUMN     "appId" TEXT,
ADD COLUMN     "categoryImage" TEXT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "appId",
DROP COLUMN "recommended",
DROP COLUMN "stock",
DROP COLUMN "subcategoryId",
ADD COLUMN     "isStock" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "productImage" TEXT,
ALTER COLUMN "price" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Subcategory" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "categoryId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "App_id_key" ON "App"("id");

-- CreateIndex
CREATE UNIQUE INDEX "App_appName_key" ON "App"("appName");

-- AddForeignKey
ALTER TABLE "App" ADD CONSTRAINT "App_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategory" ADD CONSTRAINT "Subcategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
