const readlineSync = require('readline-sync');

const valorCompra = readlineSync.questionFloat('Digite o valor da compra: ');

const tipoCliente = readlineSync.question('O cliente e novo ou antigo? ');

if (tipoCliente.toLowerCase() === "novo") {
    console.log(`O valor final da sua compra após o desconto de 10% é: R$${(valorCompra - (valorCompra * 0.10).toFixed(2))}`)

} else if (tipoCliente.toLowerCase() === "antigo"){
    console.log(`O valor final da sua compra após o desconto de 5% é: R$${(valorCompra - (valorCompra * 0.05).toFixed(2))}`)

} else {
    console.log('Resposta Inválida!');
}