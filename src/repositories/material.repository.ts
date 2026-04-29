import { handleError } from "../config/error.handler.js";
import type { MaterialDto } from "../dtos/create-material.dto.js";
import type { UpdateMaterialDto } from "../dtos/update-material.dto.js";
import { prisma } from "../lib/prisma.js";

export class MaterialRepository {

    // LISTAR MATERIAIS
    public async listar() {
        try {
            const materiais = await prisma.material.findMany()
            return materiais
        } catch (error) {
            handleError(error)
        }
    }

    // OBTER MATERIAL POR ID
    public async obterPorId(id: number) {
        try {
            const material = await prisma.material.findUnique({
                where: {
                    id
                }
            })

            if (!material) {
                throw new Error("Material não encontrado")
            }

            return material
        } catch (error) {
            handleError(error)
        }
    }


    // CRIAR MATERIAL
    public async criar(dados: MaterialDto) {
        try {
            const material = await prisma.material.create({
                data: dados
            })
            return material
        } catch (error) {
            handleError(error)
        }
    }

    // ATUALIZAR MATERIAL 
    public async atualizar(id: number, dados: UpdateMaterialDto) {
        try {
            await this.obterPorId(id)

            const material = await prisma.material.update({
                where: {
                    id
                },
                data: dados
            })

            return material
        } catch (error) {
            handleError(error)
        }
    }

    // DELETAR MATERIAL
    public async deletar(id: number) {
        try {
            await this.obterPorId(id)

            const material = await prisma.material.delete({
                where: {
                    id
                }
            })

            return material
        } catch (error) {
            handleError(error)
        }
    }
}