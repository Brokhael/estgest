/*
  Warnings:

  - A unique constraint covering the columns `[businessId,weekday,opensAt,closesAt]` on the table `BusinessHours` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "BusinessHours_businessId_weekday_key";

-- CreateIndex
CREATE UNIQUE INDEX "BusinessHours_businessId_weekday_opensAt_closesAt_key" ON "BusinessHours"("businessId", "weekday", "opensAt", "closesAt");
