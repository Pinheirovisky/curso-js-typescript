// Tuple
const dadosCliente1: [number, string] = [1, 'Vinicius'];
const dadosCliente2: readonly [number, string, string?] = [1, 'Vinicius', 'Pinheiro'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Vinicius', 'Pinheiro'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Pinheiro';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);

// Readonly array
const array1: readonly string[] = ['Vinicius', 'Pinheiro'];
const array2: ReadonlyArray<string> = ['Pinheiro', 'Vinicius'];

console.log(array1);
console.log(array2);
