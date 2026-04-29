export interface CursoDto {
    titulo: string
    ementa: string
    status: "ATIVO" | "INATIVO"
    cargaHoraria: number
    maxAlunos?: number
}