import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      results: []
    };
    this.handleAddSong = this.handleAddSong.bind(this);
  }
  handleAddSong(){
    //spotifyWriteToPlaylist
  }
  render(){
    const token = this.props.token.access_token;
    return (
      <div>
        {token &&
          <input onChange={ (ev)=> {
              axios.get(`/api/spotify/search?token=${token}&searchQuery=${ev.target.value}`)
              .then(tracks => {
                this.setState({ results: tracks.data });
              })
              .catch(er => console.log(er));
            } } />
        }
        { this.state.results.length > 0 &&
          this.state.results.map(track => {
            return (
              <div key={track.id}>
                <b>{track.name}</b>
                { track.artists.map(artist => {
                    return (
                      <em key={artist.id}> | { artist.name }</em>
                    )
                  })
                }
                <button onClick={this.handleAddSong}>+</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapState = ({ token })=>{
  return {
    token
  }
};

export default connect(mapState, null)(SearchBar);

// url: 'https://api.spotify.com/v1/search?q={searchQuery}&type=track%2Cartist'
//
// header
// "Accept: application/json"
// "Content-Type: application/json"
// "Authorization: Bearer ${token}"
