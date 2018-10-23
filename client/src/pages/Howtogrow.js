import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Howtogrow = () => (
  <div>
    <Hero backgroundImage="../../assets/img/redLeaf3.jpg">
      <div id="hmLogo"><img src="../../assets/img/hm_logo4.png"/></div>
      <h2>How To Grow</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
      <Col size="md-2"></Col>
        <Col size="md-8">
          <h1>Growing with Love!</h1>
        </Col>
      </Row>
      <Row>
      <Col size="md-2"></Col>
        <Col size="md-8">
          <p>
          Step One
Measure the area and calculate quantities.
Knowing up front how much of each material is needed will help you complete your project successfully. Cardboard or newspaper should be overlapped at least six inches to avoid light penetration, 
so include that in your estimates. You will need enough compost or manure to cover the area to a depth of at least five to six inches. Use our handy cubic calculator to determine how much material you will need. 

          </p>
          <p>
          Step 2
Prepare the site.
Mow lawn very short, or flatten or chop down existing vegetation, leaving clippings on site. Remove only large woody plant material. The clippings and chopped vegetation left on the ground will decay
 and add nutrients to the soil. Add natural fertilizers and soil amendments at this point, if a soil analysis indicates the need. Soak with water before you cover, to start the natural process of decomposition. 
If you are planting large plants such as five-gallon and larger plants, plant them now. Smaller plants will be planted later. 
          </p>
          <p>
          -Step 3
Add a biodegradable weed barrier.
The next layer is a weed barrier that breaks down with time. Recycled cardboard or thick layers of newspaper (five to seven pages thick) are most commonly used. Old carpets of natural fiber also work well.
 It is essential that the barrier is permeable to water and air. Do not use plastic. Overlap the cardboard or newspaper pieces six to eight inches to completely cover the ground without any gaps. 
If there are established plants you want to save, leave a generous opening for air circulation around the root crown. Walk on the barrier to get it formed to the ground and soak this layer with water.
          </p>
          <p>
          Step 4
Add compost.
Spread well-decomposed, weed-free compost or manure directly over the weed barrier, up to five or six inches.
          </p>
          <p>
          Step 5
Add mulch.
Layer at least three inches of mulch on top of the compost or manure. Good materials for this layer include wood chips, tree prunings, plant debris, leaves, or straw. They must be free of weed seeds. 
This layer of mulch helps control weeds, retain soil moisture, and can give the area an attractive, finished appearance.
          </p>
          <p>
          Step 6
Time to plant!
Punch a hole in the cardboard with a sharp knife or tool and place plants in the soil under the sheet mulch. Smaller plants can be planted right into the compost and mulch layers.

            </p>
  
        </Col>
      </Row>
    </Container>
  </div>
);

export default Howtogrow;
