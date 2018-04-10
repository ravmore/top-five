import React from 'react';
import { connect } from 'react-redux';

const selectedSongs = (props)=>{
  return (
    <div>
      <h1>Your Selections</h1>
      {
        props.songs.map((song, index) =>{
          return (
            <div key={song.id}>
              <h1>{index+1}</h1>
              <h5>{song.name}</h5>
              <em>{song.artist}</em>
            </div>
          )
        })
      }
      { props.songs.length === 5 &&
        <button>Submit Your Top 5!</button>
      }
    </div>
  )
}

const mapState = ({ songs })=>{
  return {
    songs
  };
};

export default connect(mapState, null)(selectedSongs);
