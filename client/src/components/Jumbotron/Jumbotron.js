import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 20, clear: "both", paddingTop: 20, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
