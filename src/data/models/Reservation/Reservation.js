import mongoose from 'mongoose';

const { Schema } = mongoose;

const ReservationSchema = new Schema({
  property: String,
  checkIn: String,
  checkOut: String,
  updated_at: { type: Date, default: Date.now },
});

// Create a model based on the schema
export default mongoose.model('Reservation', ReservationSchema);
