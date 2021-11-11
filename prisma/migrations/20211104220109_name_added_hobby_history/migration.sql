/*
  Warnings:

  - You are about to drop the column `description` on the `Hobby` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hobby" DROP COLUMN "description",
ADD COLUMN     "history" TEXT,
ADD COLUMN     "summary" TEXT;
