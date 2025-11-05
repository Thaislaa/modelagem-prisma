export interface CreateAlunoDto{
    nome: string;
    email: string;
    senha: string;
    dtNascimento?: Date;
    rg?: number;
}