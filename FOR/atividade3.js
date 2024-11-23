const vendasPorDia = [1050, 800, 1850, 1500, 910, 1100, 1390];
const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

console.log("Relatório de Vendas:");
for (let i = 0; i < vendasPorDia.length; i++) {
  console.log(`${diasDaSemana[i]}: R$ ${vendasPorDia[i]}`);
}