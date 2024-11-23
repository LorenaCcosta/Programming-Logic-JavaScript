const readlineSync = require('readline-sync');

let contadorFuncionarios = 0;

while (contadorFuncionarios < 5) {
    const nomeFuncioario = readlineSync.question("Digite o nome: ")
    const idadeFuncionario = readlineSync.question("Digite a idade: ")
    const numTelefoneFuncionario = readlineSync.question("Digite o numero de telefone: ")

    console.log("Cadastrando funcionario...")

    console.log(`${nomeFuncioario}: Idade = ${idadeFuncionario} | Telefone para contato: ${numTelefoneFuncionario}`);
    contadorFuncionarios++;

}

console.log("Número máximo de funcionários atingido.")
