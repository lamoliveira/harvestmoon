import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
//import MyMapComponent from "../components/Map";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { MapContainer } from "../components/MapContainer/MapContainer";


const Growers = () => (
  <div>
    <Hero backgroundImage="../../assets/img/garden.jpg">
      <h1>Harvest Moon</h1>
      <h2>Neighbors page</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Consuming!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          - Products Consumed
          </p>
          <MapContainer 
            selectedPlace = {{name:"Orlando, FL"}}
          />
  
        </Col>
      </Row>
    </Container>
  </div>
);

export default Growers;