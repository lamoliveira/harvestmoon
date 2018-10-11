import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Growers = () => (
  <div>
    <Hero backgroundImage="../../assets/img/garden.jpg">
      <h1>Harvest Moon</h1>
      <h2>Growers page</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Growing!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          - Products Shared (list with history)
          </p>
          <p>
          - New Product to share with:
          </p>
          <p>
          Quantity shared
          </p>
          <p>
          Date available
          </p>
          <p>
          Quantity available
          </p>
  
        </Col>
      </Row>
    </Container>
  </div>
);

export default Growers;
