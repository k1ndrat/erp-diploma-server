import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Good } from 'src/entities/good.entity';
import { Warehouse } from 'src/entities/warehouse.entity';
import { Repository } from 'typeorm';
import { CreateWarehouseDto } from './warehouse.dto';
import { GoodService } from 'src/good/good.service';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectRepository(Warehouse)
    private warehouseRepository: Repository<Warehouse>,
    @InjectRepository(Good) private goodRepository: Repository<Good>,
    private readonly goodService: GoodService,
  ) {}

  async createDoc(dto: CreateWarehouseDto) {
    if (!(await this.goodService.findGoodById(dto.goodId))) {
      throw new NotFoundException('Good with this id doesn`t exist');
    }

    let doc = this.warehouseRepository.create({
      ...dto,
      createdAt: new Date(),
    });
    doc = await this.warehouseRepository.save(doc);

    return doc;
  }
}
