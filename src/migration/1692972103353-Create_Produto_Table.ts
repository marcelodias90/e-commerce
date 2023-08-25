import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProdutoTable1692972103353 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produto",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "preco",
                        type: "varchar",
                    },
                    {
                        name: "descricao",
                        type: "varchar",
                        isUnique: true
                    },
                ],
            }),
            true,
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produto')
    }
}
