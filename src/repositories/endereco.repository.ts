import { handleError } from "../config/error.handler.js";
import type { EnderecoDto } from "../dtos/create-endereco.dto.js";
import { prisma } from "../lib/prisma.js";
import { AlunoRepository } from "./aluno.repository.js";
import type { UpdateEnderecoDto } from "../dtos/update-endereco.dto.js";
import { error } from "node:console";

export class EnderecoRepository {

    // LISTAR ENDEREÇOS
    public async listar() {
        try {
            const enderecos = prisma.endereco.findMany()
            return enderecos
        } catch (error) {
            handleError(error)
        }
    }

    // CRIAR ENDEREÇOS
    public async criar(dados: EnderecoDto) {
        try {
            const alunoRepository = new AlunoRepository()
            const aluno = await alunoRepository.obterPorId(dados.idAluno);

            if (!aluno) {
                throw new Error("Aluno não encontrado")
            }

            const novoEndereco = await prisma.endereco.create({
                data: dados
            })

            return novoEndereco
        } catch (error) {
            handleError(error)
        }
    }

    // ATUALIZAR ENDEREÇOS
    public async atualizar(id: string, dados: UpdateEnderecoDto) {
        try {
            const atualizarEndereco = await prisma.endereco.update({
                where: {
                    id: id
                },
                data: dados
            })

            return atualizarEndereco
        } catch (error) {
            handleError(error)
        }
    }

    // DELETAR ENDERECO
    public async deletarEndereco(id: string) {
        try {
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