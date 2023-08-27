import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Cliente } from 'src/entity/cliente/entities/cliente';
import { ClienteDto } from 'src/entity/cliente/dto/cliente.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteRepository {
  constructor(
    @InjectRepository(Cliente)
    private Repository: Repository<Cliente>,
  ) {}

  async Lista(): Promise<Cliente[]> {
    return await this.Repository.find();
 }

  async buscaPorNome(nome: string): Promise<Cliente> {
    return await this.Repository.findOne({
        where: {
            nome
        }
    });
 }
  async buscaPorId(id: number): Promise<Cliente> {
    return await this.Repository.findOne({
        where: {
            id
        }
    });
 }

  async buscaPorEmail(email: string): Promise<Cliente> {
    return await this.Repository.findOne({
        where: {
            email
        }
    });
 }

 async create(cliente: ClienteDto): Promise<ClienteDto> {
  const novoCliente = this.Repository.create(cliente)
  return await this.Repository.save(novoCliente);
 }

 async update(id: number, cliente: ClienteDto): Promise<void> {
     await this.Repository.update(id, cliente)
 }

 async deletar(cliente: ClienteDto): Promise<ClienteDto> {
    return await this.Repository.remove(cliente)
 }
}