function semRetorno (...args: Array<string>): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Vinicius',
  sobrenome: 'Pinheiro',

  exibirNome (): void {
    console.log(this.nome + ' ' + this.sobrenome)
  }

}

semRetorno('Vinicius', 'Pinheiro');
pessoa.exibirNome()

export { pessoa }
