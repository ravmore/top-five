import React from 'react';

const SearchItem = props => (
  <div key={props.track.id}>
    <b>{props.track.name}</b>
    { 
      props.track.artists.map(artist =>
        <em key={artist.id}> | { artist.name }</em>
      )
    }
    { 
      props.canAdd 
        ? <button id={props.track.id} name={props.track.name} onClick={props.handleAddSong}>+</button>
        : <b>you have 5 songs!</b>
    }
  </div>
);

export default SearchItem;