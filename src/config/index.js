import dotenv from 'dotenv';

dotenv.config();



export const googleApiKey = process.env.GOOGLE_MAPS_API_KEY;
export const apiUrl = process.env.INCIDENTS_API_URL;
