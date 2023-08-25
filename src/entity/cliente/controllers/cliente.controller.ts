import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { Cliente } from 'src/entity/cliente/entities/cliente';
import { ClienteDto } from 'src/entity/cliente/dto/cliente.dto';
import { ClienteService } from '../service/cliente.service';

@Controller('cliente')
export class clienteController {
    constructor(private readonly clienteService: ClienteService) { }

    @Get('lista')
    async Listar(): Promise<Cliente[]> {
        return await this.clienteService.Listar();
    }

    @Post('criar')
    async Criar(@Body() cliente: ClienteDto): Promise<Cliente> {
        return await this.clienteService.Criar(cliente)
    }

    @Put(':id')
    async atualizar(@Param('id') id: number, @Body() cliente: ClienteDto): Promise<void> {
         await this.clienteService.atualiza(id, cliente)
    }

    @Delete(':id')
    async deletar(@Param('id') id: number): Promise<void> {
         await this.clienteService.exclui(id)
    }
}