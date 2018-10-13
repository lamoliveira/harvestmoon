import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Howtogrow = () => (
  <div>
    <Hero backgroundImage="../../assets/img/kale.jpg">
      <h1>Harvest Moon</h1>
      <h2>How To Share</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Sharing with Love!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          - Public page with information. (Tyler)
          </p>
          <p>
          - Is a blablabla
          </p>
          <p>
          - Is a blablabla
          </p>
          <p>
          - Is a blablabla
          </p>
          <p>
          - Is a blablabla
          </p>
  
        </Col>
      </Row>
    </Container>
  </div>
);

export default Howtogrow;
