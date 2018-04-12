import React from 'react';
import { connect } from 'react-redux';

import { removeSong } from '../redux/songs';

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
              <button
                type="button"
                onClick={(e) => props.removeSongFromPlaylist(song)}
              >-</button>
            </div>
          );
        })
      }
      { props.songs.length === 5 &&
        <button>Submit Your Top 5!</button>
      }
    </div>
  )
}

const mapStateToProps = ({ songs }, ownProps) => {
  return {
    ...ownProps,
    songs,
  };
};

const mapDispatch = dispatch => {
  return {
    removeSongFromPlaylist: song => {
      return dispatch(removeSong(song));
    },
  }
}

export default connect(mapStateToProps, mapDispatch)(selectedSongs);
