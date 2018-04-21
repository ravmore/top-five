import React from 'react';
import { connect } from 'react-redux';

import SinglePlaylist from '../playlist/SinglePlaylist';

const Playlists = (props) => {
  console.log('PROPS', props);
  return (
    <div>
      { props.playlists && props.playlists.map(playlist => {
          return (
            <SinglePlaylist key={playlist.id} playlistInfo={playlist} />
          )
        })
      }
    </div>
  )
}

const mapState = ({ user }) => {
  return {
    playlists: user.playlists
  }
}

export default connect(mapState, null)(Playlists);
