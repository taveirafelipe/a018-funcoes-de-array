const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.8 },
];

function produtosLimpeza(array) {
  let array2 = [];
  for (let produto of array) {
    if (produto.categoria === "Limpeza") {
      array2.push(produto.nome);
    }
  }
  return array2;
}

const apenasLimpeza = produtos.filter((tipo) => {
  return tipo.categoria === "Limpeza";
});

console.log(`Produtos da categoria LIMPEZA: ${produtosLimpeza(produtos)} `);
console.log(`Produtos da categoria LIMPEZA: ${apenasLimpeza} `);
console.log(apenasLimpeza)
