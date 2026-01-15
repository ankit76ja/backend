"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const trip_routes_1 = __importDefault(require("./modules/trips/trip.routes"));
const itinerary_routes_1 = __importDefault(require("./modules/itineraries/itinerary.routes"));
const booking_routes_1 = __importDefault(require("./modules/bookings/booking.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/trips', trip_routes_1.default);
app.use('/api/itineraries', itinerary_routes_1.default);
app.use('/api/bookings', booking_routes_1.default);
exports.default = app;
