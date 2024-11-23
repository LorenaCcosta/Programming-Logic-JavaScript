const readlineSync = require('readline-sync');

let meta = 5000;

for (let i = 1; i <= 5; i++) {
    let vendasMensais = readlineSync.questionFloat(`Digite o total de vendas do vendedor ${i} (R$): `);
    if (vendasMensais >= meta) {
        console.log(`Vendedor ${i}: Meta atingida!`);
    } else {
        console.log(`Vendedor ${i}: Meta não atingida.`);
    }
}
