import stripePackage from 'stripe';
import config from '../../../config';

const { stripeKey } = config;
const stripe = stripePackage(stripeKey);

const chargeCard = ({ token }) =>
  stripe.charges
    .create({
      amount: 1000,
      currency: 'usd',
      source: token,
      description: 'Charge for jenny.rosen@example.com',
    })
    .then(charge => `success ${charge.amount}`)
    .catch(error => error);

export default chargeCard;
