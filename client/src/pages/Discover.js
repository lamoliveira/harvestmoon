import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class Discover extends Component {
  state = {
    image: "",
    length: 0,
    productName: "",
    matchCount: 0,
    products: {},
    match: 0,
    index: 0
  };

  // When the component mounts, load the  product to be displayed

  componentDidMount() {
    API.getProducts()
      .then(res => {
        this.setState({ products: res.data, productName: res.data[0].product, length: res.data.length, image: res.data[0].image, match: 0, matchCount: 0, index: 0 });
        console.log(res.data);
        console.log(this.state.productName);
        console.log("length:" + this.state.length);
        console.log("img:" + this.state.products[this.state.index].image)
        console.log(this);
        if (!this.state.products[this.state.index].image) {
          //let method =this ;
          //method.loadNextProduct();
          this.loadNextProduct();
        }
        console.log("componentmounted ok");
      })
      .catch(err => console.log(err));
  }

  handleBtnClick = event => {
    event.preventDefault();
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    let newMatch = 0;
    console.log("newmatchbefore: " + newMatch);
    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the people likes the product (1/5 chance). change for mongo collection later@@@
      newMatch = Math.floor(Math.random() * 2);
      console.log("newmatchafter: " + newMatch);
      console.log("match: " + this.state.match);
      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the neighbors likes the product
      if (newMatch === 1) {
        this.setState({ matchCount: this.state.matchCount + 1, match: 1 });
      }
      console.log("matchcount:" + this.state.matchCount);
    }
    // Replace our component's state with newProducts, load the next product image
    this.loadNextProduct();
  };

  loadNextProduct = () => {
    console.log("loadnext thisindex" + this.state.index);
    let newIndex = parseInt(this.state.index) + 1;
    console.log("newindex:" + newIndex);
    console.log("length" + this.state.length);
    if (this.state.index === (parseInt(this.state.length) - 1)) { newIndex = 0; console.log("index=0"); }
    console.log(this.state.products[newIndex].image);
    while (!this.state.products[newIndex].image) {
      newIndex = newIndex + 1;
      if (newIndex >= this.state.length - 1) {
        newIndex = 0;
        console.log("index=0");
      };
    }
    this.setState({
      image: this.state.products[newIndex].image,
      productName: this.state.products[newIndex].product,
      index: newIndex
    });
    console.log("product:" + this.state.products[newIndex].product);
  }

  render() {
    return (
      <div>
        <Hero backgroundImage="../../assets/img/spinach4.jpg">
          <div id="hmLogo" className="animated tada delay-3s"><img src="../../assets/img/hm_logo4.png" />
            <h2>Orlando</h2>
          </div>
        </Hero>

        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h5 className="text-center">Tell Growers the products you like or cook and see if it matches</h5>
              <h5 className="text-center">
                Thumbs up on any product you'd like to eat or cook!
              </h5>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
              <h5 className="text-center">{this.state.productName}</h5>
              <h5 className="text-center">
                Match with {this.state.matchCount} neighbors so far!
              </h5>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
                Yay! You match a neighbor! Soon you will be able to chat!
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <br></br>
              <br></br>
              <br></br>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Discover;
