import mongoose from 'mongoose';

const { Schema } = mongoose;


const ReservationSchema = new Schema({
  property: String,
  checkIn: String,
  checkOut: String,
  updated_at: { type: Date, default: Date.now },
});

export const getResponseType = () => {
  const docs = {};
  ReservationSchema.eachPath((path, schematype) => {
    switch (schematype.path) {
      case 'reservation_id':
        docs.id = schematype.instance;
        break;
      case 'property':
        docs.property = schematype.instance;
        break;
      case 'property':
        docs.property = schematype.instance;
        break;
      case 'checkIn':
        docs.checkIn = schematype.instance;
        break;
      case 'checkOut':
        docs.checkOut = schematype.instance;
        break;
      case 'updated_at':
        docs.updated_at = schematype.instance;
        break;
      default:
        break;
    }
  });
  return docs;
};

// Create a model based on the schema
export default mongoose.models.Reservation ||
  mongoose.model('Reservation', ReservationSchema);
