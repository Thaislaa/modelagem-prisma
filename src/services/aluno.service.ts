import type { AlunoAvaliacaoDto } from "../dtos/create-aluno-avaliacao.dto.js";
import type { AlunoEnderecoDto } from "../dtos/create-aluno-endereco.dto.js";
import { prisma } from "../lib/prisma.js";

export class AlunoService {

    // CRIAR ALUNO E AVALIAÇÃO
    public async criarAlunoAvaliacao(dados: AlunoAvaliacaoDto) {
        return await prisma.$transaction(async (tx) => {

            const aluno = await tx.aluno.create({
                data: {
                    email: dados.email,
                    nome: dados.nome,
                    senha: dados.senha,
                    dtNascimento: dados.dtNascimento ?? null
                }
            })

            const avaliacao = await tx.avaliacao.create({
                data: {
                    idAluno: aluno.id,
                    ...dados.avaliacao
                }
            })

            return { aluno, avaliacao }
        })
    }

    // CRIAR ALUNO E ENDEREÇO 
    public async criarAlunoEndereco(dados: AlunoEnderecoDto) {
        return await prisma.$transaction(async (tx) => {
            const aluno = await tx.aluno.create({
                data: {
                    email: dados.email,
                    nome: dados.nome,
                    senha: dados.senha,
                    dtNascimento: dados.dtNascimento ?? null
                }
            })

            const endereco = await tx.endereco.create({
                data: {
                    idAluno: aluno.id,
                    ...dados.endereco
                }
            })

            return { aluno, endereco }
        })
    }
}