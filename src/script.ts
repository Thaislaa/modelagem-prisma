import { randomUUID } from "node:crypto";
import { AlunoRepository } from "./repositories/aluno.repository.js";
import { AvaliacaoRepository } from "./repositories/avaliacao.repository.js";
import { EnderecoRepository } from "./repositories/endereco.repository.js";
import { MaterialRepository } from "./repositories/material.repository.js";

const alunoRepository = new AlunoRepository()
const avaliacaoRepository = new AvaliacaoRepository()
const enderecoRepository = new EnderecoRepository()
const materialRepository = new MaterialRepository()

async function main() {
    // 1 - Listar alunos
    // const alunos = await alunoRepository.listar()
    // console.log("lISTA DE ALUNOS: ", alunos)

    // 2 - Listar aluno por id
    // const aluno = await alunoRepository.obterPorId("dd67aa72-26e3-4d1f-92e6-933b216fbf6b")
    // console.log(aluno)

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

    // 6 - Criar avaliação
    // const avaliacao = await avaliacaoRepository.criar({
    //     disciplina: "React",
    //     nota: 8,
    //     idAluno: "1a693932-7767-4488-961a-eac873f9aac3"
    // })

    // 7 - Lista avaliação com informações dos alunos
    // const avaliacaoComAlunos = await avaliacaoRepository.listaAvaliacaoComAluno();
    // console.log(avaliacaoComAlunos)

    // 8 - Listar endereços
    // const enderecos = await enderecoRepository.listar()
    // console.log(enderecos);

    // 9 - Criar endereço
    // const novoEndereco = await enderecoRepository.criar({
    //     rua: "Rua Seis de Março",
    //     bairro: "Centenário",
    //     cidade: "Sapiranga",
    //     numero: 45,
    //     idAluno: "1a693932-7767-4488-961a-eac873f9aac3"
    // })
    // console.log(novoEndereco)

    // 10 - Atualizar endereço
    // const atualizarEndereco = await enderecoRepository.atualizar("4669761d-aa49-4e4f-8e9b-560486e2f0c1", {
    //     numero: 46
    // })
    // console.log(atualizarEndereco);

    // 11 - Deletar endereço
    // const deleteEndereco = await enderecoRepository.deletarEndereco("4669761d-aa49-4e4f-8e9b-560486e2f0c1")
    // console.log(deleteEndereco);

    // 12 - Listar materiais
    // const materiais = await materialRepository.listar();
    // console.log(materiais);

    // 13 - Criar material 
    // const criarMaterial = await materialRepository.criar({
    //     titulo: "React Básico",
    //     descricao: "Introdução simples ao React.",
    //     link: "https://react.dev",
    //     disponivel: true
    // })
    // console.log(criarMaterial)

    // 14 - Atualizar material
    // const atualizarMaterial = await materialRepository.atualizar(3, {
    //     titulo: "React Avançado",
    //     descricao: "Material avançado de React"
    // })
    // console.log(atualizarMaterial);

    // 15 - Obter material por id
    // const obterMaterialPorId = await materialRepository.obterPorId(3)
    // console.log(obterMaterialPorId);

    // 16 - Deletar material
    // const deletarMaterial = await materialRepository.deletar(3);
    // console.log(deletarMaterial)
}

main();