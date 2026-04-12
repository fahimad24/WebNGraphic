/*
  Warnings:

  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `image` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `mobileImage` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `overview` on the `Project` table. All the data in the column will be lost.
  - Added the required column `overView` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP CONSTRAINT "Project_pkey",
DROP COLUMN "image",
DROP COLUMN "mobileImage",
DROP COLUMN "overview",
ADD COLUMN     "images" JSONB[],
ADD COLUMN     "overView" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "features" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "technologies" SET DEFAULT ARRAY[]::TEXT[],
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Project_id_seq";
