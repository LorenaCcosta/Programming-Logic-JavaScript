const funcionarios = [
    { nome: 'João', salario: 2800 },
    { nome: 'Maria', salario: 3200 },
    { nome: 'Pedro', salario: 4500 },
    { nome: 'Ana', salario: 2100 }
  ];
  
  const reajuste = 0.05;
  
  const funcionariosReajustados = funcionarios
    .filter(funcionario => funcionario.salario > 3000)
    .map(funcionario => ({
      ...funcionario,
      salario: funcionario.salario * (1 + reajuste)
    }));
  
  console.log(funcionariosReajustados);