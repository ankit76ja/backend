"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRepository = void 0;
const prisma_1 = require("../../config/prisma");
class BookingRepository {
    create(data) {
        return prisma_1.prisma.booking.create({ data });
    }
    findByTrip(tripId) {
        return prisma_1.prisma.booking.findMany({
            where: { tripId },
        });
    }
}
exports.BookingRepository = BookingRepository;
