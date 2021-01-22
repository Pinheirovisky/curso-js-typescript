export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(valor: string) {
    console.log('SETTER CHAMADO');
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Vinicius', 'Pinheiro', 21, '123.456.789-00');
pessoa.cpf = '132.322.233-28';

console.log(pessoa.cpf);
