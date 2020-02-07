import axios from 'axios';
import _ from 'lodash';
import { apiUrl, weatherApiKey } from '../config';
import sampleIncident from './sampleJson/F01705150090.json';

const WEATHER_API_URL = 'https://api.darksky.net/forecast/';

const parseIncidentData = (incident) => {
    return {
        lat: _.get(incident, 'address.latitude'),
        lng: _.get(incident, 'address.longitude'),
        time: _.get(incident, 'description.event_opened')
    }
}

const fetchWeatherInfo = async ({ lng, lat, time }) => {
        const unixTime = (new Date(time)).getTime() / 1000;
        const queryUrl = `${WEATHER_API_URL}${weatherApiKey}/${lat},${lng},${unixTime}`;

        console.log(' wheater url', queryUrl);
        const config = {
            headers: {
                "Content-Type": "application/json",
                // This line was having CORS issues from chrome since API is http
                // "Access-Control-Allow-Origin": "*"
            },
            crossdomain: true,
        }    
        const res = await axios.get(queryUrl, config);
    
        if (_.get(res, 'data')) {
            return res.data;
        } else {
            return null;
        }   
}

// NOTE: emulating an API call to incident API
export const fetchIncident = async (incidentId) => {
    if (!incidentId || isNaN(incidentId)) {
        throw new Error('Expected a valid incident number');
    }

    const parsedRes =  parseIncidentData(sampleIncident);

    const weatherInfo = await fetchWeatherInfo(parsedRes);

    const weatherSummary = _.get(weatherInfo, 'hourly.summary', 'No weather information found')

    return {
        ...parsedRes,
        weatherSummary
    };
}


const fetchEnerApi = async () => {
        const queryUrl = `${apiUrl}?f=json&pretty=true`;

        const config = {
            headers: {
                "Content-Type": "application/json",
                // This line was having CORS issues from chrome since API is http
                // "Access-Control-Allow-Origin": "*"
            },
            crossdomain: true,
        }    
        const res = await axios.get(queryUrl, config);
    
        if (_.get(res, 'data')) {
            return res.data;
        } else {
            return null;
        }   
}