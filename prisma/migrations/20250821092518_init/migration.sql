/*
  Warnings:

  - You are about to drop the column `dat` on the `Lesson` table. All the data in the column will be lost.
  - Added the required column `date` to the `Lesson` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Class" DROP CONSTRAINT "Class_supervisorId_fkey";

-- AlterTable
ALTER TABLE "public"."Class" ALTER COLUMN "supervisorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Lesson" DROP COLUMN "dat",
ADD COLUMN     "date" "public"."Day" NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "public"."Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
