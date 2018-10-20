import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import { debug } from "util";

class Search extends Component {
  state = {
    search: "banana",
    breeds: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
  //  this.setState({ search: "banana" });
     //API.getBaseBreedsList()
      // .then(res => console.log(res.data.message))
//       .then(res => this.setState({ breeds: res.data.message }))
      // .catch(err => console.log(err));

       //this.handleFormSubmit();
       
   }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmitDefault = event => {
     //event.preventDefault();
     //this.setState({ search: event.target.value });
     //this.handleFormSubmit();
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleformsubmit*********************************");
    API.getDogsOfBreed("banana")
      //this.state.search
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data.recipes);
        this.setState({ results: res.data.recipes, error: "" });
        
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search recipes By Products!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
