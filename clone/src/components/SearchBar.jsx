import React from 'react'
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getVideo } from "../api/fetch.js";



 function SearchBar() {
	const [form, setForm] = useState("")
	const [searchParams, setSearchParams] = useSearchParams()
	
	function handleSubmit(event) {
		event.preventDefault();
		const keyword = event.target.value
		getVideo({keyword})
		setSearchParams(searchParams.get(keyword))
	}
	
	function handleTextChange(event) {
		
	}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={keyword}
          onChange={handleTextChange}
          id="search-bar"
          placeholder="Search"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchBar