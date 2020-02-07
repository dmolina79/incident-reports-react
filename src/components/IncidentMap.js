import React from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';

// NOTE: following docs from 
// https://tomchentw.github.io/react-google-maps/#usage--configuration
const IncidentMap = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        center: { lat: 37.541885, lng: -77.440624 }
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
    >
        {/*  */}
        <InfoBox
            defaultPosition={
                // eslint-disable-next-line no-undef
                new google.maps.LatLng(props.center.lat, props.center.lng)
            }
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
            <div
                style={{
                    backgroundColor: 'yellow',
                    opacity: '0.75',
                    padding: '12px'
                }}
            >
                <div style={{ fontSize: '16px', fontColor: '#08233B' }}>
                    Hello, Richmond!
                </div>
            </div>
        </InfoBox>
        {/*  */}
        {props.isMarkerShown && (
            <Marker
                position={{ lat: props.lat, lng: props.lng }}
                onClick={props.onMarkerClick}
            />
        )}
    </GoogleMap>
));

IncidentMap.defaultProps = {
    isMarkerShown: true,
    onMarkerClick: () => console.log('marker clicked!')
};

IncidentMap.propTypes = {
    lng: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    isMarkerShown: PropTypes.bool.isRequired,
    onMarkerClick: PropTypes.func
};

export default IncidentMap;
