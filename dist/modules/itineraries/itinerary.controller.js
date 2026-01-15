"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItineraryController = void 0;
const itinerary_service_1 = require("./itinerary.service");
class ItineraryController {
    service = new itinerary_service_1.ItineraryService();
    create = async (req, res) => {
        res.status(201).json(await this.service.create(req.body));
    };
    update = async (req, res) => {
        res.json(await this.service.update(String(req.params.id), req.body));
    };
    getByTrip = async (req, res) => {
        res.json(await this.service.getByTrip(String(req.params.tripId)));
    };
}
exports.ItineraryController = ItineraryController;
