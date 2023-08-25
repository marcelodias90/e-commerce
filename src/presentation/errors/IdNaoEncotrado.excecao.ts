import { HttpException, HttpStatus } from "@nestjs/common";

export class IdNaoEncotradoExcecao extends HttpException {
    constructor(id: number) {
      super(`ID: ${id} não encontrado no banco de dados!`, HttpStatus.NOT_FOUND);
    }
  }