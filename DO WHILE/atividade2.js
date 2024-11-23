const readlineSync = require('readline-sync');

let addMaisItens;

do {
    addMaisItens = readlineSync.question("Deseja adicionar mais itens? (sim/nao): ")
    
} while (addMaisItens !== "nao");

console.log("Pedido finalizado.");
