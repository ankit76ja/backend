import { prisma } from '../../config/prisma';

export class ItineraryRepository {
  create(data: any) {
    return prisma.tripItinerary.create({ data });
  }

  update(id: string, data: any) {
    return prisma.tripItinerary.update({
      where: { id },
      data,
    });
  }

  findByTrip(tripId: string) {
    return prisma.tripItinerary.findMany({
      where: { tripId },
      orderBy: { day: 'asc' },
    });
  }
}
