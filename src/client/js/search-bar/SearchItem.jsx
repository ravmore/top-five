import React from 'react';

const SearchItem = props => (
  <div key={props.track.id}>
    <b>{props.track.name}</b>
    { 
      props.track.artists.map(artist =>
        <em key={artist.id}> | { artist.name }</em>
      )
    }
    {getItemAction(props)}
  </div>
);

function getItemAction(props) {
  if (props.added) {
    return (
      <button
        id={props.track.id}
        onClick={props.handleRemoveSong || (e => null)}
      >-</button>
    );
  } else if (props.canAdd) {
    return (
      <button
        id={props.track.id}
        name={props.track.name}
        onClick={(e) => props.handleAddSong(props.track)}
      >+</button>
    );
  }
  return <b>you have 5 songs!</b>;
}

export default SearchItem;