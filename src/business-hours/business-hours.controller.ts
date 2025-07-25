import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinessHoursService } from './business-hours.service';
import { CreateBusinessHourDto } from './dto/create-business-hour.dto';
import { UpdateBusinessHourDto } from './dto/update-business-hour.dto';

@Controller('business-hours')
export class BusinessHoursController {
  constructor(private readonly businessHoursService: BusinessHoursService) {}

  @Post()
  create(@Body() createBusinessHourDto: CreateBusinessHourDto) {
    return this.businessHoursService.create(createBusinessHourDto);
  }

  @Get()
  findAll() {
    return this.businessHoursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessHoursService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessHourDto: UpdateBusinessHourDto) {
    return this.businessHoursService.update(id, updateBusinessHourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessHoursService.remove(id);
  }

  @Get('business/:businessId')
  findByBusiness(@Param('businessId') businessId: string) {
    return this.businessHoursService.findAllByBusinessId(businessId);
  }
}
