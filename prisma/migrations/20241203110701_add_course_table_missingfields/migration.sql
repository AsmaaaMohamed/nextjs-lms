/*
  Warnings:

  - Added the required column `img` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "img" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
