import express from 'express';
import cors from 'cors';
import tripRoutes from './modules/trips/trip.routes';
import itineraryRoutes from './modules/itineraries/itinerary.routes';
import bookingRoutes from './modules/bookings/booking.routes';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/trips', tripRoutes);
app.use('/api/itineraries', itineraryRoutes);
app.use('/api/bookings', bookingRoutes);

export default app;
