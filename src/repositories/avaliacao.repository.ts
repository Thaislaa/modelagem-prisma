import { handleError } from "../config/error.handler.js";
import type { AlunoAvaliacaoDto } from "../dtos/create-aluno-avaliacao.dto.js";
import type { AvaliacaoDto } from "../dtos/create-avaliacao.dto.js";
import type { UpdateAvaliacaoDto } from "../dtos/update-avaliacao.dto.js";
import { prisma } from "../lib/prisma.js";
import { AlunoRepository } from "./aluno.repository.js";

export class AvaliacaoRepository {

    // LISTAR AVALIAÇÕES
    public async listar() {
        try {
            const avaliacoes = await prisma.avaliacao.findMany()

            return avaliacoes
        } catch (error) {
            handleError(error)
        }
    }

    // LISTAR AVALIAÇÕES COM AS INFORMAÇÕES DE ALUNOS
    public async listarAvaliacoesComAluno() {
        try {
            const avaliacoes = await prisma.avaliacao.findMany({
                select: {
                    id: true,
                    disciplina: true,
                    nota: true,
                    aluno: {
                        select: {
                            id: true,
                            nome: true,
                            email: true
                        }
                    }
                }
            })

            return avaliacoes
        } catch (error) {
            handleError(error)
        }
    }

    // OBTER AVALIAÇÃO POR ID
    public async obterPorId(id: string) {
        try {
            const encontrado = await prisma.avaliacao.findUnique({
                where: {
                    id
                }
            })

            if (!encontrado) {
                throw new Error("Avaliação não encontrada")
            }

            return encontrado
        } catch (error) {
            handleError(error)
        }
    }

    // CRIAR AVALIAÇÃO
    public async criar(dados: AvaliacaoDto) {
        try {
            const alunoRepository = new AlunoRepository()
            await alunoRepository.obterPorId(dados.idAluno)

            const avaliacao = await prisma.avaliacao.create({
                data: dados
            })

            return avaliacao
        } catch (error) {
            handleError(error)
        }
    }

    // ATUALIZAR AVALIAÇÃO
    public async atualizar(id: string, dados: UpdateAvaliacaoDto) {
        try {
            await this.obterPorId(id)

            const atualizarAvaliacao = await prisma.avaliacao.update({
                where: {
                    id
                },
                data: dados
            })

            return atualizarAvaliacao
        } catch (error) {
            handleError(error)
        }
    }

    // DELETAR AVALIAÇÃO
    public async deletar(id: string) {
        try {
            await this.obterPorId(id)

            const excluirAvaliacao = await prisma.avaliacao.delete({
                where: {
                    id
                }
            })

            return excluirAvaliacao
        } catch (error) {
            handleError(error)
        }
    }
}
