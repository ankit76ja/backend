import { ItineraryRepository } from './itinerary.repository';

export class ItineraryService {
  private repo = new ItineraryRepository();

  create(data: any) {
    return this.repo.create(data);
  }

  update(id: string, data: any) {
    return this.repo.update(id, data);
  }

  getByTrip(tripId: string) {
    return this.repo.findByTrip(tripId);
  }
}

export default ItineraryService;
