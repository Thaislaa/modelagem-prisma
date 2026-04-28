import { handleError } from "../config/error.handler.js";
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
    public async listaAvaliacaoComAluno() {
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

    // CRIAR AVALIAÇÕES
    public async criar(dados: AvaliacaoDto) {
        try {
            const alunoRepository = new AlunoRepository()
            const aluno = await alunoRepository.obterPorId(dados.idAluno)

            if (!aluno) {
                throw new Error("Aluno não encontrado")
            }

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
            const atualizarAvaliacao = await prisma.avaliacao.update({
                where: {
                    id: id
                },
                data: dados
            })

            return atualizarAvaliacao
        } catch (error) {
            handleError(error)
        }
    }

    // DELETAR AVALIAÇÃO
    public async deletarAvaliacao(id: string) {
        try {
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