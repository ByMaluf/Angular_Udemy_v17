// Uma classe em typescript é uma estrutura de programação orientada a objetos que possui um conjunto de propriedades e métodos.
// A classe é um modelo para criar objetos, permitindo que você defina uma estrutura com propriedades e comportamentos.

class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  //Métodos (Adiantei os métodos aqui somente para teste)
  imprimirNome() {
    console.log(`Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const brenno = new Pessoa("Brenno", 25);
const flavia = new Pessoa("Flávia", 24);

console.log("Chamando o método de cada objeto");

brenno.imprimirNome();
flavia.imprimirNome();

console.log("Chamando cada atributo de cada objeto separadamente");
console.log(`Oi, meu nome é ${brenno.nome} e tenho ${brenno.idade} anos.`);
console.log(`Oi, meu nome é ${flavia.nome} e tenho ${flavia.idade} anos.`);
