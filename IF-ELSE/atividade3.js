const readlineSync = require('readline-sync');

const valorSalario = readlineSync.questionFloat("Por favor digite o seu salario: ")

if (valorSalario < 2500) {
    console.log(`Seu imposto de renda é de: R$${((valorSalario * 0.10).toFixed(2))}`)
    
} else if (valorSalario >= 2500) {
    console.log(`Seu imposto de renda é de: R$${((valorSalario * 0.20).toFixed(2))}`)
} else {
    console.log(`Resposta inválida!`)
}