import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    image: "",
    length:0,
    match: false,
    matchCount: 0,
    products: {},
    index: 0
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    API.getProducts()
      .then(res => {
        this.setState({ products: res.data,length:res.data.length, image: "", match: false, matchCount: 0, index: 0 });
        console.log(res.data);
        console.log("length:" + this.state.length);
        return res;
      }
      ).then( res => {
        console.log(this.state.products);
        this.setState({
          image: this.state.products[this.state.index].image,
          match: this.state.index + 1
        });
        console.log(this.state.products[this.state.index].image);
        console.log(this.state.index);
        if (!this.state.image) {this.loadNextProduct()}
      })
      .catch(err => console.log(err));
      

  }

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the people likes the product (1/5 chance). change for mongo collection later@@@
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the neighbors likes the product
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextProduct();
  };

  loadNextProduct = () => {
    //    this.setState({image:"http://static.food2fork.com/healthy_cookies4ee3.jpg"});}

    this.setState({
      index: this.state.index + 1
    });
    if (this.state.index>this.state.length) {
      this.setState({
        index:0
      });  
    }
    this.setState({
      image: this.state.products[this.state.index].image
    });
  }

    //   API.getRandomDog()
    //     .then(res =>
    //       this.setState({
    //         image: res.data.message
    //       })
    //     )
    //     .catch(err => console.log(err));
    // };

    render() {
      return (
        <div>
          <h1 className="text-center">Tell neighbors the products you like</h1>
          <h3 className="text-center">
            Thumbs up on any product you'd like to harvest or cook!
        </h3>
          <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
          <h1 className="text-center">
            Match with {this.state.matchCount} products so far!
        </h1>
          <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
            Yay! Your neighbor harvest this product!!!
        </Alert>
        </div>
      );
    }
  }

  export default Discover;
