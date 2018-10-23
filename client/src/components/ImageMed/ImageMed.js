import React from "react";
import "./ImageMed.css";

const ImageMed = props => (
  <div>
    <img className="img-med" alt ={props.name}  src={props.src}></img> 
  </div>
);

export default ImageMed;