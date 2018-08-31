import express from 'express';
import getAllApartments from './getAllApartments';
import getApartmentDetails from './getApartment';
import saveApartment from './saveApartment';
import updateApartmentDetails from './updateApartmentDetails';

const apartmentRouter = express.Router();

apartmentRouter.route('/').get(getAllApartments);
apartmentRouter.route('/').post(saveApartment);

apartmentRouter.route('/:id').get(getApartmentDetails);
apartmentRouter.route('/:id').put(updateApartmentDetails);

export default apartmentRouter;
