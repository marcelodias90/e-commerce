import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produto')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column('int')
  preco: Number;

  @Column({ length: 100 })
  descricao: string;
}