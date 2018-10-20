import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Books from "./Books"

const Products = (props) => (
  <div>
    <Hero backgroundImage="../../assets/img/garden.jpg">
      <h1>Harvest Moon</h1>
      <h2>Products page</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <Books userid={props.auth.userId}/>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Products;
