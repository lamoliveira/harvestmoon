import React from "react";
import "./ImageSmall.css";

const ImageSmall = props => (
  <div>
    <img className="img-small" alt ={props.name}  src={props.src}></img> 
  </div>
);

export default ImageSmall;