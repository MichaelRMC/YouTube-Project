import React, {useState} from 'react'
import Video from './Video.jsx'

function Show() {
const [name, setName] = useState("")
const [comment, setComment] = useState("")

  return (
	<>
	<div>
		<Video />
	</div>
	<div>
		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend>Comments</legend>
				<label htmlFor="name">Name</label>
				<input type="text" value="name" id="name" />
				<label htmlFor="comment">Comment</label>
				<textarea value="comment" id="comment" cols="20" rows="5"></textarea>
				<input type="submit">Submit</input>
			</fieldset>
		</form>
	</div>
	</>
  )
}

export default Show