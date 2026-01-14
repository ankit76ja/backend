import { prisma } from '../../config/prisma';

export class BookingRepository {
  create(data: any) {
    return prisma.booking.create({ data });
  }

  findByTrip(tripId: string) {
    return prisma.booking.findMany({
      where: { tripId },
    });
  }
}
