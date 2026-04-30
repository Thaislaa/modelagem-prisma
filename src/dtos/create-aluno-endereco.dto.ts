import type { AlunoDto } from "./create-aluno.dto.js";

export interface AlunoEnderecoDto extends AlunoDto {
    endereco: {
        rua: string
        bairro: string
        cidade: string
        numero: number
    }
}