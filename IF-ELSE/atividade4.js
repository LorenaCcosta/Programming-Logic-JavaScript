const readlineSync = require('readline-sync');

const statusPedido = readlineSync.question("Digite o status do pedido, se ele esta em preparacao, em rota ou entregue: ")

if (statusPedido.toLowerCase() === "preparacao") {
    console.log(`O seu pedido está sendo preparado!`)
    
} else if (statusPedido.toLowerCase() === "em rota"){
    console.log(`O seu pedido está indo até você!`)

} else if (statusPedido.toLowerCase() === "entregue"){
    console.log(`O seu pedido foi entregue!`)
} else {
    console.log(`Resposta invalida!`)
}