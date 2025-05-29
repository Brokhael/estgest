import { Controller, Get, Query } from '@nestjs/common';
import { AvailabilityService } from './availability.service';

@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Get()
  async getAvailability(
    @Query('businessId') businessId: string,
    @Query('date') date: string,
  ) {
    const parsedDate = new Date(date);
    return this.availabilityService.getAvailabilityForDay(businessId, parsedDate);
  }
}
