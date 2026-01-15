"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const router = (0, express_1.Router)();
const controller = new booking_controller_1.BookingController();
router.post('/', controller.create);
router.get('/trip/:tripId', controller.listByTrip);
exports.default = router;
