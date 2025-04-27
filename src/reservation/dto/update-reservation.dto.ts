import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDto } from './create-reservation.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateReservationDto extends PartialType(CreateReservationDto) {
  @IsString()
  @IsOptional()
  serviceId?: string;

  @IsString()
  @IsOptional()
  clientId?: string;

  @IsString()
  @IsOptional()
  date?: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
