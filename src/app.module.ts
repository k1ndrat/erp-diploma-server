import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { Order } from './entities/order.entity';
import { Client } from './entities/client.entity';
import { Warehouse } from './entities/warehouse.entity';
import { WarehouseModule } from './warehouse/warehouse.module';
import { Good } from './entities/good.entity';
import { GoodModule } from './good/good.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: '12345678',
      database: 'erp_db',
      entities: [User, Order, Client, Warehouse, Good],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    OrderModule,
    WarehouseModule,
    GoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
