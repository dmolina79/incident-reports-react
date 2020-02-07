import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
import IncidentMap from './IncidentMap';
import { fetchIncident } from '../service/incidentService';

class Main extends Component {
    state = {
        notFound: false,
        lng: null,
        lat: null,
    }

    async fetchIncident(mockIncidentId = 1) {
        // pretend method goes to a real API
        const { lat, lng } = await fetchIncident(mockIncidentId);

        // if we dont have lat or lng incident not found
        if (!lat || !lng) {
            this.setState({ 
                notFound: true,
            });
        } else {
            this.setState({ 
                notFound: false,
                lat,
                lng
            });
        }
    }

    render () {
        const {
            lng,
            lat,
            notFound
        } = this.state;
        return (
            <div>
                <SearchPanel />
                <IncidentMap 
                    isMarkerShown
                    notFound={notFound}
                    lat={lat}
                    lng={lng}
                />
            </div>
        )
    }
}

export default Main;