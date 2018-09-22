import Apartment from '../../data/models/Apartment/Apartment';

export default function saveSignedContract(req, res) {
  const property = new Apartment(req.body);

  return property
    .save()
    .then(result => res.json({ status: 'ok', result }))
    .catch(error => res.json({ status: 'error', error }));
}
