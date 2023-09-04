
import React from "react";
import { getVideo } from "../api/fetch";

const Video = ({ video }) => {
  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        title="video"
      />
    </div>
  );
};


export default Video;