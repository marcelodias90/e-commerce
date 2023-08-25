import { Controller, Get, Post, Body} from '@nestjs/common';
import { Cliente } from 'src/entity/cliente/entities/cliente';
import { ClienteDto } from 'src/entity/cliente/dto/cliente.dto';
import { ClienteRepository } from '../repository/cliente.Repository';

@Controller('cliente')
export class clienteController {
    constructor(private readonly clienteRepository: ClienteRepository) { }

    @Get('lista')
    async Listar(): Promise<Cliente[]> {
        return await this.clienteRepository.Lista();
    }

    // @Post('criar')
    // async Criar(@Body() cliente: ClienteDto) : Promise<Cliente>{
    //    return await  this.clienteService.Criar(cliente)
    // }
}