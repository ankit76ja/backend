import { Router } from 'express';
import { BookingController } from './booking.controller';

const router = Router();
const controller = new BookingController();

router.post('/', controller.create);
router.get('/trip/:tripId', controller.listByTrip);

export default router;
