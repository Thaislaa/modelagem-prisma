import { handleError } from "../config/error.handler.js";
import type { MatriculaDto } from "../dtos/create-matricula.dto.js";
import { prisma } from "../lib/prisma.js";

export class MatriculaRepository {

    // LISTAR MATRÍCULAS
    public async listar() {
        try {
            const matriculas = await prisma.matricula.findMany()
            return matriculas
        } catch (error) {
            handleError(error)
        }
    }

    // OBTER MATRÍCULA POR ID
    public async obterPorId(idCurso: string, idAluno: string) {
        try {
            const encontrado = await prisma.matricula.findUnique({
                where: {
                    idCurso_idAluno: {
                        idCurso,
                        idAluno
                    }
                }
            })

            if (!encontrado) {
                throw new Error("Matricula não encontrada")
            }

            return encontrado
        } catch (error) {
            handleError(error)
        }
    }

    // CRIAR MATRICULA
    public async criar(dados: MatriculaDto) {
        try {
            const matricula = await prisma.matricula.create({
                data: dados
            })

            return matricula
        } catch (error) {
            handleError(error)
        }
    }

    // DELETAR MATRICULA 
    public async deletar(idCurso: string, idAluno: string) {
        try {
            await this.obterPorId(idCurso, idAluno)

            const matricula = await prisma.matricula.delete({
                where: {
                    idCurso_idAluno: {
                        idCurso,
                        idAluno
                    }
                }
            })

            return matricula
        } catch (error) {
            handleError(error)
        }
    }
}