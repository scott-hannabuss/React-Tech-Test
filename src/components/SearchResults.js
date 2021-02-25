import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";


const SearchResults = ({results}) => {
    if (!results.length) {
        return <p className="search-info">Please enter a relevant search term to return image results from Nasa's API</p>
      }
      else {
        return (
    <>
      {results.map((image) => (
        <div className="image-container">
          <img className="card-image" src={image} alt="spaceImage" />
          </div>
        ))}
      </>
  );
};
}

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
  };


export default SearchResults;