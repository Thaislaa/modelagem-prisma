import { handleError } from "../config/error.handler.js";
import type { CursoDto } from "../dtos/create-curso.dto.js";
import type { UpdateCursoDto } from "../dtos/update-curso.dto.js";
import { prisma } from "../lib/prisma.js";

export class CursoRepository {

    // LISTAR CURSOS
    public async listar() {
        try {
            const cursos = await prisma.curso.findMany()

            return cursos
        } catch (error) {
            handleError(error)
        }
    }

    // OBTER CURSO POR ID
    public async obterPorId(id: string) {
        try {
            const encontrado = await prisma.curso.findUnique({
                where: {
                    id
                }
            })

            if (!encontrado) {
                throw new Error("Curso não encontrado")
            }

            return encontrado
        } catch (error) {
            handleError(error)
        }
    }

    // CRIAR CURSO
    public async criar(dados: CursoDto) {
        try {
            const curso = await prisma.curso.create({
                data: dados
            })

            return curso
        } catch (error) {
            handleError(error)
        }
    }

    // ATUALIZAR CURSO 
    public async atualizar(id: string, dados: UpdateCursoDto) {
        try {
            await this.obterPorId(id)

            const curso = await prisma.curso.update({
                where: {
                    id
                },
                data: dados
            })

            return curso
        } catch (error) {
            handleError(error)
        }
    }

    // DELETAR CURSO
    public async deletar(id: string) {
        try {
            await this.obterPorId(id)

            const curso = await prisma.curso.delete({
                where: {
                    id
                }
            })

            return curso
        } catch (error) {
            handleError(error)
        }
    }
}