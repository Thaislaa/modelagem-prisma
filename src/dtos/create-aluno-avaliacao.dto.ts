import type { AlunoDto } from "./create-aluno.dto.js";

export interface AlunoAvaliacaoDto extends AlunoDto {
    avaliacao: {
        disciplina: string
        nota: number
    }
}