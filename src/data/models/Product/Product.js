import mongoose from 'mongoose';

const { Schema } = mongoose;

const Product = new Schema({
  type: String,
  type_id: String,
  title: String,
  description: String,
  features: [],
  image: String,
});

export default mongoose.model('Product', Product);
