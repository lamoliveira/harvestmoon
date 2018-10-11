import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="../../assets/img/sunflower.jpg">
      <h1>Harvest Moon</h1>
      <h2>Very Local + Totally Organic + Always Sharing</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To our Comnunity!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          - Is a group that promotes Urban Food Production and Distribution.
          </p>
          <p>
          - Grow the food you eat and share it with your neighbors.
          </p>
          <p>
          - Turn your Lawn into Food.
          </p>
          <p>
          - Harvest Moon will provide you with the seeds, plants and guidance to plant your own urban garden.
          </p>
          <p>
          - Once your garden is ready for harvest, our very local network will help you share the Bounty.
          </p>
  
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
