import { Injectable } from "@nestjs/common";
import { ExistenteExcecao, IdNaoEncotradoExcecao } from '../../../presentation/errors/index'
import { ProdutoRepository, Produto, ProdutoDto } from "../index";

@Injectable()
export class ProdutoService {
  constructor(
    private produtoRepository: ProdutoRepository) { }

  async Listar(): Promise<Produto[]> {
    return await this.produtoRepository.Lista();
  }

  async Criar(produto: ProdutoDto): Promise<Produto> {
    const existeProduto = await this.produtoRepository.buscaPorNome(produto?.nome)
    if (existeProduto) {
      throw new ExistenteExcecao('Produto', 'nome')
    }
    return await this.produtoRepository.create(produto)
  }

  async atualiza(id: number, produto: ProdutoDto): Promise<void> {
    const existeProduto = await this.produtoRepository.buscaPorId(id)
    if (!existeProduto) {
      throw new IdNaoEncotradoExcecao(id)
    }
    await this.produtoRepository.update(id, produto)
  }

  async exclui(id: number): Promise<void> {
    const existeProduto = await this.produtoRepository.buscaPorId(id)
    if (!existeProduto) {
      throw new IdNaoEncotradoExcecao(id)
    }
    await this.produtoRepository.deletar(existeProduto)
  }
}