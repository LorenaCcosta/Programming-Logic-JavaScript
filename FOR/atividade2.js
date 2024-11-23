const readlineSync = require('readline-sync');

const numero = readlineSync.questionInt("Digite um numero: ")

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}