import { Request, Response } from 'express';
import { BookingService } from './booking.service';

export class BookingController {
  private service = new BookingService();

  create = async (req: Request, res: Response) => {
    res.status(201).json(await this.service.createBooking(req.body));
  };

  listByTrip = async (req: Request, res: Response) => {
    res.json(await this.service.getTripBookings(String(req.params.tripId)));
  };
}
