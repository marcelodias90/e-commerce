import { Cliente } from "../entities/cliente";

export class ClienteDto extends Cliente{
    readonly nome: string;
    readonly cpf: number;
    readonly email: string;
}