/*
  Warnings:

  - You are about to drop the `Workout` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_userId_fkey";

-- DropTable
DROP TABLE "Workout";

-- CreateTable
CREATE TABLE "BikeRide" (
    "id" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "distance" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "loggedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "BikeRide_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BikeRide" ADD CONSTRAINT "BikeRide_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
