const readlineSync = require('readline-sync');

const escolherPlanos = readlineSync.questionInt("Qual plano de telefonia voce deseja? (1 = Basico, 2 = Intermediario , 3 = Premium):")

let preco;
switch (escolherPlanos) {
    case 1: 
        console.log("Com o plano Básico você pode fazer até 2 ligações internacionais por mês, 10GB de internet para usar onde quiser e mais 2GB de pacote Bônus de internet pagando sua fatura todo mês no pix! Por apenas 44,99!");
    break;

    case 2:
        console.log("Com o plano Intermediário, você tem ligações ilimitadas para fora do país para ligar para onde quiser, 32GB de internet e whatsApp ilimitado! Por apenas 74,99!");
    break;

    case 3:
        console.log("Com o plano Premium, você tem 56GB de internet, ligações ilimitadas para fora e dentro do país, incluso a proteção do seu smartphone durante 12 meses, além de concorrer a um SmartPhone Samsung Galaxy S24 Ultra todo mês pagando no cartão de crédito! Por apenas 109,99!");
    break;

    default:
        console.log("Resposta inválida. Escolha 1, 2 ou 3");
    break;
}