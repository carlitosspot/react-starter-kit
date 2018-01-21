import mongoose from 'mongoose';
import config from '../config';

const { databaseUrl, databaseName } = config;
const dbUrl = `${databaseUrl}${databaseName}`;
// Connect to MongoDB and create/use database called todoAppTest
mongoose.connect(dbUrl);

// Create a schema
const ApartmentSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});

// Create a model based on the schema
const Apartment = mongoose.model('Apartment', ApartmentSchema);

export default function saveSignedContract(req, res) {
  // Create a todo in memory
  const apartment = new Apartment({
    name: 'Master NodeJS',
    completed: false,
    note: 'Getting there...',
  });

  apartment.save();

  return res.json({ done: req.body });
}
