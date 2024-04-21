import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateWarehouseDto {
  @IsNumber()
  goodId: number;

  @IsNumber()
  nomer: number;

  @IsNumber()
  count: number;
}
