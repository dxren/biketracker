/*
  Warnings:

  - You are about to drop the column `distance` on the `BikeRide` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `BikeRide` table. All the data in the column will be lost.
  - Added the required column `distanceInMiles` to the `BikeRide` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durationInMinutes` to the `BikeRide` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BikeRide" DROP COLUMN "distance",
DROP COLUMN "duration",
ADD COLUMN     "distanceInMiles" INTEGER NOT NULL,
ADD COLUMN     "durationInMinutes" INTEGER NOT NULL,
ALTER COLUMN "notes" DROP NOT NULL;
