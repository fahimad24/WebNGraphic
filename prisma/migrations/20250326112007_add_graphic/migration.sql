-- CreateTable
CREATE TABLE "Webdesign" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "descriptions" TEXT NOT NULL,
    "imageLink" TEXT NOT NULL,
    "imagePublicID" TEXT NOT NULL,
    "completeDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Webdesign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Graphicdesign" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "descriptions" TEXT NOT NULL,
    "imageLink" TEXT NOT NULL,
    "imagePublicID" TEXT NOT NULL,
    "completeDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Graphicdesign_pkey" PRIMARY KEY ("id")
);
