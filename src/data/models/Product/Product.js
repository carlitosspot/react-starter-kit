import mongoose from 'mongoose';

const { Schema } = mongoose;

const Product = new Schema({
  type: String,
  typeId: String,
  title: String,
  description: String,
  features: [],
  image: String,
});

export default mongoose.model('Product', Product);
