const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

function traduzirCor(cor: CoresChaves, cores: CoresObj): string {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('roxo', coresObj));
