import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="breed">Product Name:</label>
      <input
        
        onChange={props.handleInputChange}
        type="text"
        className="form-control"
        placeholder="Type in a product name to begin. Ex:Banana"
        id="breed"
      
      />
     
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
