import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessHourDto } from './create-business-hour.dto';
import { IsInt, IsString } from 'class-validator';

export class UpdateBusinessHourDto extends PartialType(CreateBusinessHourDto) {
  @IsString()
  businessId: string;

  @IsInt()
  weekday: number;

  @IsString()
  opensAt: string;

  @IsString()
  closesAt: string;
}
