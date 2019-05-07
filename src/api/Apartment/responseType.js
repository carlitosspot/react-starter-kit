import { getResponseType } from '../../data/models/Apartment/Apartment';

export default (req, res) => {
  const structure = getResponseType();
  return res.json(structure);
};
