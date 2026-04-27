import { randomUUID } from "node:crypto";
import { AlunoRepository } from "./repositories/aluno.repository.js";

const alunoRepository = new AlunoRepository();

async function main() {
    // 1 - Listar alunos
    const alunos = await alunoRepository.list();
    console.log("lISTA DE ALUNOS: ", alunos);

    // 2 - Listar aluno por id
    // const aluno = await alunoRepository.obterPorId("dd67aa72-26e3-4d1f-92e6-933b216fbf6b");
    // console.log(aluno);

    // 3 - Criar aluno
    // const aluno = await alunoRepository.criarAluno({
    //     nome: "Alana Souza",
    //     email: "alanasouza@gmail.com",
    //     senha: "123456",
    //     dtNascimento: new Date("2007-08-22"),
    // })

    // 4 - Atualizar aluno
    // const alunoAtualizado = await alunoRepository.atualizar(
    //     "dd67aa72-26e3-4d1f-92e6-933b216fbf6b",
    //     {
    //         nome: "Maria Souza Matos",
    //         email: "mariasouza@gmail.com"
    //     }
    // )
    // console.log(alunoAtualizado);

    // 5 - Deletar aluno
    // const alunoExcluido = await alunoRepository.excluir("dd67aa72-26e3-4d1f-92e6-933b216fbf6b")
    // console.log(alunoExcluido)
}

main();