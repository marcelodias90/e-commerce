import { Injectable } from '@nestjs/common';
import { Cliente } from 'src/entity/cliente/entities/cliente';
import { ClienteDto } from 'src/entity/cliente/dto/cliente.dto';
import { ClienteRepository } from 'src/entity/cliente/repository/cliente.Repository';
import { IdNaoEncotradoExcecao } from 'src/presentation/errors/IdNaoEncotrado.excecao';
import { ExistenteExcecao } from 'src/presentation/errors/Existente.excecao';

@Injectable()
export class ClienteService {
  constructor(
    private clienteRepository: ClienteRepository) { }

  async Listar(): Promise<Cliente[]> {
    return await this.clienteRepository.Lista();
  }

  async Criar(cliente: ClienteDto): Promise<Cliente> {
    const existeCliente = await this.clienteRepository.buscaPorEmail(cliente.email)
    if (existeCliente) {
      throw new ExistenteExcecao('Cliente', 'e-mail')
    }
    return await this.clienteRepository.create(cliente)
  }

  async atualiza(id: number, cliente: ClienteDto): Promise<void> {
    const existeCliente = await this.clienteRepository.buscaPorId(id)
    if (!existeCliente) {
      throw new IdNaoEncotradoExcecao(id)
    }
    await this.clienteRepository.update(id, cliente)
  }

  async exclui(id: number): Promise<Cliente> {
    const existeCliente = await this.clienteRepository.buscaPorId(id)
    if (!existeCliente) {
      throw new IdNaoEncotradoExcecao(id)
    }
    return await this.clienteRepository.deletar(existeCliente)
  }


}
