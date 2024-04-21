import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateGoodDto {
  @IsString()
  @IsOptional()
  size: string;

  @IsString()
  color: string;

  @IsString()
  fabric: string;

  @IsString()
  filler: string;

  @IsNumber()
  price: number;

  @IsString()
  type: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  weight: string;

  @IsString()
  @IsOptional()
  set: string;

  @IsNumber()
  @IsOptional()
  footage: number;
}
