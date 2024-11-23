const readlineSync = require('readline-sync');

let addCliente;
let listaCliente = "";

do {

    addCliente = readlineSync.question("Digite o nome do cliente ou (digite 'sair' para finalizar): ")

    listaCliente += addCliente + ", ";

    console.log(`lista de clientes: ${listaCliente} `)

} while (addCliente !== "sair");

console.log("Finalizado!")