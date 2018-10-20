import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

//adding new routes
import Discover from "./pages/Discover";
import About from "./pages/About";
import Howtogrow from "./pages/Howtogrow";
import Howtoshare from "./pages/Howtoshare";
import Growers from "./pages/Growers";
import Neighbors from "./pages/Neighbors";
import Logout from "./components/Logout";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Books from "./pages/Books";
import Products from "./pages/Products";

class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId: "",
      username: "",
      isAuthenticated: false
    }
  };

  componentWillMount() {
    axios.get("/auth/isAuthenticated").then((result) => {
      const { userId, isAuthenticated, username } = result.data
      this.setState({
        auth: {
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    });
    const { name } = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated) {
        const { userId, isAuthenticated, username } = data.data;
        this.setState({
          auth: {
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result) => {
      this.setState({
        auth: {
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
          <Navbar handleLogout={this.handleLogout} auth={this.state.auth} />
          <Wrapper>
            <Route exact path="/signin" render={() => {
              if (loggedIn) {
                return <Redirect to="/growers" />
              } else {
                return <SignIn
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  email={this.state.email}
                  password={this.state.password}
                />
              }
            }} />
            <Route exact path="/signup" render={() => {
              if (loggedIn) {
                return <Redirect to="/Growers" />
              } else {
                return <SignUp
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  email={this.state.email}
                  password={this.state.password}
                />
              }
            }} />
                        <Route exact path="/join" render={() => {
              if (loggedIn) {
                return <Redirect to="/Growers" />
              } else {
                return <SignUp
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  email={this.state.email}
                  password={this.state.password}
                />
              }
            }} />
            <Route exact path="/home" render={() => {
              if (!loggedIn) {
                return <Redirect to="/about" />
              } else {
                return <Home handleLogout={this.handleLogout} auth={this.state.auth} />
              }
            }
            } />
                 <Route exact path="/" render={() => {
              if (!loggedIn) {
                return <Redirect to="/about" />
              } else {
                return <Home handleLogout={this.handleLogout} auth={this.state.auth} />
              }
            }
            } />
            <Route exact path="/about" component={About} />

            <Route exact path="/howtogrow" component={Howtogrow} />


            <Route exact path="/howtoshare" component={Howtoshare} />
            <Route exact path="/growersx" component={Growers} />

            <Route exact path="/growers" render={() => {
              if (!loggedIn) {
                return <Redirect to="/" />
              } else {
                return <Growers handleLogout={this.handleLogout} auth={this.state.auth} />
              }
            }
            } />

            <Route exact path="/neighbors" component={Neighbors} />

            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} />
 
             <Route exact path="/products" render={() => {
              if (!loggedIn) {
                return <Redirect to="/" />
              } else {
                return <Products auth={this.state.auth} />
              }
            }
            } />
            <Route exact path="/logout" render={() => {
              if (!loggedIn) {
                return <Redirect to="/" />
              } else {
                return <Logout handleLogout={this.handleLogout} auth={this.state.auth} />
              }
            }
            } />

            <Route exact path="/login" render={() => {
              if (loggedIn) {
                return <Logout handleLogout={this.handleLogout} auth={this.state.auth} />

              } else {
                return <SignIn
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  email={this.state.email}
                  password={this.state.password}
                />
              }
            }} />

          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;