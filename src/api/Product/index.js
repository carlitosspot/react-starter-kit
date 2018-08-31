import express from 'express';
// import getAllProducts from './getAllProducts';

const productTypes = [
  {
    _id: '5a7937c16915e6722749909ff',
    type: 'cleanings',
    longName: 'Extra Cleaning',
    shortName: 'Cleaning',
  },
  {
    _id: '5a7937c16915e6722749909ee',
    type: 'towels',
    longName: 'Extra Towel',
    shortName: 'Towel',
  },
  {
    _id: '5a7937c16915e6722749909gg',
    type: 'beds',
    longName: 'Extra Bed',
    shortName: 'Bed',
  },
  {
    _id: '5a7937c16915e6722749909gg',
    type: 'gameConsoles',
    longName: 'Game Console Rentals',
    shortName: 'Game Consoles',
  },
  {
    _id: '5a7937c16915e6722749909gg',
    type: 'gameConsoles',
    longName: 'Game Console Rentals',
    shortName: 'Game Consoles',
  },
  {
    _id: '5a7937c16915e6722749909gg',
    type: 'boardGames',
    longName: 'Game Board Rentals',
    shortName: 'Game Boards',
  },
];

const productRouter = express.Router();

productRouter.route('/types').get((req, res) => res.json(productTypes));

export default productRouter;
