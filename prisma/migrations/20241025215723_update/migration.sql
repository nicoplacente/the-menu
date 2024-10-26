-- DropIndex
DROP INDEX "Category_id_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "categoryID" TEXT NOT NULL DEFAULT '';
