import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Join = () => (
  <div>
    <Hero backgroundImage="../../assets/img/kale.jpg">
      <h1>Harvest Moon</h1>
      <h2>Join our community</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Fill all fields to complete your registration!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          - Create form to user sign in
          </p>
          <p>
          - Name
          </p>
          <p>
          - Address
          </p>
          <p>
          - Phone
          </p>
          <p>
          - email
          </p>
          <p>
          - Picture
          </p>
          
          <p>
          - Product Planted (List with date planted and date harvest)
          </p>
  
        </Col>
      </Row>
    </Container>
  </div>
);

export default Join;
