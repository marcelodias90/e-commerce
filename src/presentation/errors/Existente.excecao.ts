import { HttpException, HttpStatus } from "@nestjs/common";

export class ExistenteExcecao extends HttpException {
    constructor(entidade: string, campo: string) {
      super(`Já existe um cadastro ${entidade} com esse ${campo}`, HttpStatus.CONFLICT);
    }
  }