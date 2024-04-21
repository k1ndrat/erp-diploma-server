import { Body, Controller, Post } from '@nestjs/common';
import { GoodService } from './good.service';
import { CreateGoodDto } from './good.dto';

@Controller('good')
export class GoodController {
  constructor(private readonly goodService: GoodService) {}

  @Post()
  async createGood(@Body() dto: CreateGoodDto) {
    return await this.goodService.createGood(dto);
  }
}
