import React, { useState } from "react";
import Video from "./Video.jsx";

function Show() {
  const [comment, setComment] = useState({ name: "", comment: "" });
  const [section, setSection] = useState([])

  const commentError = () => {
  alert(Name and/or Comment has not been filled out.)
} 

  function handleSubmit(event) {
    event.preventDefault();
    resetForm();
    return({!comment.name || !comment.comment ? commentError() : setSection([...section ,comment])})
  }

  function handleTextChange(event) {
	setComment({name: event.target.value, comment: event.target.value})
  }

  function resetForm() {
    setComment({ name: "", comment: "" });
  }

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
            <input
              type="text"
              value={comment.name}
              onChange={handleTextChange}
              id="name"
			  required
            />
            <label htmlFor="comment">Comment</label>
            <textarea
              value={comment.comment}
              onChange={handleTextChange}
              id="comment"
              cols="20"
              rows="5"
			  required
            ></textarea>
            <input type="submit">Submit</input>
          </fieldset>
        </form>
      </div>
      <section></section>
    </>
  );
}

export default Show;
