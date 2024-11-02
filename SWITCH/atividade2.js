const readlineSync = require('readline-sync');

const escolherProdutos = readlineSync.questionInt("Qual transporte deseja escolher? (1 = Onibus, 2 = Metro, 3 = Taxi): ")

switch (escolherProdutos) {
    case 1: 
        console.log("A tarifa do Ônibus é de R$5,45");
    break;

    case 2:  
        console.log("A tarifa do Metrô é de R$4,40");
    break;

    case 3: 
        console.log("A tarifa do Táxi é de R$6,00");
        
        break;

    default:
        console.log("Resposta inválida. Escolha 1, 2 ou 3");
        break;
}