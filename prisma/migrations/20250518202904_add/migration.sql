-- CreateEnum
CREATE TYPE "ResponseStage" AS ENUM ('LEAD', 'INTERESTED', 'CONVERTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "NoteType" AS ENUM ('RESPONSE', 'STARTED');

-- AlterTable
ALTER TABLE "Response" ADD COLUMN     "stage" "ResponseStage" NOT NULL DEFAULT 'LEAD';

-- CreateTable
CREATE TABLE "Note" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "responseId" TEXT,
    "startedId" TEXT,
    "noteType" "NoteType" NOT NULL,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_responseId_fkey" FOREIGN KEY ("responseId") REFERENCES "Response"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_startedId_fkey" FOREIGN KEY ("startedId") REFERENCES "GetStarted"("id") ON DELETE CASCADE ON UPDATE CASCADE;
