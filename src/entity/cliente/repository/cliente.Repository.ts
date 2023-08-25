import { Injectable , Inject} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Cliente } from 'src/entity/cliente/entities/cliente';
import { ClienteDto } from 'src/entity/cliente/dto/cliente.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteRepository {
  constructor(
    @Inject(Cliente)
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

 async save(cliente: ClienteDto): Promise<Cliente> {
  const novoCliente = await this.Repository.save(cliente);
   return  novoCliente;
 }
}