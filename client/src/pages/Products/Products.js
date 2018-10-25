import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import ImageSmall from "../../components/ImageSmall";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Products extends Component {
  state = {
    products: [],
    userid: "",
    product: "",
    image: "",
    plantedon: "",
    harveston: "",
    description: ""
  };

  componentDidMount() {
    this.setState({ userid: this.props.userid })
    //console.log(this.props.userid);
    this.loadProducts();
  }

  loadProducts = () => {
   // console.log("loadproducts: userid: " + this.props.userid);
    API.getProductsbyuser(this.props.userid)
      .then(res =>
        this.setState({ products: res.data, product: "", image: "", plantedon: "",harveston: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  deleteProduct = id => {
    API.deleteProduct(id)
      .then(res => this.loadProducts())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.product && this.state.plantedon) {
      API.saveProduct({
        userid: this.state.userid,
        product: this.state.product,
        image: this.state.image,
        plantedon: this.state.plantedon,
        harveston: this.state.harveston,
        description: this.state.description
      })
        .then(res => this.loadProducts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h5>What are you producing?</h5>
            </Jumbotron>
            <form>
              <Input
                value={this.state.product}
                onChange={this.handleInputChange}
                name="product"
                placeholder="Product (required)"
              />
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="image address "
              />
              <Input
                value={this.state.plantedon}
                onChange={this.handleInputChange}
                name="plantedon"
                placeholder="planted on (month-Optional)"
              />
              
              <Input
                value={this.state.harveston}
                onChange={this.handleInputChange}
                name="harveston"
                placeholder="harvest on (month-Optional)"
              />
              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                rows="5"
                placeholder="Detailed description (Optional)"
              />
              <FormBtn
                disabled={!(this.state.product)}
                onClick={this.handleFormSubmit}
              >
                Submit Product
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h5>Products On My Lawn</h5>
            </Jumbotron>
            {this.state.products.length ? (
              <List>
                {this.state.products.map(product => (
                  
                  <ListItem key={product._id}>
                    <ImageSmall name={product.product} src={product.image}> </ImageSmall>
                    <Link to={"/products/" + product._id}>
                      <strong>
                        {product.product} planted on {product.plantedon}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteProduct(product._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h5>No Results to Display</h5>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Products;
