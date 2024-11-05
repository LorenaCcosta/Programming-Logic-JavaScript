const readlineSync = require('readline-sync');

const modoPagamento = readlineSync.questionInt("Qual sera o modo de pagamento? (1 = Cartao de Credito, 2 = Cartao de Debito , 3 = Boleto):")

switch (modoPagamento) {
    case 1: 
        console.log("Pagamento concluido com o cartão de credito final xxxx");
    break;

    case 2:  
        console.log("Pagamento concluido com o cartão de debito final xxxx");
    break;

    case 3: 
        console.log("Seu boleto será gerado, após o pagamento seu boleto será compensado em até 2 a 3 dias úteis!");
    break;

    default:
        console.log("Resposta inválida. Escolha 1, 2 ou 3");
    break;
}