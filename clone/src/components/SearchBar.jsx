import React from 'react'
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from './Navbar';
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
<<<<<<< HEAD
	<>
	<div>
		<form onSubmit={handleSubmit}>
			<input type="search" name="search-bar" id="search-bar" placeholder="Search" />
			<button type="submit">Submit</button>
		</form>
	</div>
	</>
  )
=======
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
>>>>>>> ec82ec2351999f96f3ba1f5ef24998ab8378187e
}

export default SearchBar