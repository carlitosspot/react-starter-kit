import mongoose from 'mongoose';

const { Schema } = mongoose;

const Product = new Schema({
  type: String,
  typeId: String,
  brand: String,
  title: String,
  description: String,
  features: [],
  image: String,
});

export const getResponseType = () => {
  const docs = {};
  Product.eachPath((path, schematype) => {
    switch (schematype.path) {
      case 'product_id':
        docs.id = schematype.instance;
        break;
      case 'type':
        docs.type = schematype.instance;
        break;
      case 'typeId':
        docs.typeId = schematype.instance;
        break;
      case 'brand':
        docs.brand = schematype.instance;
        break;
      case 'title':
        docs.title = schematype.instance;
        break;
      case 'description':
        docs.description = schematype.instance;
        break;
      case 'features':
        docs.features = schematype.instance;
        break;
      case 'image':
        docs.image = schematype.instance;
        break;
      default:
        break;
    }
  });
  return docs;
};

export default mongoose.models.Product || mongoose.model('Product', Product);
