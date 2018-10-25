import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 10, clear: "both", paddingTop: 10, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
