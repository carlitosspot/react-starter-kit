import Reservation from '../../data/models/Reservation/Reservation';

export default function getAllReservations(req, res) {
  return Reservation.find({}).then(reservations => res.json(reservations));
}
