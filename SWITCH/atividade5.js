const readlineSync = require('readline-sync');

const operacaoBanco = readlineSync.questionInt("Qual operação deseja fazer? (1 = Consultar saldo, 2 = Deposito , 3 = Saque):")

switch (operacaoBanco) {
    case 1: 
        console.log("");
    break;

    case 2:  
        console.log("");
    break;

    case 3: 
        console.log("");
    break;

    default:
        console.log("Resposta inválida. Escolha 1, 2 ou 3");
    break;
}