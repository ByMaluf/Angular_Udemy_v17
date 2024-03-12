// Array chumbado - chama-se "Tupla"
let array1: [string, string, number, boolean] = [
  "Denner Troquatte",
  "teste",
  123,
  true,
];

// Array Dinâmico
let array2: Array<string | number | boolean | object> = [
  "Denner",
  "Troquatte",
  { nome: "Dener" },
];

// Objeto dinâmico
let obj1: {} = { nome: "Denner" };

// Objeto Fixo
let obj2: { nome: string; sobrenome: string; idade: number; deuBom: boolean } =
  {
    nome: "Denner",
    sobrenome: "Troquatte",
    idade: 123,
    deuBom: true,
  };

// Array de objetos
let obj3: Array<{
  nome: string;
  sobrenome: string;
  idade: number;
  deuBom: boolean;
}> = [
  {
    nome: "Denner",
    sobrenome: "Troquatte",
    idade: 123,
    deuBom: true,
  },
  {
    nome: "Denner1",
    sobrenome: "Troquatte",
    idade: 345,
    deuBom: true,
  },
  {
    nome: "Denner2",
    sobrenome: "Troquatte",
    idade: 78,
    deuBom: true,
  },
];

console.log("Array Chumbado --- " + array1);
console.log("Array Dinâmico --- " + array2);

// A saída "[object Object]" ocorre ao converter objetos para strings sem uma representação de string específica definida.
// Isso acontece porque o método toString() padrão de um objeto retorna "[object Object]" na ausência de uma implementação personalizada.
// Para imprimir objetos de maneira legível, use JSON.stringify(obj), que gera uma string JSON representando o objeto.

console.log("Objeto dinâmico --- " + JSON.stringify(obj1));
console.log("Objeto Fixo --- " + JSON.stringify(obj2));
console.log("Array de objetos --- " + JSON.stringify(obj3));

// Percorrendo um array ou objeto
obj3.forEach((item) => {
  console.log(
    `Nome: ${item.nome}, Sobrenome: ${item.sobrenome}, Idade: ${item.idade}, DeuBom: ${item.deuBom}`
  );
});

obj3.forEach((item) => {
  console.log(Object.values(item));
});

obj3.forEach((item) => {
  console.log(item.nome, item.sobrenome, item.idade, item.deuBom);
});

for (const value of Object.values(obj2)) {
  console.log(value);
}
