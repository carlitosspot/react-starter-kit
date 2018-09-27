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

// Create a model based on the schema
export default mongoose.model('Apartment', ApartmentSchema);
