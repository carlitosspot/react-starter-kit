import mongoose from 'mongoose';
import ProductPrice from '../../data/models/Product/ProductPrice';
import Product from '../../data/models/Product/Product';

export default function getAllApartmentProducts(req, res) {
  const { id } = req.params;

  if (!id || !id.length) {
    return res.json([]);
  }

  return ProductPrice.find({ apartmentId: id }).then(prices => {
    const productPrices = [];
    const productIds = [];
    prices.forEach(p => {
      productPrices.push(p);
      productIds.push(mongoose.Types.ObjectId(p.productId));
    });

    return Product.find({ _id: productIds }).then(products => {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      const productList = {};
      products.forEach(pdt => {
        productList[pdt._id.toString()] = pdt;
      });
      const apartmentProducts = productPrices.map(pPrice => {
        const { _id, price, apartmentId, available, productId } = pPrice;
        const productInfo = productList[productId];
        const {
          type,
          typeId,
          title,
          description,
          features,
          image,
          brand,
        } = productInfo;
        return {
          _id,
          price,
          apartmentId,
          available,
          type,
          typeId,
          title,
          description,
          features,
          image,
          brand,
        };
      });
      res.json(apartmentProducts);
    });
  });
}
