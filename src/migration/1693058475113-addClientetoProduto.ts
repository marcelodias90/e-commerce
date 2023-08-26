import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddClientetoProduto1693058475113 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("cliente",
            new TableColumn({
                name: "produtoId",
                type: "int",
                isNullable: true
            }),
        )
        await queryRunner.createForeignKey("cliente",
            new TableForeignKey({
                name: "clienteProdutos",
                columnNames: ["produtoId"],
                referencedColumnNames: ["id"],
                referencedTableName: "produto",
                onDelete: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("cliente", "clienteProdutos");
        await queryRunner.dropColumn("cliente", "produtoId")
    }

}
