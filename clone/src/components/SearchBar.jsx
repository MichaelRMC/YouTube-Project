import React from 'react'
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from './Navbar';



 function SearchBar() {
	const [searchParams, setSearchParams] = useSearchParams()

	function handleSubmit(event) {
		event.preventDefault();
		setSearchParams(searchParams.get(event.target))
	}

  return (
	<>
	<div>
		<form onSubmit={handleSubmit}>
			<input type="search" name="search-bar" id="search-bar" placeholder="Search" />
			<button type="submit">Submit</button>
		</form>
	</div>
	</>
  )
}

export default SearchBar