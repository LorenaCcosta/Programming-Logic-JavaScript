const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

for (let i = 0; i < 5; i++) {
  let codigo = '';
  for (let j = 0; j < 12; j++) {
    codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  console.log(codigo);
}