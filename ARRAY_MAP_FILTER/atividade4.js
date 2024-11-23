const clientes = [
    { nome: 'Fernando', compras: [20, 30, 50, 10] },
    { nome: 'Julia', compras: [100, 30] },
    { nome: 'Rafael', compras: [10, 20, 10, 30, 20] },
    { nome: 'Amanda', compras: [50] }
  ];
  
  const calcularTotal = (compras) => compras.reduce((total, compra) => total + compra, 0);
  
  const clientesComMaisDeTresCompras = clientes
    .filter(cliente => cliente.compras.length > 3)
    .map(cliente => ({
      ...cliente,
      totalGasto: calcularTotal(cliente.compras)
    }));
  
  console.log(clientesComMaisDeTresCompras);