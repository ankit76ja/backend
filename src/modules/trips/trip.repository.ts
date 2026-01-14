import { prisma } from '../../config/prisma';

export class TripRepository {
  create(data: any) {
    return prisma.trip.create({ data });
  }

  update(id: string, data: any) {
    return prisma.trip.update({
      where: { id },
      data,
    });
  }

  findAll() {
    return prisma.trip.findMany({
      include: { itinerary: true },
    });
  }

  findBySlug(slug: string) {
    return prisma.trip.findUnique({
      where: { slug },
      include: { itinerary: true },
    });
  }
}
