import React from "react";
import "./SearchResults.css";

const SearchResults = props => (
  <ul className="list-group search-results">
    {props.results.map(result => (
      <li key={result.image_url} className="list-group-item">
        <img alt="Recipe" src={result.image_url} className="img-fluid" />
      </li>
    ))}
  </ul>
);

export default SearchResults;
