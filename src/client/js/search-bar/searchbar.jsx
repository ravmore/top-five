import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { addSong, removeSong } from '../redux/songs';
import SearchItem from './SearchItem';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      results: []
    };

    this.handleAddSong = this.handleAddSong.bind(this);
    this.handleRemoveSong = this.handleRemoveSong.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
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

  handleRemoveSong(ev){
    var song = {
      id: ev.target.id,
      name: ev.target.name,
      artists: ev.target.artists
    };
    this.props.removeSongFromPlaylist(song);
    //temporary browser storage till 5 songs are submitted
  }

  handleSearchInputChange(ev) {
    if (ev.target.value) {
      const token = this.props.token.access_token;
      axios.get(`/spotify/api/search?token=${token}&searchQuery=${ev.target.value}`)
        .then(tracks => {
          this.setState({ results: tracks.data });
        })
        .catch(er => console.log(er));
    } else {
      this.setState({ results: [] })
    }
  }

  render(){
    const token = this.props.token.access_token;
    const { songs } = this.props;
    return (
      <div>
        { token && <input onChange={this.handleSearchInputChange} /> }
        { 
          this.state.results.map(track => 
            <SearchItem
              key={track.id}
              track={track}
              canAdd={songs.length < 5}
              added={songs.some(song => track.id === song.id)}
              handleAddSong={this.handleAddSong} 
              handleRemoveSong={this.handleRemoveSong} 
            />
          )
        }
      </div>
    );
  }
};

const mapState = ({ token, songs })=>{
  return {
    token,
    songs,
  }
};

const mapDispatch = dispatch => {
  return {
    addSongToPlaylist: song => {
      return dispatch(addSong(song));
    },
    removeSongFromPlaylist: song => {
      return dispatch(removeSong(song));
    },
  }
}

export default connect(mapState, mapDispatch)(SearchBar);
