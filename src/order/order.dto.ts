import { IsEmail, IsNumber, IsObject, IsString } from 'class-validator';

class Client {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  city: string;

  @IsString()
  department: string;
}

export class CreateOrderDto {
  @IsObject()
  client: Client;

  @IsString()
  marketplace: string;

  @IsNumber()
  orderNumber: number;

  @IsString()
  good: string;

  @IsString()
  color: string;

  @IsString()
  carrier: string;

  @IsString()
  deliveryAddress: string;

  @IsString()
  paymentType: string;

  @IsNumber()
  price: number;

  @IsNumber()
  invoice: number;
}
