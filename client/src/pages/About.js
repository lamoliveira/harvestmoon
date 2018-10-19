import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";


const About = () => (
  <div>
    <Hero backgroundImage="../../assets/img/lettuce3.jpg">
      <div id="hmLogo"><img src="../../assets/img/hm_logo4.png" /></div>
      {/* <h2>Local + Organic + Sharing</h2> */}
    </Hero>

    <Container style={{ marginTop: 70 }}>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-8">
          <h1>Urban Growing and Sharing</h1>
          <br></br>
          <br></br>
        </Col>
        <Col size="md-1"></Col>
      </Row>

      <Row>
        <Col size="md-2"></Col>
        <Col size="md-4">
          <p>
            - Harvest Moon is an App that promotes Urban Growing and Sharing.
        </p>
          <p>
            - Helping to Grow the food you eat and share it with your neighbors.
        </p>
          <p>
            - Why not, Turn your Lawn into Fruits and Vegetables. (Herbs and Flowers, also)
        </p>
        </Col>
        {/* <Col size="md-1"></Col> */}
        <Col size="md-4">
          <p>
            - Harvest Moon will provide you with the seeds, plants and guidance to plant your own urban garden.
          </p>
          <p>
            - Once an item in your garden is ready to harvest, our very local network will help you share your fresh produce.
          </p>
        </Col>

      </Row>

      {/* <Row>
        <Col size="md-2"></Col>
        <Col size="md-8">
          <p></p>
          <br></br>
          <br></br>
        </Col>
      </Row> */}

    </Container>



    {/* <Hero>
      <iframe width="570" height="315" src="https://www.youtube.com/embed/ng-VskDFPpM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </Hero> */}


    <Container style={{ marginTop: 20 }}>
      <Row>
        {/* <Col size="md-2"></Col> */}
        {/* <Col size="md-12">
        <div id="btFly"><img src="../../assets/img/ezgif.com-crop.gif"/></div>

        </Col> */}
      </Row>

      <Row>
        <Col size="md-2"></Col>
        <Col size="md-8">
          <p></p>
          <br></br>
          <br></br>
        </Col>
      </Row>

    </Container>

    <Hero backgroundImage="../../assets/img/hibiscus4.jpg" >
      <div id="btFly"><img src="../../assets/img/ezgif.com-crop.gif" /></div>
      {/* <div id="hmLogo"><img src="../../assets/img/hm_logo4.png" /></div> */}
      {/* <h2>Share the Extra</h2> */}
    </Hero>

    <Container style={{ marginTop: 90 }}>
      <Row>
        <Col size="md-4">
          <div><img src="../../assets/img/sunflower2.jpg" /> </div>
        </Col>
        <Col size="md-4">
          <p>
            - Harvest Moon will provide you with the seeds, plants and guidance to plant your own urban garden.
      </p>
          <p>
            - Once an item in your garden is ready to harvest, our very local network will help you share the fresh produce.
      </p>
        </Col>
        <Col size="md-4">
          <div><img src="../../assets/img/gardenMix.jpg" /> </div>
        </Col>
      </Row>

      <Row>
        <Col size="md-2"></Col>
        <Col size="md-8">
          <p></p>
          <br></br>
          <br></br>
        </Col>
      </Row>
    </Container>

    <Hero backgroundImage="../../assets/img/crispyLeaf.jpg">
      {/* <Hero backgroundImage="../../assets/img/but_r_Fly.gif"> */}
      {/* <div id="hmLogo"><img src="../../assets/img/hm_logo4.png"/></div> */}
      {/* <h1>Turn your Lawn into Food</h1> */}
      {/* <div id="btFly"><img src="../../assets/img/but_r_Fly.gif"/></div> */}
      <div id="btFly"><img src="../../assets/img/mixLeaf2.gif" /></div>
    </Hero>

    <Container style={{ marginTop: 90 }}>
      <Row>
      <Col size="md-2"></Col>
        <Col size="md-4">
          <div><img src="../../assets/img/sunflower2.jpg" /> </div>
        </Col>
        <Col size="md-4">
          <p>
            - Harvest Moon will provide you with the seeds, plants and guidance to plant your own urban garden.
      </p>
          <p>
            - Once an item in your garden is ready to harvest, our very local network will help you share the fresh produce.
      </p>
        </Col>
      </Row>
      <Row>
      <Col size="md-2"></Col>
      <Col size="md-4">
          <p>
            - Harvest Moon will provide you with the seeds, plants and guidance to plant your own urban garden.
      </p>
          <p>
            - Once an item in your garden is ready to harvest, our very local network will help you share the fresh produce.
      </p>
        </Col>

        <Col size="md-4">
          <div><img src="../../assets/img/gardenMix.jpg" /> </div>
        </Col>
      </Row>

      <Row>
        <Col size="md-2"></Col>
        <Col size="md-8">
          <p></p>
          <br></br>
          <br></br>
        </Col>
      </Row>
    </Container>


    {/* <Container style={{ marginTop: 20 }}>
      <Row>
        <div><img src="../../assets/img/butterFly.gif"/></div>
      </Row>
      <Row>
        <Col size="md-2"></Col>
        <Col size="md-8">
          <p></p>
          <br></br>
          <br></br>
        </Col>
      </Row>
    </Container> */}


  </div>
);

export default About;
