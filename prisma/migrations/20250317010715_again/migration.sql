/*
  Warnings:

  - You are about to drop the column `approved` on the `Testimonial` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `Testimonial` table. All the data in the column will be lost.
  - Added the required column `content` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Testimonial" DROP COLUMN "approved",
DROP COLUMN "message",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "service" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "role" SET NOT NULL;
