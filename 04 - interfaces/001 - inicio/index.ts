/*
 As interfaces TypeScript definem os contratos em seu código. 
 Eles também fornecem nomes explícitos para verificação de tipo.
*/

interface IPessoa {
  nome: string;
  idade: number;
  readonly cpf: number;
  enabled(): boolean;
}

let pessoa: IPessoa = {
  nome: "Brenno",
  idade: 25,
  cpf: 11111111111,
  enabled: () => {
    return true;
  },
};

class Brenno implements IPessoa {
  nome: string = "Ysrael";
  idade: number = 25;
  readonly cpf: number = 11111111111;

  enabled(): boolean {
    return true;
  }
}

const pessoa1 = new Brenno();

console.log(pessoa1.nome);
