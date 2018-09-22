import express from 'express';
import getAllProductTypes from './getAllProductTypes';
import getProduct from './getProduct';

const productRouter = express.Router();

productRouter.route('/types').get(getAllProductTypes);
productRouter.route('/:id/:apartmentId').get(getProduct);

export default productRouter;
