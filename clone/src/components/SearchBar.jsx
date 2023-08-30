import React from 'react'
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";



 function SearchBar() {
	const [searchParams, setSearchParams] = useSearchParams()
	
	function handleSubmit(event) {
		event.preventDefault();
		const q = event.target.value
		setSearchParams(searchParams.get(q))
	}


  return (
	<div>
		<form onSubmit={handleSubmit}>
			<input type="search" value={q} id="search-bar" placeholder="Search" />
			<button type="submit">Submit</button>
		</form>
	</div>
  )
}

export default SearchBar