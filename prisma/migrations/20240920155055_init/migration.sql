/*
  Warnings:

  - You are about to drop the column `goalId` on the `GoalTag` table. All the data in the column will be lost.
  - You are about to drop the column `taskId` on the `TaskTag` table. All the data in the column will be lost.
  - You are about to drop the column `fromUserId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `toUserId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `transactionTagId` on the `Transaction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_fromUserId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_toUserId_fkey";

-- AlterTable
ALTER TABLE "GoalTag" DROP COLUMN "goalId";

-- AlterTable
ALTER TABLE "TaskTag" DROP COLUMN "taskId";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "fromUserId",
DROP COLUMN "toUserId",
DROP COLUMN "transactionTagId";
