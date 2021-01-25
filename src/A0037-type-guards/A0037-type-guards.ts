import { type } from 'os';

export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('Vinicius', 'Pinheiro'));

type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) { }
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      return console.log(obj.nome);
    default:
      return console.log('Isso é um animal', obj.cor);
  }
}

mostraNome(new Aluno('Luisa'));
mostraNome({ tipo: 'animal', cor: 'Branco' });
