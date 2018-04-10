import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import { addSong } from '../redux/songs';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      results: []
    };
    this.handleAddSong = this.handleAddSong.bind(this);
  }
  handleAddSong(ev){
    var song = {
      id: ev.target.id,
      name: ev.target.name,
      artists: ev.target.artists
    };
    this.props.addSongToPlaylist(song);
    //temporary browser storage till 5 songs are submitted
  }
  render(){
    const token = this.props.token.access_token;
    const { songs } = this.props;
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
                { songs.length < 5 ?
                    <button id={track.id} name={track.name} onClick={this.handleAddSong}>+</button>
                    :
                    <b>you have 5 songs!</b>
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapState = ({ token, songs })=>{
  return {
    token,
    songs
  }
};

const mapDispatch = (dispatch)=>{
  return {
    addSongToPlaylist: (song)=>{
      return dispatch(addSong(song));
    }
  }
}

export default connect(mapState, mapDispatch)(SearchBar);
