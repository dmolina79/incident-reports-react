import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
import IncidentMap from './IncidentMap';
import { fetchIncident } from '../service/incidentService';

class Main extends Component {
    state = {
        notFound: false,

    }
    async componentDidMount() {
        const mockIncidentId = 1;
        const { lat, lng } = await fetchIncident(mockIncidentId);

        // if we dont have lat or lng incident not found
        if (!lat || !lng) {
            this.setState({ notFound: true });
        } else {

        }
    }
    render () {
        return (
            <div>
                Main component
                <SearchPanel />
                <IncidentMap />
            </div>
        )
    }
}

export default Main;