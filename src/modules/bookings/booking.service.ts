import { BookingRepository } from './booking.repository';

export class BookingService {
  private repo = new BookingRepository();

  createBooking(data: any) {
    return this.repo.create(data);
  }

  getTripBookings(tripId: string) {
    return this.repo.findByTrip(tripId);
  }
}

export default BookingService;
