import { IsString, IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

export class CreateBusinessDto {
  @IsString()
  name: string;

  @IsEmail()
  @IsOptional()
  email: string;
}
