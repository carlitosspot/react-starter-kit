const formatProduct = (Price, Product) => {
  const { _id, price, available, productId, apartmentId } = Price;
  const { type, typeId, title, description, features, image, brand } = Product;

  return {
    _id,
    price,
    apartmentId,
    available,
    productId,
    type,
    typeId,
    title,
    description,
    features,
    image,
    brand,
  };
};

export default formatProduct;
