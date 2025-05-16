import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessHoursExceptionDto } from './create-business-hours-exception.dto';
import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateBusinessHoursExceptionDto extends PartialType(CreateBusinessHoursExceptionDto) {
  @IsUUID()
  businessId: string;

  @IsDateString()
  date: string; // ISO 8601 date string: '2025-12-25' or '2025-12-25T00:00:00Z'

  @IsOptional()
  @IsString()
  opensAt?: string; // format 'HH:mm'

  @IsOptional()
  @IsString()
  closesAt?: string; // format 'HH:mm'
}
