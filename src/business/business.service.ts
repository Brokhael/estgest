import { Injectable } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BusinessService {
  constructor(private prisma: PrismaService) {}

  create(createBusinessDto: CreateBusinessDto) {
    return this.prisma.business.create({
      data: createBusinessDto,
    });
  }

  findAll() {
    return this.prisma.business.findMany();
  }

  findOne(id: string) {
    return this.prisma.business.findUnique({
      where: { id },
    });
  }

  update(id: string, updateBusinessDto: UpdateBusinessDto) {
    return this.prisma.business.update({
      where: { id },
      data: updateBusinessDto,
    });
  }

  remove(id: string) {
    return this.prisma.business.delete({
      where: { id },
    });
  }
}
