import express from 'express';
import completePurchase from './completePurchase';

const cartRouter = express.Router();

cartRouter.route('/').post(completePurchase);

export default cartRouter;
