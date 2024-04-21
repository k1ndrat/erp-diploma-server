import { IsEmail, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  // @IsEmail()
  // email: string;

  @IsString()
  password: string;

  // @IsString()
  // @IsOptional()
  // @IsUrl()
  // picture?: string;
}
