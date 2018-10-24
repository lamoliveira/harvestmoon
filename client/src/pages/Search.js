import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";


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
  this.setState({ results: [{
    f2f_url: "http://food2fork.com/view/2803",
    image_url: "http://static.food2fork.com/124030cedd.jpg",
    publisher: "All Recipes",
    publisher_url: "http://allrecipes.com",
    recipe_id: "2803",
    social_rank: 100,
    source_url: "http://allrecipes.com/Recipe/Banana-Crumb-Muffins/Detail.aspx",
    title: "Banana Crumb Muffins"},
    {
    f2f_url: "http://food2fork.com/view/47692",
    image_url: "http://static.food2fork.com/healthy_cookies4ee3.jpg",
    publisher: "101 Cookbooks",
    publisher_url: "http://www.101cookbooks.com",
    recipe_id: "47692",
    social_rank: 100,
    source_url: "http://www.101cookbooks.com/archives/nikkis-healthy-cookies-recipe.html",
    title: "Nikki"}
    ]});
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
     event.preventDefault();
     this.setState({ search: event.target.value });
     this.handleFormSubmit();
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
    API.getRecipes(this.state.search)
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

