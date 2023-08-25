import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { clienteController } from 'src/controllers/cliente.controller';
import { Cliente } from 'src/entity/cliente/cliente';
import { ClienteRepository } from 'src/repositories/cliente/cliente.Repository';
import { ClienteService } from 'src/service/cliente/cliente.service';


@Module({
    imports: [TypeOrmModule.forFeature([Cliente])],
    controllers: [clienteController],
    providers: [ ClienteService],
    exports: [TypeOrmModule]
})
export class ClienteModule { }