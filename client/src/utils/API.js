import axios from "axios";
import { debug } from "util";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getDogsOfBreed: function (breed) {
    console.log("getDogsOfBreed....breed" + breed + "000000000000000000000000000000");
    return axios.get("https://cors-anywhere.herokuapp.com/food2fork.com/api/search?key=a888b6ad05c0a4dc1ebf5056d5dae5de&q=" + breed);
  },
  // getDogsOfBreed: function (breed) {
  //   return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  // },
  getBaseBreedsList: function () {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
  ,
  // Gets all products
  getProducts: function () {
    return axios.get("/api/products");
  },
  // Gets all products
  getProducts2: function (userid) {
    return axios.get("/api/products/userid/" + userid);
  },
  // Gets the product with the given id
  getProduct: function (id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function (id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProduct: function (productData) {
    return axios.post("/api/products", productData);
  },

  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  // Gets all tournaments
  getTournaments: function () {
    console.log("getTournaments API.js");
    //    return axios.get("/api/tournaments");
    return axios.get("/api/tournaments");
  },
  // Gets the tournament with the given id
  getTournament: function (id) {
    console.log("getTournament ONE API.js");
    return axios.get("/api/tournaments/" + id);
  },
  // Deletes the tournament with the given id
  deleteTournament: function (id) {
    return axios.delete("/api/tournaments/" + id);
  },
  // Saves a tournament to the database
  saveTournament: function (tournamentData) {
    return axios.post("/api/tournaments", tournamentData);
  }
};
