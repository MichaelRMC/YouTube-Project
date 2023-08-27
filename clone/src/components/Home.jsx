import React from "react";
import ErrorMessage from "./errors/ErrorMessage";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

const Home = ({ videoList }) => {
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
      {loadingError ? <ErrorMessage /> : <SearchResults videoList={videoList}/>}
    </div>
  );
};

export default Home;
