import { Router } from 'express';
import { TripController } from './trip.controller';

const router = Router();
const controller = new TripController();

router.post('/', controller.create);
router.put('/:id', controller.update);
router.get('/', controller.list);
router.get('/:slug', controller.details);

export default router;
