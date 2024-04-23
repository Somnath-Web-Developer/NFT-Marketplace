-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "nftId" TEXT NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comment_nftId_key" ON "Comment"("nftId");
