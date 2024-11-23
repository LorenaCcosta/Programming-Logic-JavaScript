const readlineSync = require('readline-sync');

let desconto = 1;
let totalProdutos = 0;

while (desconto <= 10) {
    let produto = readlineSync.question(`Digite o nome do produto: `);

    console.log(`${produto} adicionado! Total de desconto: ${desconto}%`)
    
    totalProdutos++;
    desconto++;
   
}

console.log(`Desconto máximo de 10% atingido após ${totalProdutos} produtos adicionados!`)