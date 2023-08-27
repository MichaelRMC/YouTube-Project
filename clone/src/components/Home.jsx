import React from "react";
import ErrorMessage from "./errors/ErrorMessage";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

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
    <div className="home">
      {loadingError ? <ErrorMessage /> : <SearchResults videoList={videoList} video={video}/>}
    </div>
  );
};

export default Home;
