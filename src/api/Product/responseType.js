import { getResponseType } from '../../data/models/Product/Product';

export default (req, res) => {
  const structure = getResponseType();
  return res.json(structure);
};
