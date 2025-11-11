import { CreateAlunoDto } from './../dtos/create-aluno.dto';
import { prisma } from "../config/prisma.config";
import { handleError } from '../config/error.handler';
import { UpdateAlunoDto } from '../dtos/update-aluno.dto';

export class AlunoRepository {
    public async list() {
        try {
            const alunos = await prisma.aluno.findMany();
            return alunos;
        } catch (error: any) {
            return handleError(error);
        }
    }

    public async buscaId(id: string) {
        try {
            const aluno = await prisma.aluno.findUnique({
                where: {
                    id: id
                }
            });
            return aluno;
        } catch (error: any) {
            return handleError(error);
        }
    }

    public async criarAluno(dados: CreateAlunoDto) {
        try {
            const aluno = await prisma.aluno.create({
                data: dados
            });
            return aluno;
        } catch (error: any) {
            return handleError(error);
        }
    }

    public async atualizar(id: string, dados: UpdateAlunoDto){
        try {
            const aluno = await prisma.aluno.update({
                where: {
                    id
                },
                data: dados
        });
        return aluno;  
        } catch (error: any){
            return handleError(error);
        }
    }

    
}