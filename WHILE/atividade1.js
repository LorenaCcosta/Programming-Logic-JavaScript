const produtos = [
    { nome: "Blusa azul", estoque: 10 },
    { nome: "Calça branca", estoque: 20 },
    { nome: "Moletom cinza", estoque: 36 },
    { nome: "Moletom preto", estoque: 26 },
    { nome: "Tenis branco", estoque: 17 },
    { nome: "Tenis All Star", estoque: 0 },
    { nome: "Tenis azul", estoque: 23 },
    { nome: "Boné vermelho", estoque: 12 },
    
];

let i = 0;

while (produtos[i].estoque > 0){
    console.log(`${produtos[i].nome}: Estoque = ${produtos[i].estoque}`);
    i++;
}

console.log("Produto com estoque 0 encontrado. Fim da contagem.")