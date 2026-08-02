/*
  Warnings:

  - You are about to drop the column `userType` on the `password_reset_codes` table. All the data in the column will be lost.
  - Added the required column `gieId` to the `password_reset_codes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "password_reset_codes" DROP COLUMN "userType",
ADD COLUMN     "gieId" TEXT NOT NULL;
