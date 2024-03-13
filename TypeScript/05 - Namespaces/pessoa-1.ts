/*
 Os Namespaces são uma forma específica do TypeScript para organizar código. 
 Namespaces são simplesmente objetos JavaScript nomeados no namespace global. 
 Isso torna os namespaces uma construção muito simples de usar.
*/

export namespace Pessoa1 {
  const data = 1 + 1;
  export let nome = "Brenno";

  export const calc = () => {
    return data;
  };
}

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());

import { Pessoa } from "./namespace-aninhados";

console.log(`Nome exportado externo: ${Pessoa.Joao.nome}`);
console.log(`Nome exportado externo: ${Pessoa.Maria.nome}`);
