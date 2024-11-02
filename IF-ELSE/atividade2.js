const readlineSync = require('readline-sync');

const rendaMensal = readlineSync.questionFloat("Por favor digite sua renda mensal: ")

if (rendaMensal >= 2000) {
    console.log("Cliente elegível para empréstimo!")
} else {
    console.log("Cliente não é elegível para empréstimo!")
}