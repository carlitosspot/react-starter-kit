import express from 'express';
import getAllApartments from './getAllApartments';
import getApartmentDetails from './getApartment';
import saveApartment from './saveApartment';
import updateApartmentDetails from './updateApartmentDetails';
import responseDatatype from './responseType';

const apartmentRouter = express.Router();
const documentation = express.Router();

documentation.route('/').get(responseDatatype);

apartmentRouter.use('/documentation', documentation);

apartmentRouter.route('/').get(getAllApartments);
apartmentRouter.route('/').post(saveApartment);

apartmentRouter.route('/:id').get(getApartmentDetails);
apartmentRouter.route('/:id').put(updateApartmentDetails);

export default apartmentRouter;
