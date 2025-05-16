import { IsEmail, IsInt, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  serviceId: string;

  @IsString()
  clientId: string;

  @IsString()
  date: string;

  @IsString()
  notes: string;

  @IsString()
  businessId: string
}