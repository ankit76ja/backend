"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripController = void 0;
const trip_service_1 = require("./trip.service");
class TripController {
    service = new trip_service_1.TripService();
    create = async (req, res) => {
        const trip = await this.service.createTrip(req.body);
        res.status(201).json(trip);
    };
    update = async (req, res) => {
        const trip = await this.service.updateTrip(String(req.params.id), req.body);
        res.json(trip);
    };
    list = async (_, res) => {
        res.json(await this.service.getTrips());
    };
    details = async (req, res) => {
        res.json(await this.service.getTripBySlug(String(req.params.slug)));
    };
}
exports.TripController = TripController;
