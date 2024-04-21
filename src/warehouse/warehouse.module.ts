import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './warehouse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warehouse } from 'src/entities/warehouse.entity';
import { Good } from 'src/entities/good.entity';
import { GoodService } from 'src/good/good.service';

@Module({
  imports: [TypeOrmModule.forFeature([Warehouse, Good])],
  controllers: [WarehouseController],
  providers: [WarehouseService, GoodService],
})
export class WarehouseModule {}
