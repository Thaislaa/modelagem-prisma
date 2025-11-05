import { prisma } from "../config/prisma.config";

export class AlunoRepository{
    public async list(){
        const alunos = await prisma.aluno.findMany();
        return alunos;
    }
}