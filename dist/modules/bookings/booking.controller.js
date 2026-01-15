"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const booking_service_1 = require("./booking.service");
class BookingController {
    service = new booking_service_1.BookingService();
    create = async (req, res) => {
        res.status(201).json(await this.service.createBooking(req.body));
    };
    listByTrip = async (req, res) => {
        res.json(await this.service.getTripBookings(String(req.params.tripId)));
    };
}
exports.BookingController = BookingController;
