import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SignIn from "../components/SignIn";

const Login = () => (
  <div>
    <Hero backgroundImage="../../assets/img/kale.jpg">
      <h1>Harvest Moon</h1>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Fill login and password!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        <SignIn />
  
        </Col>
      </Row>
    </Container>
  </div>
);

export default Login;
