import mongoose from 'mongoose';

const { Schema } = mongoose;

const ApartmentSchema = new Schema({
  name: String,
  listed: Boolean,
  address: String,
  apartmentNumber: String,
  city: String,
  zip: String,
  description: String,
  wifiName: String,
  wifiPassword: String,
  instructions: String,
  houseRules: String,
  updatedAt: { type: Date, default: Date.now },
});

export const getResponseType = () => {
  const docs = { object: 'String' };

  ApartmentSchema.eachPath((path, schematype) => {
    switch (schematype.path) {
      case 'unitLabel':
        docs.id = schematype.instance;
        break;
      case 'name':
        docs.name = schematype.instance;
        break;
      case 'listed':
        docs.listed = schematype.instance;
        break;
      case 'address':
        docs.address = schematype.instance;
        break;
      case 'apartmentNumber':
        docs.apartmentNumber = schematype.instance;
        break;
      case 'city':
        docs.city = schematype.instance;
        break;
      case 'zip':
        docs.zip = schematype.instance;
        break;
      case 'description':
        docs.description = schematype.instance;
        break;
      case 'wifiName':
        docs.wifiName = schematype.instance;
        break;
      case 'wifiPassword':
        docs.wifiPassword = schematype.instance;
        break;
      case 'instructions':
        docs.instructions = schematype.instance;
        break;
      case 'updatedAt':
        docs.updatedAt = schematype.instance;
        break;
      default:
        break;
    }
  });
  return docs;
};

// Create a model based on the schema
export default mongoose.models.Apartment ||
  mongoose.model('Apartment', ApartmentSchema);
