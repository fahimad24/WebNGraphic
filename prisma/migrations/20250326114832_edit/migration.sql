/*
  Warnings:

  - Added the required column `category` to the `Graphicdesign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Webdesign` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Graphicdesign" ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Webdesign" ADD COLUMN     "category" TEXT NOT NULL;
