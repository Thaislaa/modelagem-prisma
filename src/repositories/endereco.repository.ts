import { handleError } from "../config/error.handler.js";
import type { EnderecoDto } from "../dtos/create-endereco.dto.js";
import { prisma } from "../lib/prisma.js";
import { AlunoRepository } from "./aluno.repository.js";
import type { UpdateEnderecoDto } from "../dtos/update-endereco.dto.js";

export class EnderecoRepository {

    // LISTAR ENDEREÇOS
    public async listar() {
        try {
            const enderecos = await prisma.endereco.findMany()

            return enderecos
        } catch (error) {
            handleError(error)
        }
    }

    // OBTER ENDEREÇO POR ID 
    public async obterPorId(id: string) {
        try {
            const encontrado = await prisma.endereco.findUnique({
                where: {
                    id
                }
            })

            if (!encontrado) {
                throw new Error("Endereço não encontrado")
            }

            return encontrado
        } catch (error) {
            handleError(error)
        }
    }

    // CRIAR ENDEREÇO
    public async criar(dados: EnderecoDto) {
        try {
            const alunoRepository = new AlunoRepository()
            await alunoRepository.obterPorId(dados.idAluno)

            const novoEndereco = await prisma.endereco.create({
                data: dados
            })

            return novoEndereco
        } catch (error) {
            handleError(error)
        }
    }

    // ATUALIZAR ENDEREÇO
    public async atualizar(id: string, dados: UpdateEnderecoDto) {
        try {
            await this.obterPorId(id)

            const atualizarEndereco = await prisma.endereco.update({
                where: {
                    id
                },
                data: dados
            })

            return atualizarEndereco
        } catch (error) {
            handleError(error)
        }
    }

    // DELETAR ENDEREÇO
    public async deletar(id: string) {
        try {
            await this.obterPorId(id)

            const excluirEndereco = await prisma.endereco.delete({
                where: {
                    id
                }
            })

            return excluirEndereco
        } catch (error) {
            handleError(error)
        }
    }
}