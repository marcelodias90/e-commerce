import { Cliente } from 'src/entity/cliente/entities/cliente';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('produto')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column('int')
  preco: number;

  @Column({ length: 100 })
  descricao: string;

  @ManyToOne(() => Cliente, cliente => cliente.produtos)
  cliente: Cliente
}