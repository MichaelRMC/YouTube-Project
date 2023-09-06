import React, { useState, useEffect } from "react";
import Video from "./Video.jsx";
import { getSelectedVideo } from "../api/fetch.js";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar.jsx";


function Show({ video, setVideo }) {
  const [comment, setComment] = useState({ name: "", comment: "" });
  const [section, setSection] = useState([])
  const { videoId } = useParams()

  // useEffect(() => {
  //   getSelectedVideo(videoId).then((data) => {
  //     console.log(data)
  //     console.log(videoId)
  //     setVideo(data.items[0])
  //   }).catch((err) => {
  //     console.error(err)
  //   })
  // }, [videoId])

  function handleSubmit(event) {
    event.preventDefault();
    handleTextChange(event)
	setSection([comment, ...section])
  console.log(comment, section)
    resetForm();
  }

  function handleTextChange(event) {
    setComment({
      ...comment,
      [event.target.id]: event.target.value 
    });
  }

  function resetForm() {
    setComment({ name: "", comment: "" });
  }

  return (
    <>
    <Navbar />
      <div>
        {video ? (
          <div className="video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            title="video"
          />
        </div>
        ) : (
          <p>Loading video details...</p>
        )}
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
            />
            <label htmlFor="comment">Comment</label>
            <textarea
              value={comment.comment}
              onChange={handleTextChange}
              id="comment"
              cols="20"
              rows="5"
            ></textarea>
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </div>
      <section>{section.map((comment, index) => (
    <div key={index}>
      <h5>{comment.name}</h5>
      <p>{comment.comment}</p>
    </div>
  ))}</section>
    </>
  );
}

export default Show;
