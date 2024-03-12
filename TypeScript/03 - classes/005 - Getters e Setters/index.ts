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
  protected nome: string = "";
  protected idade: number = 0;

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

class Brenno extends Pessoa {
  private _profissao: string = "Desenvolvedor de Sistemas";

  constructor() {
    super("Brenno", 25);
  }

  // public getProfissao() {
  //   return `${this.nome} trabalha como ${this._profissao} no Ministério Público`;
  // }

  get profissao() {
    //Consegue fazer validações antes de retornar o valor
    if (this._profissao === "Desenvolvedor de software") {
      return `Você terá um bom emprego de ${this._profissao} no TJ.`;
    }
    return this._profissao;
  }

  set profissao(valor: string) {
    this._profissao = valor;
  }
}

const brenno = new Brenno();
console.log(brenno.profissao);
brenno.profissao = "Desenvolvedor de software";
console.log(brenno.profissao);
