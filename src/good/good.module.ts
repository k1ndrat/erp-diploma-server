import { Module } from '@nestjs/common';
import { GoodController } from './good.controller';
import { GoodService } from './good.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Good } from 'src/entities/good.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Good])],
  controllers: [GoodController],
  providers: [GoodService],
})
export class GoodModule {}
