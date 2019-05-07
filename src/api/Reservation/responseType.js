import { getResponseType } from '../../data/models/Reservation/Reservation';

export default (req, res) => {
  const structure = getResponseType();
  return res.json(structure);
};
