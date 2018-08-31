import express from 'express';
import getAllReservations from './getAllReservations';

const reservationRouter = express.Router();

reservationRouter.route('/').get(getAllReservations);

export default reservationRouter;
