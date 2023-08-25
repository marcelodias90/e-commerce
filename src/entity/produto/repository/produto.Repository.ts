import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../produto";
import { Repository } from "typeorm";
import { ProdutoDto } from "../dto/produto.dto";

@Injectable()
export class ProdutoRepository {
  constructor(
    @InjectRepository(Produto)
    private Repository: Repository<Produto>,
  ) {}

  async Lista(): Promise<Produto[]> {
    return await this.Repository.find();
 }
  async buscaPorId(id: number): Promise<Produto> {
    return await this.Repository.findOne({
        where: {
            id
        }
    });
 }

  async buscaPorNome(nome: string): Promise<Produto> {
    return await this.Repository.findOne({
        where: {
            nome
        }
    });
 }

 async create(produto: ProdutoDto): Promise<Produto> {
  const novoproduto = this.Repository.create(produto)
  return await this.Repository.save(novoproduto);
 }

 async update(id: number, produto: ProdutoDto): Promise<void> {
     await this.Repository.update(id, produto)
 }

 async deletar(produto: ProdutoDto): Promise<Produto> {
    return await this.Repository.remove(produto)
 }
}