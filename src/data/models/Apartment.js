import mongoose from 'mongoose';

const { Schema } = mongoose;

const ApartmentSchema = new Schema({
  name: String,
  listed: Boolean,
  description: String,
  updated_at: { type: Date, default: Date.now },
});

// Create a model based on the schema
export default mongoose.model('Apartment', ApartmentSchema);
