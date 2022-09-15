const objeto = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

//Funcao1
function caixaAlta(obj) {
  let objeto2 = {};
  objeto2["nome"] = obj.nome.toUpperCase();
  objeto2["profissao"] = obj.profissao.toUpperCase();
  objeto2["username"] = obj.username.toUpperCase();
  objeto2["senha"] = obj.senha.toUpperCase();

  return objeto2;
}
//Funcao1.1
function caixaAlta2(obj) {
  for (let iteracao in obj) {
    obj[iteracao] = obj[iteracao].toUpperCase();
  }
  return obj;
}

//Funcao2
function texto(obj) {
  return `Nome: ${obj.nome}, Profissão: ${obj.profissao}, Username: ${obj.username} e Senha:${obj.senha} `;
}
//Funcao2.1
function texto2(obj) {
  let text = "";
  for (let i in obj) {
    text += (`${obj[i]}, `);
  }
  return text;
}

//Funcao3
const funcaoNova = (obj, funcao) => {
  console.log(funcao(obj));
};

funcaoNova(objeto, caixaAlta);
funcaoNova(objeto, caixaAlta2);
funcaoNova(objeto, texto);
funcaoNova(objeto, texto2)
