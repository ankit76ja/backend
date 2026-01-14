import { Request, Response } from 'express';
import { TripService } from './trip.service';

export class TripController {
  private service = new TripService();

  create = async (req: Request, res: Response) => {
    const trip = await this.service.createTrip(req.body);
    res.status(201).json(trip);
  };

  update = async (req: Request, res: Response) => {
    const trip = await this.service.updateTrip(String(req.params.id), req.body);
    res.json(trip);
  };

  list = async (_: Request, res: Response) => {
    res.json(await this.service.getTrips());
  };

  details = async (req: Request, res: Response) => {
    res.json(await this.service.getTripBySlug(String(req.params.slug)));
  };
}
