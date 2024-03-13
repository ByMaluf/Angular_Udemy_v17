/*
 Os Namespaces são uma forma específica do TypeScript para organizar código. 
 Namespaces são simplesmente objetos JavaScript nomeados no namespace global. 
 Isso torna os namespaces uma construção muito simples de usar.
*/
export namespace Pessoa {
  export namespace Maria {
    const data = 1 + 1;
    export let nome = "Maria";

    export const calc = () => {
      return data;
    };
  }

  export namespace Joao {
    const data = 1 + 1;
    export let nome = "João";

    export const calc = () => {
      return data;
    };
  }
}

console.log(`Nome exportado interno: ${Pessoa.Joao.nome}`);
console.log(`Nome exportado interno: ${Pessoa.Maria.nome}`);
