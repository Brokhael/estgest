import { Module } from '@nestjs/common';
import { BusinessHoursExceptionService } from './business-hours-exception.service';
import { BusinessHoursExceptionController } from './business-hours-exception.controller';

@Module({
  controllers: [BusinessHoursExceptionController],
  providers: [BusinessHoursExceptionService],
})
export class BusinessHoursExceptionModule {}
