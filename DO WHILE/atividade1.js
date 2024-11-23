const readlineSync = require('readline-sync');

const pinCorreto = 1234;
let pin;

do {
    pin = readlineSync.questionInt("Digite o PIN: ")
    console.log("PIN incorreto. Tente novamente.");
    
} while (pin !== pinCorreto);

console.log("PIN correto, Acesso liberado!")