import { handleError } from "../config/error.handler.js";
import type { AvaliacaoDto } from "../dtos/create-avaliacao.dto.js";
import { prisma } from "../lib/prisma.js";
import { AlunoRepository } from "./aluno.repository.js";

export class AvaliacaoRepository {
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
}