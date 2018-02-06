import mongoose from 'mongoose';

const { Schema } = mongoose;

const ApartmentSchema = new Schema({
  name: String,
  listed: Boolean,
  address: String,
  description: String,
  wifiName: String,
  wifiPassword: String,
  instructions: String,
  houseRules: String,
  updated_at: { type: Date, default: Date.now },
});

// Create a model based on the schema
export default mongoose.model('Apartment', ApartmentSchema);
