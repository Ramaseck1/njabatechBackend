-- CreateEnum
CREATE TYPE "ModeReception" AS ENUM ('LIVRAISON', 'RETRAIT');

-- AlterTable
ALTER TABLE "commandes" ADD COLUMN     "modeReception" "ModeReception" NOT NULL DEFAULT 'LIVRAISON';
