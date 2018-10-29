import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Howtogrow = () => (
  <div>
    <Hero backgroundImage="../../assets/img/redLeaf3.jpg">
      <div id="hmLogo" className="animated pulse delay-3s"><img src="../../assets/img/hm_logo4.png" />
        <h2>Orlando</h2>
      </div>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1 className="text-center">Growing with Love!</h1>
          <br></br>
        </Col>
      </Row>

      <Row>
        <Col size="md-3">
          <div className="text-center"><img src="../../assets/img/purple-install.png" /> </div>
        </Col>
        <Col size="md-9">
          <div className="a">
            <p>
              Measure the area and calculate quantities.  Knowing up front how much of each material is needed will help you complete your project successfully.
              Cardboard or newspaper should be overlapped at least six inches to avoid light penetration, so include that in your estimates.
              You will need enough compost or manure to cover the area to a depth of at least five to six inches.
          </p>
          </div>
        </Col>

      </Row>

      <Row>
        {/* <Col size="md-4">
        <div><img src="../../assets/img/hibiscusSmall.jpg" /> </div>
        </Col> */}
        <Col size="md-12">
          <div className="a">
            <p>
              Prepare the site. Mow lawn very short, or flatten or chop down existing vegetation, leaving clippings on site. Remove only large woody plant material.
               The clippings and chopped vegetation left on the ground will decay and add nutrients to the soil. Add natural fertilizers and soil amendments at this point,
                if a soil analysis indicates the need. Soak with water before you cover, to start the natural process of decomposition.
          </p>
          </div>
        </Col>
      </Row>

      <Row>

        <Col size="md-12">
          <div className="a">
            <p>
              Add a bio-degradable weed barrier.  This next layer is a weed barrier that breaks down with time. Recycled cardboard or thick layers of newspaper (five to seven pages thick) are most commonly used.
              It is essential that the barrier is permeable to water and air. Do not use plastic. Overlap the cardboard or newspaper pieces six to eight inches to completely cover the ground without any gaps.
              Walk on the barrier to get it formed to the ground and soak this layer with water.
          </p>
          </div>
        </Col>
        {/* <Col size="md-4">
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
            <div><img src="../../assets/img/gardenYard.png" /> </div>
          </div>
        </Col> */}
      </Row>

      <Row>
        <Col size="md-12">
          <p>
            Add compost.  Spread well-decomposed, weed-free compost or manure directly over the weed barrier, up to five or six inches.
          </p>
        </Col>
      </Row>

      <Row>
        {/* <Col size="md-4">
        <div><img src="../../assets/img/hibiscusSmall.jpg" /> </div>
        </Col> */}
        <Col size="md-12">
          <p>
            Add Drip Irrigation. Low Mantenaince and Impact. Higher Efficiency.
          </p>
        </Col>
      </Row>

      <Row>
        {/* <Col size="md-4">

        </Col> */}
        <Col size="md-12">
          <div className="a">
            <p>
              Add mulch.  Layer at least three inches of mulch on top of the compost or manure. Good materials for this layer include wood chips, tree prunings, plant debris, leaves, or straw.
              They must be free of weed seeds. This layer of mulch helps control weeds, retain soil moisture, and can give the area an attractive, finished appearance.
          </p>
          </div>
        </Col>

      </Row>

      <Row>
        {/* <Col size="md-4">
        <div><img src="../../assets/img/hibiscusSmall.jpg" /> </div>
        </Col> */}
        <Col size="md-12">
          <p>
            Time to plant!
            </p>
        </Col>
      </Row>

      <Row>
        <Col size="md-12">
          <p></p>
          <br></br>
          <br></br>
        </Col>
      </Row>
    </Container>

    <Hero backgroundImage="../../assets/img/lettuce3.jpg" >
    <div id="btFly"><img src="../../assets/img/lawn2food2.gif" /></div>
    </Hero>

    <Container style={{ marginTop: 60 }}>
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

export default Howtogrow;
