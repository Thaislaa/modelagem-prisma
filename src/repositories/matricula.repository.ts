import { handleError } from "../config/error.handler.js";
import type { MatriculaDto } from "../dtos/create-matricula.dto.js";
import { prisma } from "../lib/prisma.js";
import { AlunoRepository } from "./aluno.repository.js";
import { CursoRepository } from "./curso.repository.js";

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
                throw new Error("Matrícula não encontrada")
            }

            return encontrado
        } catch (error) {
            handleError(error)
        }
    }

    // CRIAR MATRÍCULA
    public async criar(dados: MatriculaDto) {
        try {
            const cursoRepository = new CursoRepository()
            const alunoRepository = new AlunoRepository()

            await cursoRepository.obterPorId(dados.idCurso)
            await alunoRepository.obterPorId(dados.idAluno)

            const matriculado = await prisma.matricula.findUnique({
                where: {
                    idCurso_idAluno: {
                        idCurso: dados.idCurso,
                        idAluno: dados.idAluno
                    }
                }
            })

            if (matriculado) {
                throw new Error("Aluno já matriculado nesse curso")
            }

            const matricula = await prisma.matricula.create({
                data: dados
            })

            return matricula
        } catch (error) {
            handleError(error)
        }
    }

    // DELETAR MATRÍCULA 
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