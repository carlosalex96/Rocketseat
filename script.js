/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [
    {
    nome: "Lucas",
    nota1: 6,
    nota2: 7,
    },
    {
        nome: "Adriano",
        nota1: 8,
        nota2: 7,
    },
    {
        nome: "Luana",
        nota1: 9,
        nota2: 6,
    },
    {
        nome: "Julia",
        nota1: 10,
        nota2: 7,
    }
]

function media (nota1, nota2) {
    return ((nota1) + (nota2) /2)
}

if(media >= 7) {
    alert("Aluno Aprovado")

}

else {
    alert("Reprovado")
}
  


