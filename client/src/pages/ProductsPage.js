import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Products from "../../src/pages/Products"


const ProductsPage = (props) => (
  <div>
    <Hero backgroundImage="../../assets/img/hibiscus4.jpg">
      <div id="hmLogo" className="animated jello delay-3s"><img src="../../assets/img/hm_logo4.png" />
        <h2>Orlando</h2>
      </div>
    </Hero>

    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <Products userid={props.auth.userId} />
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <br></br>
          <br></br>
          <br></br>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ProductsPage;
