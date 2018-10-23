import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import User from "./components/User";
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
import ProductsPage from "./pages/ProductsPage";

class App extends Component {
  state = {
    message: "",
    userId: "",
    username: "",
    password: "",
    nickname: "",
    image: "",
    address: "",
    description: "",
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
        },
        image: result.data.image,
        userId: result.data.userId,
        nickname: result.data.nickname,
        address: result.data.address,
        description: result.data.description
      });
    });
  }
  setAlert = (message) => {
    this.setState({
      message: message
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }
  handleUpdate = (event) => {
    event.preventDefault();
    const updateUser = {
      userid: this.state.auth.userId,
      username: this.state.auth.username,
      nickname: this.state.nickname,
      image: this.state.image,
      address: this.state.address,
      description: this.state.description
    };
    const { name } = event.target;
    console.log(name);
    console.log("1111111111111111111111111111111111111");
    console.log(updateUser);
    // API.saveUser(updateUser)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    axios.put(name, updateUser).then((data) => {
      console.log(data);
      var method= this.setAlert;
      if (data.status === 200) {
        method("Updated successfully");
        setInterval(function () { method(""); }, 5000);
      }
      else {
        method("Something went wrong");
        setInterval(function () { method(""); }, 5000);
        //@@@ detail messages later
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      nickname: this.state.nickname,
      image: this.state.image,
      address: this.state.address,
      description: this.state.description
    };
    this.setState({
      username: "",
      password: "",
      nickname: "",
      image: "",
      address: "",
      description: ""
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
          },
          image: data.data.image,
          userId: data.data.userId,
          address: data.data.address,
          description: data.data.description,
          nickname: data.data.nickname

        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.setState({
      auth: {
        userId: "",
        username: "",
        isAuthenticated: false
      },
      message: "",
      username: "",
      password: "",
      nickname: "",
      image: "",
      address: "",
      description: ""
    });
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
          <Navbar handleLogout={this.handleLogout} auth={this.state.auth} image={this.state.image} />
          <Wrapper>
            <Route exact path="/signup" render={() => {
              if (loggedIn) {
                return <Redirect to="/growers" />
              } else {
                return <SignIn
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  email={this.state.email}
                  password={this.state.password}
                  nickname={this.state.nickname}
                  image={this.state.image}
                  address={this.state.address}
                  description={this.state.description}

                />
              }
            }} />
            <Route exact path="/signin" render={() => {
              if (loggedIn) {
                return <User
                  handleLogout={this.handleLogout}
                  userId={this.state.userId}
                  handleChange={this.handleChange}
                  handleUpdate={this.handleUpdate}
                  message={this.state.message}
                  email={this.state.email}
                  password={this.state.password}
                  nickname={this.state.nickname}
                  image={this.state.image}
                  address={this.state.address}
                  description={this.state.description}
                />
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
                  nickname={this.state.nickname}
                  image={this.state.image}
                  address={this.state.address}
                  description={this.state.description}
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
                return <ProductsPage auth={this.state.auth} />
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
                return <User
                  handleLogout={this.handleLogout}
                  auth={this.state.auth}
                  handleChange={this.handleChange}
                  handleUpdate={this.handleUpdate}
                  message={this.state.message}
                  email={this.state.email}
                  password={this.state.password}
                  nickname={this.state.nickname}
                  image={this.state.image}
                  address={this.state.address}
                  description={this.state.description}
                />
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