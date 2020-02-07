import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

const DEF_VA_LNG = 37.541885;
const DEF_VA_LAT = -77.440624;

// NOTE: had to go at last minute with this library
// gmaps was not working with api key issues
class IncidentMap extends Component {
    mapLocation(locationProps) {
        return {
            lat: locationProps.lat || DEF_VA_LAT,
            lng: locationProps.lng || DEF_VA_LNG,
        }
    }
    render() {
        console.log('map props', this.props);
        const { lat, lng } = this.mapLocation(this.props);
        return (
            <div>
                <Map center={[lat, lng]} zoom={12}>
                    <Marker anchor={[lat, lng]} payload={1} onClick={({ event, anchor, payload }) => {}} />

                    <Overlay anchor={[lat, lng]} offset={[120, 79]}>
                        <img src='pigeon.jpg' width={240} height={158} alt='' />
                    </Overlay>
                </Map> 
            </div>
                 

        );
      }
}

IncidentMap.defaultProps = {
    lng: DEF_VA_LNG,
    lat: DEF_VA_LAT,
    notFound: false,
    isMarkerShown: true,
    onMarkerClick: () => console.log('marker clicked!'),
    styles: {
        width: '100%',
        height: '100%',
    }
};

IncidentMap.propTypes = {
    lng: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    isMarkerShown: PropTypes.bool.isRequired,
    notFound: PropTypes.bool.isRequired,
    onMarkerClick: PropTypes.func
};

export default IncidentMap;