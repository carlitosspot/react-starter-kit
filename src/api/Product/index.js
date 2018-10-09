import express from 'express';
import getAllProductTypes from './getAllProductTypes';
import getAllProducts from './getAllProducts';
import getApartmentProducts from './getApartmentProducts';
import getProduct from './getProduct';

const productRouter = express.Router();

productRouter.route('/').get(getAllProducts);
productRouter.route('/types').get(getAllProductTypes);
productRouter.route('/apartment/:id').get(getApartmentProducts);
productRouter.route('/:id/apartment/:apartmentId').get(getProduct);

export default productRouter;
