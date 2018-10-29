import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Howtogrow = () => (
  <div>
    <Hero backgroundImage="../../assets/img/spinach3.jpg">
      <div id="hmLogo" className="animated tada delay-3s"><img src="../../assets/img/hm_logo4.png" />
        <h2>Orlando</h2>
      </div>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1 className="text-center">Sharing with Love!</h1>
          <br></br>
        </Col>
      </Row>

      <Row>
        <Col size="md-3">
          <div className="text-center" ><img src="../../assets/img/pink-donate.png" /> </div>
        </Col>
        <Col size="md-9">
          <p>
            When gardens overflow with the season’s harvest, most of us have more than we can use or save for later. Thankfully, there are a number of ways that we can share the harvest with others.
            Friends, Family, and Neighbors. The easiest way to share the harvest is to give extra vegetables and flowers to our friends, family and neighbors.
            
          </p>
        </Col>
      </Row>

      <Row>
        <Col size="md-12">
          <p>
            Don’t waste surplus vegetables; give them away!
            The easiest way to reduce wasting what you grow is to give away that which you don’t need or can’t use. An abundance of tomatoes can be shared with co-workers, neighbors, or even strangers.
      </p>
          {/* <p>
            You can invite neighbors to visit your garden and pick anything that’s ready when you are on vacation. You will not come home to over-ripened vegetables and the pests that they encourage.

      </p> */}
          <p>
            Donate the extra vegetables to a food pantry for the needy.
            One of the great joys of gardening is to share your harvest with others.
      </p>

        </Col>
      </Row>

      <Row>
        <Col size="md-12">
          <p>
            Preserve It -  Even small scale casual gardeners can easily preserve many garden vegetables for later use. While canning and drying vegetables can be time-consuming and require some special equipment,
            freezing extra produce is easy. Beans can be blanched (boiled for two minutes, then immediately cooled in an ice water bath) and frozen in plastic bags. Tomato sauce can be frozen in plastic containers,
            and then transferred to plastic bags for easy, nearly air-tight storage in the freezer.
          </p>
        </Col>
        {/* <Col size="md-4" >
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
        </Col> */}
      </Row>

      {/* <Row>
        <Col size="md-12">
          <p>
            Compost It -  The ultimate recycling of extra garden produce, especially fruits and vegetables that might not be good enough to give away or preserve, is to compost them. You’ll reduce the amount of waste going into the trash stream,
            and you’ll be preparing for next year’s garden. Remember, however, that fruits, vegetables, and other “green” materials need to be balanced with “brown” compostable material to create good compost and
            to avoid having your own personal garbage pit.
            </p>
        </Col>
      </Row> */}

      <Row>
        <Col size="md-12">
          <p> 
            You’ll not only reward your friends with good, fresh produce; you might even encourage some folks to start gardening!<br></br>
            Propagate It and Pass on the Seedlings -  Propagation is quite simple, watch this video to see.
            </p>

        </Col>
      </Row>

      <Row>
        <Col size="md-12">
          <br></br>
          <br></br>
        </Col>
      </Row>

    </Container>

    <Hero backgroundImage="../../assets/img/lettuce3.jpg" >
      <div id="btFly">
      <a href="https://www.facebook.com/harvestmoonorlando/videos/182993672584355/" target="_blank"><img src="../../assets/img/propGate.gif" /></a>     
      
      </div>
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
