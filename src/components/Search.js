import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <div className="Search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          data-testid = "search-input"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>
    </div>
  );
};

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
}

export default Search;