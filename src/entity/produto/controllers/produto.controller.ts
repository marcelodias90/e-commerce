import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoService, Produto , ProdutoDto} from "../index";

@Controller('produto')
export class clienteController {
    constructor(private readonly produtoService: ProdutoService) { }

    @Get('lista')
    async Listar(): Promise<Produto[]> {
        return await this.produtoService.Listar();
    }

    @Post('criar')
    async Criar(@Body() produto: ProdutoDto): Promise<Produto> {
        return await this.produtoService.Criar(produto)
    }

    @Put(':id')
    async atualizar(@Param('id') id: number, @Body() produto: ProdutoDto): Promise<void> {
         await this.produtoService.atualiza(id, produto)
    }

    @Delete(':id')
    async deletar(@Param('id') id: number): Promise<void> {
         await this.produtoService.exclui(id)
    }
}