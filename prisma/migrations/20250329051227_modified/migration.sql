/*
  Warnings:

  - You are about to drop the `Webdesign` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Response" ALTER COLUMN "message" DROP NOT NULL,
ALTER COLUMN "interest" DROP NOT NULL;

-- DropTable
DROP TABLE "Webdesign";
