const vendedores = [
  { nome: "Lucas", vendas: [1000, 2000, 1500] },
  { nome: "Carla", vendas: [500, 3000, 1000] },
  { nome: "Beto", vendas: [2000, 2000, 1500] },
  { nome: "Ana", vendas: [3000, 3000, 2000] },
];

let meta = 5000;

const vendedoresAcimaDaMeta = vendedores.map(vendedor => ({
    ...vendedor,
    totalVendas: vendedor.vendas.reduce((total, venda) => total + venda, 0)
  })).filter(vendedor => vendedor.totalVendas >= meta);
  
  console.log(vendedoresAcimaDaMeta);