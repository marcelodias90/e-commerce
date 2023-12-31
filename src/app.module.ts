import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ClienteModule, ProdutoModule } from './entity/index'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env']
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 1433,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [`${__dirname}/entity/**/entities/**/{.ts,*.js}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
      extra: {
        trustServerCertificate: true,
      }

    }),
    ClienteModule,
    ProdutoModule
  ],

})
export class AppModule { }
