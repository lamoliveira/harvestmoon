import React from 'react';
//import Component from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends React.Component {
  state = {
    selectedPlace: {name: ""} ,
    onMarkerClick:"",
    onInfoWindowClose: ""

  };
  static defaultProps = {
    center: {lat: 6.5244, lng: 3.3792},
    zoom: 11
};
  render() {
    return (
      
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBSHPT5Ec9qPtb0bpk4H6tu82r3Cv0h_lc")
})(MapContainer)