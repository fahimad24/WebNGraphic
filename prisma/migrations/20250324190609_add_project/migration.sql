-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "client" TEXT NOT NULL,
    "completeDate" TIMESTAMP(3) NOT NULL,
    "mobileImage" TEXT NOT NULL,
    "mission" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "features" TEXT[],
    "technologies" TEXT[],
    "testimonial" JSONB NOT NULL,
    "demoUrl" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
