"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripRepository = void 0;
const prisma_1 = require("../../config/prisma");
class TripRepository {
    create(data) {
        return prisma_1.prisma.trip.create({ data });
    }
    update(id, data) {
        return prisma_1.prisma.trip.update({
            where: { id },
            data,
        });
    }
    findAll() {
        return prisma_1.prisma.trip.findMany({
            include: { itinerary: true },
        });
    }
    findBySlug(slug) {
        return prisma_1.prisma.trip.findUnique({
            where: { slug },
            include: { itinerary: true },
        });
    }
}
exports.TripRepository = TripRepository;
