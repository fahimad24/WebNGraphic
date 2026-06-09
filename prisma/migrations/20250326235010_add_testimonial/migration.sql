/*
  Warnings:

  - You are about to drop the column `content` on the `Testimonial` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Testimonial` table. All the data in the column will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `comment` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Made the column `company` on table `Testimonial` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Testimonial" DROP COLUMN "content",
DROP COLUMN "image",
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "avatarID" TEXT,
ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL,
ALTER COLUMN "company" SET NOT NULL;

-- DropTable
DROP TABLE "Review";
