import { Cliente } from "../entities/cliente";

export class ClienteDto extends Cliente{
    readonly nome: string;
    readonly cpf: string;
    readonly email: string;
}