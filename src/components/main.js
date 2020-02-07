import React, { Component } from 'react';
import SearchPanel from './SearchPanel';
import IncidentMap from './IncidentMap';
import { fetchIncident } from '../service/incidentService';

class Main extends Component {
    constructor (props) {
        super(props)
        this.state = {
            notFound: false,
            lng: null,
            lat: null,
        };
    }

    async loadIncident(mockIncidentId = 1) {
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

    handleClickSearch = async () => {
        console.log('fetching incident data...')
        await this.loadIncident();
    }

    render () {
        const {
            lng,
            lat,
            notFound
        } = this.state;
        console.log('this.state', this.state);
        return (
            <div>
                <SearchPanel 
                    handleClick={this.handleClickSearch}
                />
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