const produtos = [
    { nome: 'Mouse', preco: 50, estoque: 15 },
    { nome: 'Teclado', preco: 100, estoque: 5 },
    { nome: 'Monitor', preco: 300, estoque: 20 },
    { nome: 'Cadeira', preco: 500, estoque: 8 }
  ];
  
  const desconto = 0.15;
  
  const produtosEmPromocao = produtos
    .filter(produto => produto.estoque > 10)
    .map(produto => ({
      ...produto,
      precoComDesconto: produto.preco * (1 - desconto)
    }));
  
  console.log("Produtos em promoção:");
  produtosEmPromocao.forEach(produto => {
    console.log(`${produto.nome}: R$ ${produto.precoComDesconto.toFixed(2)}`);
  });