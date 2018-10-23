import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Howtogrow = () => (
  <div>
    <Hero backgroundImage="../../assets/img/spinach3.jpg">
      <div id="hmLogo"><img src="../../assets/img/hm_logo4.png"/></div>
      <h2>How To Share</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
      <Col size="md-2"></Col>
        <Col size="md-8">
          <h1>Sharing with Love!</h1>
        </Col>
      </Row>
      <Row>
      <Col size="md-2"></Col>
        <Col size="md-8">
          <p>
          When gardens overflow with the season’s harvest, most of us have more than we can use or save for later. Thankfully, there are a number of ways that we can share the harvest with others. 
          </p>
          <p>
          Friends, Family, and Neighbors
The easiest way to share the harvest is to give extra vegetables and flowers to our friends, family and neighbors. Some folks simply take a basket of fruit or vegetables to work and let people help themselves. 
It’s a good idea to take a few bags along as well, to make it easier for your friends and co-workers to “shop”. You’ll not only reward your friends with good, fresh produce; you might even encourage some folks to start gardening!
          </p>
          <p>
          Churches and Food Pantries
Many churches and civic organizations have food pantries for the needy. You can probably find one in your area by doing a Google search for “share the harvest”. If you can’t find one,
 maybe you can start one, or encourage someone to start one in your area. One of the great joys of gardening is to share your harvest with others.
          </p>
          <p>
          
Waste Not—Give it Away or Preserve It
 Gardeners tend to be more in touch with the environment, and wasting anything that we grow just goes against our nature. 
Thankfully, with just a little bit of effort, you don’t need to add to your local trash stream.

Don’t waste surplus vegetables; give them away!
The easiest way to reduce wasting what you grow is to give away that which you don’t need or can’t use. An abundance of tomatoes can be shared with co-workers, neighbors, or even strangers. 

You can put on a picnic table in front of your house and invites folks to pay whatever they choose. You can use the cash received
 to buy supplies for the next year’s garden.

You can invite neighbors to visit your garden and pick anything that’s ready when you are on vacation. You will not come home to over-ripened vegetables and the pests that they encourage.
For information about organizations that will accept garden produce donations in your area, visit the web site www.ampleharvest.org
          </p>
          <p>
          Preserve It
Even small scale casual gardeners can easily preserve many garden vegetables for later use. While canning and drying vegetables can be time-consuming and require some special equipment, 
freezing extra produce is easy. Beans can be blanched (boiled for two minutes, then immediately cooled in an ice water bath) and frozen in plastic bags. Tomato sauce can be frozen in plastic containers, 
and then transferred to plastic bags for easy, nearly air-tight storage in the freezer.
          </p>
          <p>
          Compost It
The ultimate recycling of extra garden produce, especially fruits and vegetables that might not be good enough to give away or preserve, is to compost them. You’ll reduce the amount of waste going into the trash stream,
 and you’ll be preparing for next year’s garden. Remember, however, that fruits, vegetables, and other “green” materials need to be balanced with “brown” compostable material to create good compost and
 to avoid having your own personal garbage pit.
            </p>
  
        </Col>
      </Row>
    </Container>
  </div>
);

export default Howtogrow;
