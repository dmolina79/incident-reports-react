import axios from 'axios';
import _ from 'lodash';
import { apiUrl } from '../config';


export const fetchIncident = async (incidentId) => {
    console.log('fetchIncident', incidentId);
    if (!incidentId || isNaN(incidentId)) {
        throw new Error('Expected a valid incident number');
    }
    const queryUrl = `${apiUrl}${incidentId}?f=json&pretty=true`;

    const config = {
        headers: {
            "Content-Type": "application/json",
            // This line was having CORS issues from chrome since API is http
            // "Access-Control-Allow-Origin": "*"
        },
        crossdomain: true,
    }    
    console.log('queryUrl', queryUrl);
    const res = await axios.get(queryUrl, config);

    console.log('res', res);

    if (_.get(res, 'data')) {
        return res.data;
    } else {
        return null;
    }    
}