const fn = (nome: string, idade?: number) => {
  if (!idade) {
    return `nome: ${nome} idade: sem valor definido`;
  } else {
    return `nome: ${nome} idade: ${idade}`;
  }
};

console.log(fn("Dener"));
console.log(fn("Dener", 31));

const pessoa: { nome: string; idade?: number } = { nome: "Brenno", idade: 31 };
