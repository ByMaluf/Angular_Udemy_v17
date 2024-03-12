class Pessoa{
  //readonly - apenas leitura
  public readonly nome: string = "Brenno Correia"
}

let pessoa = new Pessoa();


console.log(pessoa.nome)
//Errado pois a propriedade é apenas de leitura
pessoa.nome = 'Breninho'
console.log(pessoa.nome)
