const readlineSync = require('readline-sync');

const operacaoBanco = readlineSync.questionInt("Qual operacao deseja fazer? (1 = Consultar saldo, 2 = Deposito , 3 = Saque): ")

let saldoBanco = 1859.38

switch (operacaoBanco) {
    case 1: 
        console.log(`Seu saldo é de R$${saldoBanco}`);
    break;

    case 2:  

        let valorDeposito = readlineSync.question("Digite o valor a ser depositado: ");
        console.log(`Deposito de R$${valorDeposito} realizado com sucesso`);
    break;

    case 3: 

        let valorSaque = readlineSync.question("Digite o valor a ser sacado: ");
        console.log(`Saque de R$${valorSaque} realizado`);
    break;

    default:
        console.log("Resposta inválida. Escolha 1, 2 ou 3");
    break;
}