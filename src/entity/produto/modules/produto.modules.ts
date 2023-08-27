import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produto, ProdutoController, ProdutoRepository, ProdutoService } from "../index";

@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    controllers: [ProdutoController],
    providers: [ProdutoRepository, ProdutoService],
})
export class ProdutoModule { }