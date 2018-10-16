import Stripe from '../../data/models/Stripe';
import Mailer from '../../data/models/Mail';

const { emailReceipt } = Mailer;
const { chargeCard } = Stripe;

export default function completePurchase(req, res) {
  const { items, token, amount } = req.body;

  if (
    !items ||
    !items.length ||
    !token ||
    !token.length ||
    !amount ||
    !token.length
  ) {
    return res.json({ complete: false });
  }
  return chargeCard({ token })
    .then(ccResult => {
      const result = { complete: true, items, ccResult, amount };
      return emailReceipt(amount, items).then(() => result);
    })
    .then(result => {
      res.json(result);
    });
}
