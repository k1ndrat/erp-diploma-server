import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from 'src/entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Client])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
