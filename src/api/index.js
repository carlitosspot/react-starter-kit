import express from 'express';
import Apartment from './Apartment';
import Reservation from './Reservation';

const restRouter = express.Router();
restRouter.use('/apartments', Apartment);
restRouter.use('/reservations', Reservation);

export default restRouter;
