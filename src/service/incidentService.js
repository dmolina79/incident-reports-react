import axios from 'axios';
import _ from 'lodash';
import { apiUrl } from '../config';
import sampleIncident from './sampleJson/F01705150090.json';

const parseIncidentData = (incident) => {
    return {
        lat: _.get(incident, 'address.latitude'),
        lng: _.get(incident, 'address.longitude'),
    }
}


// emulating an API call
export const fetchIncident = async (incidentId) => {
    if (!incidentId || isNaN(incidentId)) {
        throw new Error('Expected a valid incident number');
    }

    const parsedRes =  parseIncidentData(sampleIncident);
    console.log('parsedRes', parsedRes);

    return parsedRes;
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