import React from 'react';
import Video from './Video';

const SearchResults = ({ videoList }) => {
    return (
        <div className='searchResults'>
            {videoList.map((video) => {
                return <Video />
            })}
        </div>
    );
}

export default SearchResults;
