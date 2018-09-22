import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductPrice = new Schema({
  product_id: String,
  price: Number,
  apartment_id: String,
});

export default mongoose.model('ProductPrice', ProductPrice);
