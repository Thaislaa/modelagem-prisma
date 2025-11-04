-- CreateTable
CREATE TABLE "Endereco" (
    "id" TEXT NOT NULL,
    "rua" VARCHAR(30) NOT NULL,
    "bairro" VARCHAR(30) NOT NULL,
    "numero" INTEGER NOT NULL,
    "cidade" VARCHAR(50) NOT NULL,
    "idAluno" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Endereco_idAluno_key" ON "Endereco"("idAluno");

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_idAluno_fkey" FOREIGN KEY ("idAluno") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
