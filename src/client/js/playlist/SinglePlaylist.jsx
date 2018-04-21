import React from 'react';

import Song from '../selectedSongs/Song';

const SinglePlaylist = (props) => {
  const playlist = props.playlistInfo;
  return (
    <div>
      <h3>{ playlist.name }</h3>
      songs
      { playlist.songs.map((song, index) => {
          return (
            <Song key={song.id || index} songDetails={song} number={index + 1} />
          )
        })
      }
    </div>
  )
}

export default SinglePlaylist;
