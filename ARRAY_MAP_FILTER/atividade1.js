const produtos = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 120 },
  { nome: "Tênis", preco: 80 },
  { nome: "Boné", preco: 30 },
];

const imposto = 0.1; 

const produtosComImpostoEBaratos = produtos.map(produto => {
  const precoComImposto = produto.preco * (1 + imposto);
  return {
    ...produto,
    precoComImposto
  };
}).filter(produto => produto.precoComImposto < 100);

console.log(produtosComImpostoEBaratos);