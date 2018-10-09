export default function completePurchase(req, res) {
  const { items } = req.body;

  if (!items || !items.length) {
    return res.json({ complete: false });
  }

  return res.json({ complete: true, items });
}
