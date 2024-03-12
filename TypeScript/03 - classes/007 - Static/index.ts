/*
  A palavra chave static define um método estático para a classe. 
  Métodos estáticos não são chamados na instâncias da classe. 
  Em vez disso, eles são chamados na própria classe. 
  Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.
*/

class Utils {
  static cloneObject(object: Array<{}>) {
    return JSON.parse(JSON.stringify(Object.assign(object)));
  }
}

class Pessoa {
  public variasPessoas(pessoa: Array<{}>) {
    Utils.cloneObject(pessoa);
  }
}

const tenis1: { tamanho: number; estoque: boolean } = {
  tamanho: 41,
  estoque: true,
};

const tenis2: { tamanho: number; estoque: boolean } = {
  tamanho: 41,
  estoque: true,
};

const pessoa1: { nome: string; idade: number } = {
  nome: "Brenno",
  idade: 25,
};

console.log(Utils.cloneObject([tenis1, tenis2]));
console.log(Utils.cloneObject([pessoa1]));
