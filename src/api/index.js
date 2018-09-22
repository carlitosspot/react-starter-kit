import express from 'express';
import getApartmentDetails from './Apartment/getApartment';

const api = express();

/**
 * Get apartment info/details
 */
api.get('/apartments/:id', getApartmentDetails);

export default api;
