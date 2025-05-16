-- CreateTable
CREATE TABLE "BusinessHours" (
    "id" TEXT NOT NULL,
    "businessId" TEXT NOT NULL,
    "weekday" INTEGER NOT NULL,
    "opensAt" TEXT NOT NULL,
    "closesAt" TEXT NOT NULL,

    CONSTRAINT "BusinessHours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessHoursException" (
    "id" TEXT NOT NULL,
    "businessId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "opensAt" TEXT,
    "closesAt" TEXT,

    CONSTRAINT "BusinessHoursException_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BusinessHours_businessId_weekday_idx" ON "BusinessHours"("businessId", "weekday");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessHours_businessId_weekday_key" ON "BusinessHours"("businessId", "weekday");

-- CreateIndex
CREATE INDEX "BusinessHoursException_businessId_date_idx" ON "BusinessHoursException"("businessId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "BusinessHoursException_businessId_date_key" ON "BusinessHoursException"("businessId", "date");
