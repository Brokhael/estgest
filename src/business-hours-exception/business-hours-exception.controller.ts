import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BusinessHoursExceptionService } from './business-hours-exception.service';
import { CreateBusinessHoursExceptionDto } from './dto/create-business-hours-exception.dto';
import { UpdateBusinessHoursExceptionDto } from './dto/update-business-hours-exception.dto';

@Controller('business-hours-exception')
export class BusinessHoursExceptionController {
  constructor(private readonly businessHoursExceptionService: BusinessHoursExceptionService) {}

  @Post()
  create(@Body() createBusinessHoursExceptionDto: CreateBusinessHoursExceptionDto) {
    return this.businessHoursExceptionService.create(createBusinessHoursExceptionDto);
  }

  @Get()
  findAll() {
    return this.businessHoursExceptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessHoursExceptionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessHoursExceptionDto: UpdateBusinessHoursExceptionDto) {
    return this.businessHoursExceptionService.update(id, updateBusinessHoursExceptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessHoursExceptionService.remove(id);
  }

  @Get('business/:businessId')
  findByBusiness(@Param('businessId') businessId: string) {
    return this.businessHoursExceptionService.findAllByBusinessId(businessId);
  }
}
