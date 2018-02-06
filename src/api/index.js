import express from 'express';
import Apartment from './Apartment';
import Reservation from './Reservation';
import saveSignedContract from './saveSignedContract';
import getContracts from './getContract';
import updateApartmentDetails from './updateApartmentDetails';
import saveApartment from './saveApartment';

const api = express();

const { getApartmentDetails, getAllApartments } = Apartment;
const { getAllReservations } = Reservation;

api.get('/reservations', getAllReservations);

/**
 * Get apartment info/details
 */
api.get('/apartments/:id', getApartmentDetails);

api.put('/apartments/:id', updateApartmentDetails);

/**
 * Get all list of apartments
 */
api.get('/apartments', getAllApartments);

/**
 * Download new guest contract
 */
api.get('/contracts/:id', getContracts);

/**
 * Save signed guest contract
 */
api.post('/contracts', saveSignedContract);

/**
 * Save new apartment
 */
api.post('/apartments', saveApartment);

export default api;
