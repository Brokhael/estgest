import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AvailabilityService {
  constructor(private prisma: PrismaService) {}

  async getAvailabilityForDay(businessId: string, date: Date): Promise<string[]> {
    const weekday = date.getDay();

    const exception = await this.prisma.businessHoursException.findUnique({
      where: {
        businessId_date: {
          businessId,
          date: new Date(date.toDateString()),
        },
      },
    });

    let opensAt: string | null;
    let closesAt: string | null;

    if (exception) {
      opensAt = exception.opensAt ?? null;
      closesAt = exception.closesAt ?? null;
    } else {
      const businessHours = await this.prisma.businessHours.findFirst({
        where: {
          businessId,
          weekday,
        },
      });

      opensAt = businessHours?.opensAt ?? null;
      closesAt = businessHours?.closesAt ?? null;
    }

    if (!opensAt || !closesAt) return [];

    const slots = this.generateTimeSlots(opensAt, closesAt);

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const reservations = await this.prisma.reservation.findMany({
      where: {
        businessId,
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    const reservedTimes = reservations.map(r => r.date.toTimeString().slice(0, 5));
    return slots.filter(time => !reservedTimes.includes(time));
  }

  private generateTimeSlots(opensAt: string, closesAt: string, intervalMinutes = 15): string[] {
    const slots: string[] = [];
    const [openH, openM] = opensAt.split(':').map(Number);
    const [closeH, closeM] = closesAt.split(':').map(Number);

    const start = new Date();
    start.setHours(openH, openM, 0, 0);
    const end = new Date();
    end.setHours(closeH, closeM, 0, 0);

    const current = new Date(start);
    while (current < end) {
      slots.push(current.toTimeString().slice(0, 5));
      current.setMinutes(current.getMinutes() + intervalMinutes);
    }

    return slots;
  }
}
