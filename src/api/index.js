import express from 'express';
import Apartment from './Apartment';
import Reservation from './Reservation';
import Product from './Product';

const restRouter = express.Router();
restRouter.use('/apartments', Apartment);
restRouter.use('/reservations', Reservation);
restRouter.use('/products', Product);

export default restRouter;
