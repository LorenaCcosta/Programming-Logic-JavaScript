const readlineSync = require('readline-sync');

const idade = readlineSync.question("Digite sua idade: ")

if (idade >= 18) {
    console.log(`Acesso liberado!`)
} else {
    console.log(`Acesso negado: Aréa restrita para menores de 18 anos!`)
}