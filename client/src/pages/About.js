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
      <h2>Orlando</h2>
    </Hero>

    <Container style={{ marginTop: 70 }}>
      <Row>
        <Col size="md-3"></Col>
        <Col size="md-9">
          <h1>Changing the Urban Landscape</h1>
          <br></br>
          <br></br>
        </Col>
        <Col size="md-1"></Col>
      </Row>

      <Row>
        {/* <Col size="md-2"></Col> */}
        <Col size="md-4">
          <p>There is a new movement coming to your neighborhood. It's an inventive way to transform urban landscapes into fresh food for the community.
           </p>
          <p>
            Many residential neighborhoods are changing from having a high maintenance lawns into colorful vegetable and flower gardens.
          </p>

        </Col>
        {/* <Col size="md-1"></Col> */}
        <Col size="md-4">
          <p>
            Imagine the beauty to be observed from your kitchen window as you welcome wildlife into your garden.
           </p>
          <p>
            Enjoy the beauty of butterflies and honeybees flitting from flower to flower. Just the sunlight shining through tender green leaves
            is sure to start your day with grace.
          </p>

        </Col>
        <Col size="md-4">
          <p>
            Wouldn't it be nice to have fresh vegetables in your salad and an abundance to share with your neighbors.
          </p>
          <p>
            Changing the urban landscape from hard sharp edges to patches of green beauty and nature will truly benefit us all.
          </p>

        </Col>

      </Row>

    </Container>

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

    <Hero backgroundImage="../../assets/img/crispyLeaf.jpg">
      <div id="btFly"><img src="../../assets/img/mixLeaf2.gif" /></div>
    </Hero>


    <Container style={{ marginTop: 90 }}>
      <Row>
        <Col size="md-3">
          <div><img src="../../assets/img/purple-install.png" /> </div>
          <br></br>
          <p>
            GROW
      </p>
          <p>
            Providing seeds, plants and guidance to urban gardeners.
      </p>
        </Col>

        <Col size="md-3">
          <div><img src="../../assets/img/pink-donate.png" /> </div>
          <br></br>
          <p>
            SHARE
      </p>
          <p>
            Let our very local network help you share the fresh produce.
      </p>
        </Col>
        <Col size="md-3">
          <div><img src="../../assets/img/kitchen-utensils.png" /> </div>
          <br></br>
          <p>
            COOK
      </p>
          <p>
            Are you wondering how to prepare the harvest?  Try our Recipe Finder.
      </p>
        </Col>
        <Col size="md-3">
          <div><img src="../../assets/img/icon-hands.png" /> </div>
          <br></br>
          <p>
            JOIN
      </p>
          <p>
            Gain access to our gardener's database and our hyper local network.
      </p>
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


      {/* <Row>
        <Col size="md-2"></Col>
        <Col size="md-8">
          <p></p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Col>
      </Row> */}
    </Container>


    <Hero backgroundImage="../../assets/img/lettuce3.jpg" >
      <div id="btFly"><img src="../../assets/img/ezgif.com-crop.gif" /></div>
    </Hero>

    <Container style={{ marginTop: 120 }}>
      <Row>
        <Col size="md-3">
          <div><img src="../../assets/img/facebook.png" /> </div>
          <br></br>
          <p>
          FACEBOOK
      </p>

        </Col>

        <Col size="md-3">
          <div><img src="../../assets/img/instagram.png" /> </div>
          <br></br>
          <p>
          INSTAGRAM
      </p>

        </Col>
        <Col size="md-3">
          <div><img src="../../assets/img/youtube.png" /> </div>
          <br></br>
          <p>
          YOUTUBE
      </p>

        </Col>
        <Col size="md-3">
          <div><img src="../../assets/img/Octocat.png" /> </div>
          <br></br>
          <p>
          GITHUB
      </p>

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
      {/* <Row>
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
      <Row>
        <Col size="md-4">
          <p>
            - Harvest Moon will provide you with the seeds, plants and guidance to plant your own urban garden.
      </p>
          <p>
            - Once an item in your garden is ready to harvest, our very local network will help you share the fresh produce.
      </p>
        </Col>
        <Col size="md-4">
          <div><img src="../../assets/img/hibiscusSmall.jpg" /> </div>
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
        <Col size="md-8">
          <p></p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Col>
      </Row> */}
    </Container>
  </div>
);

export default About;
