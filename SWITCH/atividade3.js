const readlineSync = require('readline-sync');

const escolherPlanos = readlineSync.questionInt("Qual plano de telefonia voce deseja? (1 = Basico, 2 = Intermediario , 3 = Premium):")

let preco;
switch (escolherPlanos) {
    case 1: 
    preco = 44.99;
        console.log("Com o plano Básico você pode fazer até 2 ligações internacionais por mês, 10GB de internet para usar onde quiser e mais 2GB de pacote Bônus de internet pagando sua fatura todo mês no pix!");
    break;

    case 2:  
    preco = 74.99;
        console.log("Com o plano Intermediário, você tem ligações ilimitadas para fora do país para ligar para onde quiser, 32GB de internet e whatsApp ilimitado! ");
    break;

    case 3: 
    preco = 109.99;
        console.log("Com o plano Premium, você tem 56GB de internet, ligações ilimitadas para fora e dentro do país, incluso a proteção do seu smartphone durante 12 meses, além de concorrer a um smartphone Samsung Galaxy S24 Ultra todo mês pagando no cartão de crédito!");
    break;

    default:
        console.log("Resposta inválida. Escolha 1, 2 ou 3");
        preco = 0;
    break;
}
    if (preco > 0) {
        console.log(`O preço do serviço escolhido é R$ ${preco.toFixed(2
        )}.`);
        }