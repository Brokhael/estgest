import { IsEmail, IsInt, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  duration: number;

  @IsInt()
  price: number;

  @IsString()
  businessId: string
}