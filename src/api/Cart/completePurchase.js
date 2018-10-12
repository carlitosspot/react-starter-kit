import Stripe from '../../data/models/Stripe';

const { chargeCard } = Stripe;

export default function completePurchase(req, res) {
  const { items, token, amount } = req.body;

  if (!items || !items.length || !token || !token.length) {
    return res.json({ complete: false });
  }
  return chargeCard({ token }).then(result =>
    res.json({ complete: true, items, result, amount }),
  );
}
