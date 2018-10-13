import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Login = () => (
  <div>
    <Hero backgroundImage="../../assets/img/kale.jpg">
      <h1>Harvest Moon</h1>
      <h2>Login to see our community</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Fill login and password!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          - Create form to user login
          </p>
          <p>
          - Username
          </p>
          <p>
          - Password
          </p>
          <p>
          - Submit
          </p>
          <p>
          - Is a blablabla
          </p>
  
        </Col>
      </Row>
    </Container>
  </div>
);

export default Login;
