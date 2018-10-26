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
          <br></br>
        </Col>
      </Row>

      <Row>      
        <Col size="md-3">
        <div className="text-center"><img src="../../assets/img/purple-install.png" /> </div>
        </Col>        
        <Col size="md-9">
          <p>
            Measure the area and calculate quantities.  Knowing up front how much of each material is needed will help you complete your project successfully.
            Cardboard or newspaper should be overlapped at least six inches to avoid light penetration, so include that in your estimates.
            You will need enough compost or manure to cover the area to a depth of at least five to six inches.  
          </p>
        </Col>

      </Row>

      <Row>
        {/* <Col size="md-4">
        <div><img src="../../assets/img/hibiscusSmall.jpg" /> </div>
        </Col> */}
        <Col size="md-12">
          <p>
            Prepare the site. Mow lawn very short, or flatten or chop down existing vegetation, leaving clippings on site. Remove only large woody plant material.
             The clippings and chopped vegetation left on the ground will decay and add nutrients to the soil. Add natural fertilizers and soil amendments at this point,
              if a soil analysis indicates the need. Soak with water before you cover, to start the natural process of decomposition.
          </p>
        </Col>
      </Row>

      <Row>

        <Col size="md-8">
          <p>
            Add a biodegradable weed barrier.  The next layer is a weed barrier that breaks down with time. Recycled cardboard or thick layers of newspaper (five to seven pages thick) are most commonly used. Old carpets of natural fiber also work well.
            It is essential that the barrier is permeable to water and air. Do not use plastic. Overlap the cardboard or newspaper pieces six to eight inches to completely cover the ground without any gaps.
            If there are established plants you want to save, leave a generous opening for air circulation around the root crown. Walk on the barrier to get it formed to the ground and soak this layer with water.
          </p>
        </Col>
         <Col size="md-4">
         <div><img src="../../assets/img/gardenYard.png" /> </div>
        </Col>       
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
              Add Drip Irrigation.  Battery timer at regular intervals. Low Mantenaince and Impact. Higher Efficiency.
          </p>
        </Col>
      </Row>

      <Row>
        {/* <Col size="md-4">

        </Col> */}
        <Col size="md-12">
          <p>
            Add mulch.  Layer at least three inches of mulch on top of the compost or manure. Good materials for this layer include wood chips, tree prunings, plant debris, leaves, or straw.
            They must be free of weed seeds. This layer of mulch helps control weeds, retain soil moisture, and can give the area an attractive, finished appearance.
          </p>
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
    </Container>
  </div>
);

export default Howtogrow;
