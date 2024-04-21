import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Good } from 'src/entities/good.entity';
import { Repository } from 'typeorm';
import { CreateGoodDto } from './good.dto';

@Injectable()
export class GoodService {
  constructor(
    @InjectRepository(Good) private goodRepository: Repository<Good>,
  ) {}

  async createGood(dto: CreateGoodDto) {
    const good = this.goodRepository.create(dto);

    return await this.goodRepository.save(good);
  }

  async findGoodById(id: number) {
    return await this.goodRepository.findOneBy({ id });
  }
}
