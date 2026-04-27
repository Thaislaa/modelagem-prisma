import { handleError } from "../config/error.handler.js";
import type { AlunoDto } from "../dtos/create-aluno.dto.js";
import type { UpdateAlunoDto } from "../dtos/update-aluno.dto.js";
import { prisma } from "../lib/prisma.js";

export class AlunoRepository {
    // LISTA ALUNOS
    public async list() {
        try {
            const alunos = await prisma.aluno.findMany()
            return alunos
        } catch (error) {
            return handleError(error)
        }
    }

    // LISTA ALUNO POR ID
    public async obterPorId(id: string) {
        try {
            const aluno = await prisma.aluno.findUnique({
                where: {
                    id: id
                }
            })
            return aluno
        } catch (error) {
            return handleError(error)
        }
    }

    // CRIA ALUNO
    public async criarAluno(dados: AlunoDto) {
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
    public async excluir(id: string) {
        try {
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