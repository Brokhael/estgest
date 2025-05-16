import { Injectable } from '@nestjs/common';
import { CreateBusinessHoursExceptionDto } from './dto/create-business-hours-exception.dto';
import { UpdateBusinessHoursExceptionDto } from './dto/update-business-hours-exception.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BusinessHoursExceptionService {
  constructor(private prisma: PrismaService) {
  }
  create(createBusinessHoursExceptionDto: CreateBusinessHoursExceptionDto) {
    return this.prisma.businessHoursException.create({
      data: createBusinessHoursExceptionDto,
    });
  }

  findAll() {
    return this.prisma.businessHoursException.findMany();
  }

  findOne(id: string) {
    return this.prisma.businessHoursException.findUnique({
      where: { id }
    });
  }

  update(id: string, updateBusinessHoursExceptionDto: UpdateBusinessHoursExceptionDto) {
    return this.prisma.businessHoursException.update({
      where: { id },
      data: updateBusinessHoursExceptionDto,
    });
  }

  remove(id: string) {
    return this.prisma.businessHoursException.delete({
      where: { id }
    });
  }

  findAllByBusinessId(businessId: string) {
    return this.prisma.businessHoursException.findMany({
      where: { businessId },
    });
  }
}
