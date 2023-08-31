import React from "react";
import ErrorMessage from "./errors/ErrorMessage";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
<<<<<<< HEAD
import Navbar from "./Navbar";
=======
import SearchBar from "./SearchBar";
>>>>>>> 174b232f51948cb67d65fc7b0c442b54111e48bd

const Home = ({ videoList, video }) => {
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    if (videoList.length === 0) {
      setLoadingError(true);
    } else {
      setLoadingError(false);
    }
  }, []);

  return (
    <>
    <Navbar />
    <div className="home">
      <SearchBar />
      {loadingError ? <ErrorMessage /> : <SearchResults videoList={videoList} video={video}/>}
    </div>
    </>
  );
};

export default Home;
