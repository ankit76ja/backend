import { Request, Response } from 'express';
import { ItineraryService } from './itinerary.service';

export class ItineraryController {
  private service = new ItineraryService();

  create = async (req: Request, res: Response) => {
    res.status(201).json(await this.service.create(req.body));
  };

  update = async (req: Request, res: Response) => {
    res.json(await this.service.update(String(req.params.id), req.body));
  };

  getByTrip = async (req: Request, res: Response) => {
    res.json(await this.service.getByTrip(String(req.params.tripId)));
  };
}
