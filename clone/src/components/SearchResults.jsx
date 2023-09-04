import React from 'react';
import Video from './Video';
import Navbar from './Navbar';
import './SearchResults.css'

const SearchResults = ({ videoList, video }) => {
    return (
        <>
        <div className='searchResults'>
            {videoList.map((video) => {

                return <Video key={video.id.videoId} video={video}/>
            })}
        </div>
        </>
    );
}

export default SearchResults;
