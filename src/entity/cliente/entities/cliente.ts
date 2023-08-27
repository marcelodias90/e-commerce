import { Produto } from 'src/entity/produto';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity('cliente')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column()
  cpf: string;

  @Column({ length: 100 })
  email: string;

  @OneToMany(() => Produto, produto => produto.cliente)
  produtos: Produto[];
}