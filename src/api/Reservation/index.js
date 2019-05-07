import express from 'express';
import getAllReservations from './getAllReservations';
import responseDatatype from './responseType';

const reservationRouter = express.Router();
const documentation = express.Router();

documentation.route('/').get(responseDatatype);

reservationRouter.use('/documentation', documentation);

reservationRouter.route('/').get(getAllReservations);

export default reservationRouter;
