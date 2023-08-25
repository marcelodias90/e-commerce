import { Produto } from "../produto";

export class ProdutoDto extends Produto{
    readonly nome: string;
    readonly preco: number;
    readonly descricao: string;
}