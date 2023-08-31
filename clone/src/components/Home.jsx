import React from "react";
import ErrorMessage from "./errors/ErrorMessage";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import { getVideo } from "../api/fetch";
import Video from "./Video";
import { useSearchParams } from "react-router-dom";

const Home = ({ videoList, video, setVideoList }) => {

  const [loadingError, setLoadingError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    getVideo(searchParams.get("q"))
      .then((data) => {
        setVideoList(data.items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [searchParams]);

  console.log(videoList)

  useEffect(() => {
    if (videoList.length === 0) {
      setLoadingError(true);
    } else {
      setLoadingError(false);
    }
  }, [videoList]);

  return (
    <div className="home">
      <SearchBar searchParams={searchParams} setSearchParams={setSearchParams}/>
      {loadingError ? <ErrorMessage /> : <SearchResults videoList={videoList} video={video}/>}
    </div>
  );
};

export default Home;
