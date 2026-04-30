import { AlunoRepository } from "./repositories/aluno.repository.js";
import { AvaliacaoRepository } from "./repositories/avaliacao.repository.js";
import { EnderecoRepository } from "./repositories/endereco.repository.js";
import { MaterialRepository } from "./repositories/material.repository.js";
import { CursoRepository } from "./repositories/curso.repository.js";
import { MatriculaRepository } from "./repositories/matricula.repository.js";

const alunoRepository = new AlunoRepository()
const avaliacaoRepository = new AvaliacaoRepository()
const enderecoRepository = new EnderecoRepository()
const materialRepository = new MaterialRepository()
const cursoRepository = new CursoRepository()
const matriculaRepository = new MatriculaRepository()

async function main() {
    // 1 - Listar alunos
    // const alunos = await alunoRepository.listar()
    // console.log("lISTA DE ALUNOS: ", alunos)

    // 2 - Listar aluno por id
    // const obterAlunoPorId = await alunoRepository.obterPorId("dd67aa72-26e3-4d1f-92e6-933b216fbf6b")
    // console.log(obterAlunoPorId)

    // 3 - Criar aluno
    // const criarAluno = await alunoRepository.criar({
    //     nome: "Alana Souza",
    //     email: "alanasouza@gmail.com",
    //     senha: "123456",
    //     dtNascimento: new Date("2007-08-22"),
    // })
    // console.log(criarAluno);

    // 4 - Atualizar aluno
    // const atualizarAluno = await alunoRepository.atualizar(
    //     "dd67aa72-26e3-4d1f-92e6-933b216fbf6b",
    //     {
    //         nome: "Maria Souza Matos",
    //         email: "mariasouza@gmail.com"
    //     }
    // )
    // console.log(atualizarAluno);

    // 5 - Deletar aluno
    // const deletarAluno = await alunoRepository.deletar("dd67aa72-26e3-4d1f-92e6-933b216fbf6b")
    // console.log(deletarAluno)

    // 6 - Criar avaliação
    // const criarAvaliacao = await avaliacaoRepository.criar({
    //     disciplina: "React",
    //     nota: 8,
    //     idAluno: "1a693932-7767-4488-961a-eac873f9aac3"
    // })
    // console.log(criarAvaliacao);

    // 7 - Lista avaliação com informações dos alunos
    // const avaliacaoComAlunos = await avaliacaoRepository.listarAvaliacoesComAluno();
    // console.log(avaliacaoComAlunos)

    // 8 - Listar endereços
    // const enderecos = await enderecoRepository.listar()
    // console.log(enderecos);

    // 9 - Criar endereço
    // const criarEndereco = await enderecoRepository.criar({
    //     rua: "Rua Seis de Março",
    //     bairro: "Centenário",
    //     cidade: "Sapiranga",
    //     numero: 45,
    //     idAluno: "1a693932-7767-4488-961a-eac873f9aac3"
    // })
    // console.log(criarEndereco)

    // 10 - Atualizar endereço
    // const atualizarEndereco = await enderecoRepository.atualizar("4669761d-aa49-4e4f-8e9b-560486e2f0c1", {
    //     numero: 46
    // })
    // console.log(atualizarEndereco);

    // 11 - Deletar endereço
    // const deletarEndereco = await enderecoRepository.deletar("4669761d-aa49-4e4f-8e9b-560486e2f0c1")
    // console.log(deletarEndereco);

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

    // 17 - Listar cursos
    // const cursos = await cursoRepository.listar()
    // console.log(cursos);

    // 18 - Criar Curso
    // const criarCurso = await cursoRepository.criar({
    //     titulo: "Frontend Completo",
    //     ementa: "HTML, CSS, JavaScript",
    //     status: "ATIVO",
    //     cargaHoraria: 80,
    //     maxAlunos: 35
    // })
    // console.log(criarCurso);

    // 19 - Atualiazar Curso 
    // const atualizarCurso = await cursoRepository.atualizar("a3336890-9c0f-4a02-adfb-0f858fe373ed", {
    //     titulo: "FrontEnd Completo com React",
    //     cargaHoraria: 100
    // })
    // console.log(atualizarCurso)

    // 20 - Deletar Curso
    // const deletarCurso = await cursoRepository.deletar("a3336890-9c0f-4a02-adfb-0f858fe373ed")
    // console.log(deletarCurso);

    // 21 - Listar matriculas
    // const matriculas = await matriculaRepository.listar()
    // console.log(matriculas);

    // 22 - Criar matricula 
    // const criarMatricula = await matriculaRepository.criar({
    //     idAluno: "29024a2e-5f50-41f4-a70f-f34c1e14f6cb",
    //     idCurso: "7da5eeab-4bfa-4c62-aa99-3b5b820c3192"
    // })
    // console.log(criarMatricula);

    // 23 - Obter matricula por id
    // const obterMatriculaPorId = await matriculaRepository.obterPorId(
    //     "29024a2e-5f50-41f4-a70f-f34c1e14f6cb",
    //     "7da5eeab-4bfa-4c62-aa99-3b5b820c3192"
    // )
    // console.log(obterMatriculaPorId);

    // 24 - Deletar matricula 
    // const deletarMatricula = await matriculaRepository.deletar(
    //     "29024a2e-5f50-41f4-a70f-f34c1e14f6cb",
    //     "7da5eeab-4bfa-4c62-aa99-3b5b820c3192",
    // )
    // console.log(deletarMatricula);

    // 25 - Criar aluno + avaliação 
    // const criarAlunoAvaliacao = await avaliacaoRepository.criarAlunoAvaliacao({
    //     nome: "Carlos Eduardo",
    //     email: "carloshenrich@gmail.com",
    //     senha: "12345",
    //     dtNascimento: new Date("2000-05-25"),
    //     avaliacao: {
    //         disciplina: "React",
    //         nota: 7,
    //     }
    // })
    // console.log(criarAlunoAvaliacao);
}

main(); 