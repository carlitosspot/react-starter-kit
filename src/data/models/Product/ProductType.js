import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductType = new Schema({
  type: String,
  longName: String,
  shortName: String,
});

export default mongoose.models.ProductType ||
  mongoose.model('ProductType', ProductType);
