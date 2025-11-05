import { AlunoRepository } from "./database/aluno.repository";

const alunoRepository = new AlunoRepository();

async function main() { 
    const alunos = await alunoRepository.list();
    console.log(alunos);
}
main();
