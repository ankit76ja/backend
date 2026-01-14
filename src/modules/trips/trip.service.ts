import { TripRepository } from './trip.repository';

export class TripService {
  private repo = new TripRepository();

  createTrip(data: any) {
    return this.repo.create(data);
  }

  updateTrip(id: string, data: any) {
    return this.repo.update(id, data);
  }

  getTrips() {
    return this.repo.findAll();
  }

  getTripBySlug(slug: string) {
    return this.repo.findBySlug(slug);
  }
}

export default TripService;
