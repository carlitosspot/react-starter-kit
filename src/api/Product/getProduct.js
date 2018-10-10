import mongoose from 'mongoose';
import ProductPrice from '../../data/models/Product/ProductPrice';
import Product from '../../data/models/Product/Product';
import formatProduct from '../../utilities/formatProduct';

export default function getProduct(req, res) {
  const { id, apartmentId } = req.params;
  if (!id || !apartmentId) {
    return res.json([]);
  }
  const priceId = mongoose.Types.ObjectId(id);
  return ProductPrice.findOne({ _id: priceId }).then(productPrice => {
    if (productPrice.apartmentId !== apartmentId) {
      return res.json({});
    }
    const productInfoId = mongoose.Types.ObjectId(productPrice.productId);
    return Product.findOne({ _id: productInfoId }).then(productInfo => {
      const result = formatProduct(productPrice, productInfo);
      res.json(result);
    });
  });
}
