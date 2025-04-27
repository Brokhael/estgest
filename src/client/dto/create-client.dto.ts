import { IsString, IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsPhoneNumber()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
