import express from 'express';
import getAllApartments from './getAllApartments';
import getApartmentDetails from './getApartment';
import saveSignedContract from './saveSignedContract';
import getContracts from './getContract';

const api = express();

/**
 * Get apartment info/details
 */
api.get('/apartments/:id', getApartmentDetails);

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

export default api;
