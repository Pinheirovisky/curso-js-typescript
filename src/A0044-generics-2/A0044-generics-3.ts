interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Vinicius',
  sobrenome: 'Pinheiro',
  idade: 21,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 321,
  idade: 21,
};

console.log(aluno1);
console.log(aluno2);
