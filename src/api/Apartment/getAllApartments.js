import Apartment from '../../data/models/Apartment';

export default function getAllApartments(req, res) {
  return Apartment.find({}).then(apartments => res.json(apartments));
}
