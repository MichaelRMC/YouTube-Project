
import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from './Navbar';
import { getVideo } from "../api/fetch.js";


function SearchBar({ searchParams, setSearchParams,searchInput, setSearchInput }) {
  


  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams({ q: searchInput });
  }

  return (
    <div>
      <input
              type="text"
              value={comment.name}
              onChange={handleTextChange}
              id="name"
            />
        <button type="submit">Submit</button>
    </div>
  );
}

export default SearchBar;
