const readlineSync = require('readline-sync');

const escolherProdutos = readlineSync.questionInt("Qual produto deseja comprar? (1 = Arroz, 2 = Feijao, 3 = Macarrao): ")
switch (escolherProdutos) {
    case 1: 
        console.log("Você escolheu Arroz");
    break;

    case 2:  
        console.log("Você escolheu Feijão");
    break;

    case 3: 
        console.log("Você escolheu Macarrão");
    break;

    default:
        console.log("Resposta inválida. Escolha 1, 2 ou 3");
    break;
}
