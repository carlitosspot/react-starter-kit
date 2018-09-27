import Product from '../../data/models/Product/Product';

export default function getAllProductTypes(req, res) {
  return Product.find({}).then(products => res.json(products));
}
