import React from 'react';
import Video from './Video';

const SearchResults = ({ videoList, video }) => {
    return (
        <div className='searchResults'>
            {videoList.map((video) => {
                return <Video video={video}/>
            })}
        </div>
    );
}

export default SearchResults;
