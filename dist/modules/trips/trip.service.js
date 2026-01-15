"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripService = void 0;
const trip_repository_1 = require("./trip.repository");
class TripService {
    repo = new trip_repository_1.TripRepository();
    createTrip(data) {
        return this.repo.create(data);
    }
    updateTrip(id, data) {
        return this.repo.update(id, data);
    }
    getTrips() {
        return this.repo.findAll();
    }
    getTripBySlug(slug) {
        return this.repo.findBySlug(slug);
    }
}
exports.TripService = TripService;
exports.default = TripService;
