import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService) {
  }
  create(createServiceDto: CreateReservationDto) {
    return this.prisma.reservation.create({
      data: createServiceDto,
    });
  }

  findAll() {
    return this.prisma.reservation.findMany();
  }

  findOne(id: string) {
    return this.prisma.reservation.findUnique({
      where: { id },
    });
  }

  update(id: string, updateServiceDto: UpdateReservationDto) {
    return this.prisma.reservation.update({
      where: { id },
      data: updateServiceDto,
    });
  }

  remove(id: string) {
    return this.prisma.reservation.delete({
      where: { id },
    });
  }

  findAllByBusinessId(businessId: string) {
    return this.prisma.reservation.findMany({
      where: { businessId },
    });
  }
}
