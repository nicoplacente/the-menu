/*
  Warnings:

  - Made the column `bgColor` on table `App` required. This step will fail if there are existing NULL values in that column.
  - Made the column `primaryColor` on table `App` required. This step will fail if there are existing NULL values in that column.
  - Made the column `textColor` on table `App` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "App" ALTER COLUMN "bgColor" SET NOT NULL,
ALTER COLUMN "bgColor" DROP DEFAULT,
ALTER COLUMN "primaryColor" SET NOT NULL,
ALTER COLUMN "primaryColor" DROP DEFAULT,
ALTER COLUMN "textColor" SET NOT NULL,
ALTER COLUMN "textColor" DROP DEFAULT;
