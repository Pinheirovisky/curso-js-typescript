/* eslint-disable @typescript-eslint/no-namespace */
var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace = 'Luisa';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoaDoNamespace = new PessoaDoNamespace('Vinicius');
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Vitoria';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
var pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Vinicius');
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference  path="module.ts" />
console.log(MeuNamespace.nomeDoNamespace);
