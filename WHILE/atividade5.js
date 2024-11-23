const readlineSync = require('readline-sync');

const maxAlunos = 30;
let contadorAlunos = 0;

while (contadorAlunos < maxAlunos) {
    const nomeAluno = readlineSync.question("Digite o nome do aluno: ")
    const nota = readlineSync.question(`Digite a nota do(a) aluno(a) ${nomeAluno}: `)

    console.log(`O(a) aluno(a) ${nomeAluno} tem a nota: ${nota}`);

    contadorAlunos++;
    
}

 console.log(`Todos os ${contadorAlunos} alunos já foram inseridos as notas!`);