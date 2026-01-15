"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItineraryService = void 0;
const itinerary_repository_1 = require("./itinerary.repository");
class ItineraryService {
    repo = new itinerary_repository_1.ItineraryRepository();
    create(data) {
        return this.repo.create(data);
    }
    update(id, data) {
        return this.repo.update(id, data);
    }
    getByTrip(tripId) {
        return this.repo.findByTrip(tripId);
    }
}
exports.ItineraryService = ItineraryService;
exports.default = ItineraryService;
