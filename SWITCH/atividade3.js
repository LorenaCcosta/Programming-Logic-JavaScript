const readlineSync = require('readline-sync');

const escolherPlanos = readlineSync.questionInt("Qual plano de telefonia que você deseja? (1 = Basico, 2 = Intermediario , 3 = Premium):")

switch (escolherPlanos) {
    case 1: 
        console.log("Com o plano Básico você pode fazer até 5 ligações internacionais por mês, 10GB de internet para usar onde quiser e mais 2GB de pacote Bônus de internet pagando sua fatura todo mês no pix!");
    break;

    case 2:  
        console.log("Com o plano Intermediário, você tem ligações ilimitadas para fora do país para ligar para quem quiser, 32GB de internet e whatsApp ilimitado! ");
    break;

    case 3: 
        console.log("Com o plano Premium, você tem 56GB de internet, ligações ilimitadas para fora e dentro do país, incluso a proteção do seu smartphone durante 12 meses, além de concorrer a um smartphone Samsung Galaxy S24 Ultra todo mês pagando no cartão de crédito!");
    break;

    default:
        console.log("Resposta inválida. Escolha 1, 2 ou 3");
    break;
}
