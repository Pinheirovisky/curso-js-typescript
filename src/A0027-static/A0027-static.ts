export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) { }

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Vinicius', 'Pinheiro', 21, '123.456.789-00');
const pessoa2 = Pessoa.criaPessoa('Vinicius', 'Pinheiro');

pessoa2.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
