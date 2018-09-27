import ProductType from '../../data/models/Product/ProductType';

export default function getAllProductTypes(req, res) {
  return ProductType.find({}).then(productTypes => res.json(productTypes));
}
