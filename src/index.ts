import { AlunoRepository } from "./database/aluno.repository";

const alunoRepository = new AlunoRepository();

async function main() { 
    // --> Listar alunos
    // const alunos = await alunoRepository.list();
    // console.log(alunos);

    // --> Buscar aluno por id
    // const aluno = await alunoRepository.buscaId("69de6229-14bf-4339-b417-33923db3339d");
    // console.log(aluno);

    // --> Criar aluno
    const alunoCriado = await alunoRepository.criarAluno({
        nome: "João Carlos",
        email: "joaocarlos@gmail.com",
        senha: "1255",
        dtNascimento: new Date("1968-02-28"),
        rg: 1235589
    });
    console.log(alunoCriado);
}
main();
