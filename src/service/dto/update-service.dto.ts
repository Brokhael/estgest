import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsOptional()
  durantion?: number;

  @IsInt()
  @IsOptional()
  price?: number;
}
