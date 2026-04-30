import { handleError } from "../config/error.handler.js";
import type { AlunoDto } from "../dtos/create-aluno.dto.js";
import type { UpdateAlunoDto } from "../dtos/update-aluno.dto.js";
import { prisma } from "../lib/prisma.js";

export class AlunoRepository {

    // LISTAR ALUNOS
    public async listar() {
        try {
            const alunos = await prisma.aluno.findMany()

            return alunos
        } catch (error) {
            return handleError(error)
        }
    }

    // LISTAR ALUNO POR ID
    public async obterPorId(id: string) {
        try {
            const encontrado = await prisma.aluno.findUnique({
                where: {
                    id
                }
            })

            if (!encontrado) {
                throw new Error("Aluno não encontrado")
            }

            return encontrado
        } catch (error) {
            return handleError(error)
        }
    }

    // LISTAR ALUNOS COM SUAS AVALIAÇÕES
    public async listarAlunosAvaliacoes() {
        try {
            const alunoAvaliacao = await prisma.aluno.findMany({
                select: {
                    id: true,
                    nome: true,
                    email: true,
                    avaliacoes: {
                        select: {
                            id: true,
                            disciplina: true,
                            nota: true
                        }
                    }
                }
            })

            return alunoAvaliacao
        } catch (error) {
            handleError(error)
        }
    }

    // CRIAR ALUNO
    public async criar(dados: AlunoDto) {
        try {
            const aluno = await prisma.aluno.create({
                data: dados
            })

            return aluno
        } catch (error) {
            return handleError(error)
        }
    }

    // ATUALIZAR ALUNO
    public async atualizar(id: string, dados: UpdateAlunoDto) {
        try {
            await this.obterPorId(id)

            const aluno = await prisma.aluno.update({
                where: {
                    id
                },
                data: dados
            })

            return aluno
        } catch (error) {
            handleError(error)
        }
    }

    // DELETAR ALUNO
    public async deletar(id: string) {
        try {
            await this.obterPorId(id)

            const alunoExcluido = await prisma.aluno.delete({
                where: {
                    id
                }
            })

            return alunoExcluido
        } catch (error) {
            handleError(error)
        }
    }

}