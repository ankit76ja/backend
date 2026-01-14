import { Router } from 'express';
import { ItineraryController } from './itinerary.controller';

const router = Router();
const controller = new ItineraryController();

router.post('/', controller.create);
router.put('/:id', controller.update);
router.get('/trip/:tripId', controller.getByTrip);

export default router;
