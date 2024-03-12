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
  public nome: string = "";
  public idade: number = 0;

  // underline antes da variável, significa ser um atributo privado.
  private _programador: string = "programador";

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  public comer(comida: string) {
    return `O ${this.nome} comeu ${comida}`;
  }

  public fezAniversario() {
    return `O ${this.nome} fez tantos anos ${++this.idade}`;
  }
}

const pessoa1 = new Pessoa("Brenno", 25);
console.log(pessoa1.comer("Sobá"));
