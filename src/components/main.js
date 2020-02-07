import React, { Component } from 'react';
import { fetchIncident } from '../service/incidentService';

class Main extends Component {
    async componentDidMount() {
        await fetchIncident(1);
    }
    render () {
        return (
            <div>
                Main components
            </div>
        )
    }
}

export default Main;