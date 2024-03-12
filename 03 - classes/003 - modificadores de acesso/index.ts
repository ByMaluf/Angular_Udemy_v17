/*
  public -      Pode ser acessado tanto pela mesma classe, 
                classes filhas e outras classes.
  ##############################################################################
  protected -   Pode ser acessado pela mesma classe e classes filhas, 
                não pode ser acessado por outras classes.
  ##############################################################################
  private -     Pode ser acessada somente pela própria classe.
*/

// ( public ( protect ( private ) ) )

class Pessoa {
  private nome: string = "";
  private idade: number = 0;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  protected fezAniversario() {
    return `O ${this.nome} fez tantos anos ${++this.idade}`;
  }
}

const pessoa1 = new Pessoa("Brenno", 25);
console.log(pessoa1.comer("Sobá"));
