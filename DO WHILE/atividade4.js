const readlineSync = require('readline-sync');

let codigoProduto;

do {
    codigoProduto = readlineSync.question("Digite o codigo do produto (deve comecar com 'P'): ")
    
} while (!codigoProduto.startsWith("P"));

console.log(`Código ${codigoProduto} aceito!`);