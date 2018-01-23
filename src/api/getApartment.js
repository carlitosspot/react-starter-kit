import Apartment from '../data/models/Apartment';

export default function getApartment(req, res) {
  return Apartment.findById(req.params.id).then(apartment =>
    res.json(apartment),
  );
}
