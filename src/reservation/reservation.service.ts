import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReservationService {
  constructor(private prisma: PrismaService) {
  }
  async create(createReservationDto: CreateReservationDto) {
    const { businessId, serviceId, date, notes } = createReservationDto;
    const start = new Date(date);

    const requestedService = await this.prisma.service.findUnique({ where: { id: serviceId } });
    if (!requestedService) throw new Error('Service not found: ' + serviceId);

    const duration = requestedService.duration * 1000;
    const end = new Date(start.getTime() + duration);
    const serviceDate = new Date(date);

    serviceDate.setHours(0, 0, 0, 0);

    await this.ensureNoOverlap(businessId, start, end);
    await this.ensureWithinBusinessHours(businessId, serviceDate, start, end);

    return this.prisma.reservation.create({ data: createReservationDto });
  }

  private async ensureNoOverlap(businessId: string, start: Date, end: Date) {
    const overlapping = await this.prisma.reservation.findMany({
      where: {
        businessId,
        date: { lt: end, gt: start },
      },
    })

    if (overlapping.length > 0) {
      throw new Error('This time slot is already taken.');
    }
  }

  private async ensureWithinBusinessHours(
    businessId: string,
    date: Date,
    start: Date,
    end: Date,
  ) {
    const exception = await this.prisma.businessHoursException.findUnique({
      where: { businessId_date: { businessId, date } },
    });

    if (exception && exception.opensAt && exception.closesAt) {
      const [openH, openM] = exception.opensAt.split(':').map(Number);
      const [closeH, closeM] = exception.closesAt.split(':').map(Number);

      const openTime = new Date(start);
      openTime.setHours(openH, openM, 0, 0);

      const closeTime = new Date(start);
      closeTime.setHours(closeH, closeM, 0, 0);

      if (start < openTime || end > closeTime) {
        throw new Error('Reservation is outside business hours (exception).');
      }

      return;
    }

    const weekday = start.getDay();
    const regularHours = await this.prisma.businessHours.findMany({
      where: { businessId, weekday },
    });

    if (regularHours.length === 0) {
      throw new Error('Business hours not defined or closed.');
    }

    const isWithinAnyPeriod = regularHours.some(({ opensAt, closesAt }) => {
      const [openH, openM] = opensAt.split(':').map(Number);
      const [closeH, closeM] = closesAt.split(':').map(Number);

      const openTime = new Date(start);
      openTime.setHours(openH, openM, 0, 0);

      const closeTime = new Date(start);
      closeTime.setHours(closeH, closeM, 0, 0);

      return start >= openTime && end <= closeTime;
    });

    if (!isWithinAnyPeriod) {
      throw new Error('Reservation is outside business hours.');
    }
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
