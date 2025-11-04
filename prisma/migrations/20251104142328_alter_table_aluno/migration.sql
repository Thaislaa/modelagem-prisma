/*
  Warnings:

  - Made the column `senha` on table `aluno` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "aluno" ADD COLUMN     "dt_nascimento" DATE,
ALTER COLUMN "senha" SET NOT NULL,
ALTER COLUMN "senha" SET DATA TYPE VARCHAR(100);
