import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

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
          <p>
          - Name of Product
          </p>
          <p>
          - Quantity consumed
          </p>
          <p>
          - Date consumed
          </p>
          <p>
          - List of products the neighbor wish
          </p>
          <p>
          - Comments: possibility to make a product to share like a pie or jelly
          </p>
  
        </Col>
      </Row>
    </Container>
  </div>
);

export default Growers;
