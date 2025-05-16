import { IsInt, IsString } from 'class-validator';

export class CreateBusinessHourDto {
  @IsString()
  businessId: string;

  @IsInt()
  weekday: number;

  @IsString()
  opensAt: string;

  @IsString()
  closesAt: string;
}
