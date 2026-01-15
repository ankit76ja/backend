"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItineraryRepository = void 0;
const prisma_1 = require("../../config/prisma");
class ItineraryRepository {
    create(data) {
        return prisma_1.prisma.tripItinerary.create({ data });
    }
    update(id, data) {
        return prisma_1.prisma.tripItinerary.update({
            where: { id },
            data,
        });
    }
    findByTrip(tripId) {
        return prisma_1.prisma.tripItinerary.findMany({
            where: { tripId },
            orderBy: { day: 'asc' },
        });
    }
}
exports.ItineraryRepository = ItineraryRepository;
