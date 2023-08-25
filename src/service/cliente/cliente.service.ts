import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/entity/cliente/cliente';
import { ClienteDto } from 'src/entity/cliente/dto/cliente.dto';
import { ClienteRepository } from 'src/repositories/cliente/cliente.Repository';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: ClienteRepository,
  ) {}

  async Listar(): Promise<Cliente[]> {
     return await this.clienteRepository.Lista();
  }

  async Criar(cliente: ClienteDto): Promise<Cliente> {
    const existeCliente = await this.clienteRepository.buscaPorEmail(cliente.email)
    if(existeCliente){
      throw new Error('Já existe um Cliente com esse email!')
    }
     return await this.clienteRepository.save(cliente)
 }
}
