import { Cliente } from "../cliente";

export class ClienteDto extends Cliente{
    readonly nome: string;
    readonly cpf: number;
    readonly email: string;
}