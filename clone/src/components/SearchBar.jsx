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
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search-bar"
          id="search-bar"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchBar;