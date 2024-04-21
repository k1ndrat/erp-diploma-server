import { Body, Controller, Post } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './warehouse.dto';

@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Post()
  async createWarehouse(@Body() dto: CreateWarehouseDto) {
    return await this.warehouseService.createDoc(dto);
  }
}
