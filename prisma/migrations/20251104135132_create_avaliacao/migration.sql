/*
  Warnings:

  - You are about to drop the `Endereco` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Endereco" DROP CONSTRAINT "Endereco_idAluno_fkey";

-- DropTable
DROP TABLE "public"."Endereco";

-- CreateTable
CREATE TABLE "endereco" (
    "id" TEXT NOT NULL,
    "rua" VARCHAR(30) NOT NULL,
    "bairro" VARCHAR(30) NOT NULL,
    "numero" INTEGER NOT NULL,
    "cidade" VARCHAR(50) NOT NULL,
    "id_aluno" TEXT NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacao" (
    "id" TEXT NOT NULL,
    "disciplina" VARCHAR(30) NOT NULL,
    "nota" SMALLINT NOT NULL,
    "dt_avaliacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_aluno" TEXT NOT NULL,

    CONSTRAINT "avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "endereco_id_aluno_key" ON "endereco"("id_aluno");

-- AddForeignKey
ALTER TABLE "endereco" ADD CONSTRAINT "endereco_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
