import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clienteController } from 'src/entity/cliente/controllers/cliente.controller';
import { Cliente } from 'src/entity/cliente/entities/cliente';
import { ClienteRepository } from 'src/entity/cliente/repository/cliente.Repository';
import { ClienteService } from 'src/entity/cliente/service/cliente.service';


@Module({
    imports: [TypeOrmModule.forFeature([Cliente])],
    controllers: [clienteController],
    providers: [ ClienteService],
})
export class ClienteModule { }