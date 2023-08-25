import { Injectable } from "@nestjs/common";
import { ProdutoRepository } from "../repository/produto.Repository";
import { Produto } from "../entities/produto";
import { ProdutoDto } from "../dto/produto.dto";
import {ExistenteExcecao, IdNaoEncotradoExcecao} from '../../../presentation/errors/index'


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
      throw new ExistenteExcecao('Cliente', 'e-mail')
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