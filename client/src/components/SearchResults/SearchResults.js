import React from "react";
import "./SearchResults.css";
import { Link } from "react-router-dom";
import ImageMed from "../ImageMed";
import { Col, Row, Container } from "../../components/Grid";


const SearchResults = props => (
  <ul className="list-group search-results">
    {props.results.map(result => (
      <li key={result.image_url} className="list-group-item">
           <Container fluid>
        <Row>
          <Col size="lg-4 md-4 sm-6 6">
        <div className="recipe">
        <ImageMed alt="Recipe" src={result.image_url} className="img-fluid" />
        </div>
        </Col>
        <Col size="lg-4 md-8 sm-6 6">
        <div className="recipedetail">
        <p><strong>Recipe:</strong><a href= {result.f2f_url}> {result.title} </a></p>
        <p><strong>Recipe Original:</strong><a href= {result.source_url}>{result.title} </a></p>
        <p> <strong>Publisher:</strong> <a href= {result.publisher_url}>{result.publisher} </a></p>        
        <p> <strong>Social Rank:</strong> {result.social_rank} </p>
        </div>
        </Col>
        </Row>
        </Container>
      </li>
    ))}
  </ul>
);

export default SearchResults;
