const readlineSync = require('readline-sync');

const numeroSorteado = Math.floor(Math.random() * 10) + 1;
let tentativa;

do {
    tentativa = readlineSync.questionInt("Adivinhe um numero entre 1 e 10: ")
       
    
} while (tentativa !== numeroSorteado);

console.log(`Parabéns! Você acertou o número ${numeroSorteado}.`);