import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductPrice = new Schema({
  productId: String,
  price: String,
  apartmentId: String,
  available: Boolean,
});

export default mongoose.models.ProductPrice ||
  mongoose.model('ProductPrice', ProductPrice);
