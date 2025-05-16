import { Injectable } from '@nestjs/common';
import { CreateBusinessHourDto } from './dto/create-business-hour.dto';
import { UpdateBusinessHourDto } from './dto/update-business-hour.dto';
import { PrismaService} from '../prisma/prisma.service';

@Injectable()
export class BusinessHoursService {ç
  constructor(private prisma: PrismaService) {
  }
  create(createBusinessHoursDto: CreateBusinessHourDto) {
    return this.prisma.businessHours.create({
      data: createBusinessHoursDto,
    });
  }

  findAll() {
    return this.prisma.businessHours.findMany();
  }

  findOne(id: string) {
    return this.prisma.businessHours.findUnique({
      where: { id },
    });
  }

  update(id: string, updateBusinessHoursDto: UpdateBusinessHourDto) {
    return this.prisma.businessHours.update({
      where: { id },
      data: updateBusinessHoursDto,
    });
  }

  remove(id: string) {
    return this.prisma.businessHours.delete({
      where: { id },
    });
  }

  findAllByBusinessId(businessId: string) {
    return this.prisma.businessHours.findMany({
      where: { businessId },
    });
  }
}
