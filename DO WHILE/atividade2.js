const readlineSync = require('readline-sync');

let addMaisItens;
let pedido;

do {
    addMaisItens = readlineSync.question("Deseja adicionar mais itens? (sim/nao): ")
    
} while (addMaisItens !== "nao");

console.log("Pedido finalizado.");
