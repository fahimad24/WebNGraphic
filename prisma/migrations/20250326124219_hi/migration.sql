/*
  Warnings:

  - You are about to drop the column `descriptions` on the `Graphicdesign` table. All the data in the column will be lost.
  - You are about to drop the column `descriptions` on the `Webdesign` table. All the data in the column will be lost.
  - Added the required column `description` to the `Graphicdesign` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Webdesign` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Graphicdesign" DROP COLUMN "descriptions",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Webdesign" DROP COLUMN "descriptions",
ADD COLUMN     "description" TEXT NOT NULL;
