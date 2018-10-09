import mongoose from 'mongoose';
import config from '../config';
import apartmentData from './apartments.json';
import productTypesData from './productTypes.json';
import productsData from './products.json';
import Apartment from '../data/models/Apartment/Apartment';
import ProductType from '../data/models/Product/ProductType';
import Product from '../data/models/Product/Product';
import ProductPrice from '../data/models/Product/ProductPrice';

const { databaseUrl, databaseName } = config;
const dbUrl = `${databaseUrl}${databaseName}`;

const resetApartments = () =>
  Apartment.find({})
    .remove()
    .then(() => {
      const ids = apartmentData.map(info => new Apartment(info).save());
      return Promise.all(ids);
    });

const resetProductTypes = () =>
  ProductType.find({})
    .remove()
    .then(() => {
      const ids = productTypesData.map(info => new ProductType(info).save());
      return Promise.all(ids);
    });

const resetProducts = productTypes => {
  const types = JSON.parse(JSON.stringify(productTypes));
  const data = productsData.map(info => {
    const typeId = types.find(typeInfo => typeInfo.type === info.type);
    return { ...info, typeId };
  });

  return Product.find({})
    .remove()
    .then(() => {
      const ids = data.map(info => new Product(info).save());
      return Promise.all(ids);
    });
};

const resetProductPrices = (apartments, products) =>
  ProductPrice.find({})
    .remove()
    .then(() => {
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      const apartmentIds = [];
      apartments.forEach(a => {
        const id = a._id.toString();
        apartmentIds.push(id);
      });

      const productPrices = apartmentIds.map(apartmentId =>
        products.map(p => {
          const productId = p._id.toString();
          const price = {
            apartmentId,
            price: '100',
            productId,
            available: true,
          };

          return new ProductPrice(price).save();
        }),
      );

      return Promise.all(productPrices);
    });

const connect = (req, res) =>
  mongoose.connect(dbUrl).then(
    () =>
      Promise.all([resetApartments(), resetProductTypes()])
        .then(values => {
          const [apartments, productTypes] = values;
          return resetProducts(productTypes).then(products => [
            apartments,
            productTypes,
            products,
          ]);
        })
        .then(values => {
          const [apartments, productTypes, products] = values;
          return resetProductPrices(apartments, products).then(prices => {
            const totalPrices = prices.length;
            const totalApartments = apartments.length;
            const totalProductTypes = productTypes.length;
            const totalProducts = products.length;
            res.send({
              totalApartments,
              totalProductTypes,
              totalPrices,
              totalProducts,
            });
          });
        }),
    () => res.send('unable to load data'),
  );

export default connect;
