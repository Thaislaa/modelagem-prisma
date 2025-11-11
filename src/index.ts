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
    // const alunoCriado = await alunoRepository.criarAluno({
    //     nome: "João Carlos",
    //     email: "joaocarlos@gmail.com",
    //     senha: "1255",
    //     dtNascimento: new Date("1968-02-28"),
    //     rg: 1235589
    // });
    // console.log(alunoCriado);

    // --> Atualizar aluno
    // const alunoAtualizado = await alunoRepository.atualizar("69de6229-14bf-4339-b417-33923db3339d", {
    //     nome: "Jean Lucca Souza",
    //     email: "jeanluccasouza@gmail.com"
    // });
    // console.log(alunoAtualizado);

    // --> Deletar aluno
    // const alunoDeletado = await alunoRepository.deletar("02f60a96-6490-40da-9152-10f438b1b3e0");
    // console.log(alunoDeletado);

    // const aluno = await alunoRepository.listarAlunoNome("jean");
    // console.log(aluno);
    
    const aluno = await alunoRepository.listarDatasNascimentoMaiorQue(new Date ("2000-11-24"));
    console.log(aluno);
}

main();
