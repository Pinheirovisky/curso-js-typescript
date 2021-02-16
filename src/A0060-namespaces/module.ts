/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Luisa';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('Vinicius');

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Vitoria';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Vinicius');
