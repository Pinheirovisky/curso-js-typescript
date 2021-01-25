export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
  }
}

export class Produto {
  constructor(private _nome: string, public preco: number) { }

  get nome(): string {
    return this.nome;
  }
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Ventilador', 60.99);
const produto3 = new Produto('Cadeira', 29.9);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProduto(produto1);
carrinhoDeCompras.inserirProduto(produto2);
carrinhoDeCompras.inserirProduto(produto3);

console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());
