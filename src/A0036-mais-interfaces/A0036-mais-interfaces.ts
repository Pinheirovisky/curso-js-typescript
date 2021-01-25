// Declaration merging
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: string[];
}

interface Pessoa {
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Vinicius',
  sobrenome: 'Pinheiro',
  enderecos: ['Av. Brasil'],
};

pessoa.enderecos.push('Rua Nova');
pessoa.idade = 21;

console.log(pessoa);
