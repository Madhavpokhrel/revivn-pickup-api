import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PickupRequestModule } from './pickup-request/pickup-request.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      logging: process.env.DB_LOGGING === 'true',
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    }),
    PickupRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
