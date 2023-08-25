import { Controller, Get, Post, Body} from '@nestjs/common';
import { Cliente } from 'src/entity/cliente/entities/cliente';
import { ClienteDto } from 'src/entity/cliente/dto/cliente.dto';
import { ClienteService } from 'src/entity/cliente/service/cliente.service';

@Controller('cliente')
export class clienteController {
    constructor(private readonly clienteService: ClienteService) { }

    @Get('lista')
    async Listar(): Promise<Cliente[]> {
        return await this.clienteService.Listar();
    }

    @Post('criar')
    async Criar(@Body() cliente: ClienteDto) : Promise<Cliente>{
       return await  this.clienteService.Criar(cliente)
    }
}