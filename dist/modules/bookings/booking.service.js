"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const booking_repository_1 = require("./booking.repository");
class BookingService {
    repo = new booking_repository_1.BookingRepository();
    createBooking(data) {
        return this.repo.create(data);
    }
    getTripBookings(tripId) {
        return this.repo.findByTrip(tripId);
    }
}
exports.BookingService = BookingService;
exports.default = BookingService;
