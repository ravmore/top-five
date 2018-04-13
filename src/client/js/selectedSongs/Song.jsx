import React from 'react';

const Song = ({ songDetails, number, removeSong }) => (
  <div className="col-2">
    <div className="row justify-content-center">
      <h1 className="text-center">{number}</h1>
    </div>
  {
    songDetails.id &&
    <div>
    <div className="row justify-content-center">
      <p className="text-center">{songDetails.name}</p>
    </div>
    <div className="row justify-content-center">
      <em className="text-center">{songDetails.artists.map(artist => artist.name).join(' | ')}</em>
    </div>
    <div className="row justify-content-center">
      <button
        type="button"
        onClick={(e) => removeSong(songDetails)}
      >-</button>
    </div>
    </div>
  }
  </div>
);

export default Song;