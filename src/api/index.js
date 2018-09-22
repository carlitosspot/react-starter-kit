import express from 'express';
import Apartment from './Apartment/getApartment';

const restRouter = express.Router();

restRouter.use('/apartments', Apartment);

export default restRouter;
