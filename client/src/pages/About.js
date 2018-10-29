import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";



const About = () => (
  <div>
    <Hero backgroundImage="../../assets/img/lettuce3.jpg">
      <div id="hmLogo" className="animated tada delay-3s"><img src="../../assets/img/hm_logo4.png" />
        <br></br>
        <h2>Orlando</h2>
      </div>
    </Hero>

    <Container style={{ marginTop: 70 }}>
      <Row>
        <Col size="md-12">
          <h1 className="text-center">Changing the Urban Landscape</h1>
          <br></br>
          <br></br>
        </Col>
      </Row>

      <Row>
        {/* <Col size="md-2"></Col> */}
        <Col size="md-4">
        <div className="a">
          <p>There is a new movement coming to your neighborhood. It's an inventive way to transform urban landscapes into fresh food for the community.
           </p>
          <p>
            Many residential neighborhoods are changing from having a high maintenance lawn into a colorful vegetable and flower garden.
          </p>
        </div>
        </Col>
        {/* <Col size="md-1"></Col> */}
        <Col size="md-4">
        <div className="a">
          <p>
            Imagine the beauty to be observed from your kitchen window as you welcome wildlife into your garden.
           </p>
          <p>
            Enjoy the beauty of butterflies and honeybees flitting from flower to flower. Delight in the sunlight shining through tender green leaves.
            It is sure to start your day with grace.
          </p>
        </div>
        </Col>
        <Col size="md-4">
        <div className="a">
          <p>
            Wouldn't it be nice to have fresh vegetables in your salad and an abundance to share with your neighbors?
          </p>
          <p>
            Changing the urban landscape from hard sharp edges to patches of green beauty and nature will truly benefit us all.
          </p>
        </div>
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
        <Col size="md-12">
          <br></br>
          <br></br>
          <br></br>
        </Col>
      </Row>

    </Container>

    {/* <Hero backgroundImage="../../assets/img/crispyLeaf.jpg">
      <div id="btFly"><img src="../../assets/img/leaf2food2.gif" /></div>
    </Hero> */}

    <Hero backgroundImage="../../assets/img/crispyLeaf.jpg">
      <div id="btFly"><img src="../../assets/img/mixLeaf2.gif" /></div>
    </Hero>



    <Container style={{ marginTop: 90 }}>
      <Row>
        <Col size="md-3" >
          <div className="text-center">
            <a href="/howtogrow"><img src="../../assets/img/purple-install.png" /></a>
            <br></br>
            <div className="text-center">
              <p>
                GROW
      </p>
            </div>

            <p>
              Providing Guidance <br></br>
              to Urban Gardeners.
      </p>
          </div>
        </Col>


        <Col size="md-3" >
          <div className="text-center">
            <a href="/howtoshare"><img src="../../assets/img/pink-donate.png" /></a>
            <br></br>
            <div className="text-center">
              <p>
                SHARE
      </p>
            </div>
            <p>
             Many Ways to <br></br>
            Share the Harvest.
      </p>
          </div>
        </Col>
        <Col size="md-3" >
          <div className="text-center">
            <a href="/search"><img src="../../assets/img/kitchen-utensils.png" /></a>
            <br></br>
            <div className="text-center">
              <p>
                COOK
      </p>
            </div>
            <p>
              Recipes to Help<br></br>
              Prepare the Harvest?
      </p>
          </div>
        </Col>
        <Col size="md-3" >
          <div className="text-center">
            <a href="/join"><img src="../../assets/img/icon-hands.png" /></a>
            <br></br>
            <div className="text-center">
              <p>
                JOIN
      </p>
            </div>
            <p>
           Access to Harvest Moon's<br></br>Database and Network.
      </p>
          </div>
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
          <div className="icon">
            <a href="https://www.facebook.com/harvestmoonorlando" target="_blank"><img src="../../assets/img/facebook.png" /></a>
            {/* <a href="https://www.facebook.com/harvestmoonorlando" /> */}
            {/* <br></br> */}
            {/* <p>
              FACEBOOK
        </p> */}
          </div>
        </Col>

        <Col size="md-3">
          <div className="icon">
            <a href="https://www.instagram.com/harvestmoonorlando/?hl=en" target="_blank"><img src="../../assets/img/instagram.png" /></a>
            {/* <br></br> */}
            {/* <p>
            INSTAGRAM
      </p> */}
          </div>
        </Col>
        <Col size="md-3">
          <div className="icon">
            <a href="https://www.youtube.com/channel/UC8odxlO3afXk6to0xrUR0OQ" target="_blank"><img src="../../assets/img/youtube.png" /></a>
            {/* <br></br> */}
            {/* <p>
            YOUTUBE
      </p> */}
          </div>
        </Col>
        <Col size="md-3">
          <div className="icon">
            <a href="https://github.com/lamoliveira/harvestmoon" target="_blank"><img src="../../assets/img/Octocat.png" /></a>
            {/* <br></br> */}
            {/* <p>
            GITHUB
      </p> */}
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="md-12">
          <br></br>
          <br></br>
        </Col>
      </Row>

    </Container>
  </div>
);

export default About;
