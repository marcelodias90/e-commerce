import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

}