const readlineSync = require('readline-sync');

let totalVendas = 0;
const meta = 10000;

while (totalVendas < meta) {
    const vendasDiarias = readlineSync.questionFloat("Digite suas vendas diarias: ");
    totalVendas += vendasDiarias;
    console.log(`Vendas acumuladas: R$ ${totalVendas.toFixed(2)}`);
    
}

console.log("Parabéns! Você atingiu a meta de R$ 10.000!!!");