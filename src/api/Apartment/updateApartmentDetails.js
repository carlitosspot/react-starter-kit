import Apartment from '../../data/models/Apartment/Apartment';

export default function updateApartmentDetails(req, res) {
  /* eslint no-underscore-dangle: 0 */
  return Apartment.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then(result => res.json({ status: 'ok', result }))
    .catch(error => res.json({ status: 'error', error }));
}
