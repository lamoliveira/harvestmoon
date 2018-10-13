import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Howtogrow from "./pages/Howtogrow";
import Howtoshare from "./pages/Howtoshare";
import Growers from "./pages/Growers";
import Neighbors from "./pages/Neighbors";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/howtogrow" component={Howtogrow} />
        <Route exact path="/howtoshare" component={Howtoshare} />
        <Route exact path="/growers" component={Growers} />
        <Route exact path="/neighbors" component={Neighbors} />
        
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/login" component={Login} />

      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
