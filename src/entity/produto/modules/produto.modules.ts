import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto } from "../entities/produto";
import { ProdutoController } from "../controllers/produto.controller";
import { ProdutoRepository } from "../repository/produto.Repository";
import { ProdutoService } from "../service/produto.service";


@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    controllers: [ProdutoController],
    providers: [ProdutoRepository, ProdutoService]
})
export class ProdutoModule { }