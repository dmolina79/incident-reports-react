import axios from 'axios';
import _ from 'lodash';
import { apiUrl } from '../config';


export const fetchIncident = async (incidentId) => {
    if (!incidentId || isNaN(incidentId)) {
        throw new Error('Expected a valid incident number');
    }
    const queryUrl = `${apiUrl}${incidentId}`;
    const res = await axios.get(queryUrl);

    console.log('res', res);

    if (_.get(res, 'data')) {
        return res.data;
    } else {
        return null;
    }    
}