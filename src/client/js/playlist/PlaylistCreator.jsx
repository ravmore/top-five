import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newPlaylist } from '../redux/playlists';

class PlaylistCreator extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      buttonClicked: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(ev){
    this.setState({ name: ev.target.value });
  }
  handleClick(){
    if(this.state.buttonClicked){
      this.setState({ buttonClicked: false })
      this.props.createPlaylist(this.state.name, this.props.user.id)
    } else { this.setState({ buttonClicked: true }) }
  }
  render(){
    return (
    <div>
      { this.state.buttonClicked &&
        <input onChange = {this.handleChange} />
      }
      <button onClick = {this.handleClick} >{ this.state.buttonClicked ? 'Submit' : 'New Playlist'}</button>
    </div>
    )
  }
}

const mapState = ({ activePlaylist, user }) => {
  return {
    playlist: activePlaylist,
    user
  };
};

const mapDispatch = (dispatch) => {
  return {
    createPlaylist: (name, id) => {
      dispatch(newPlaylist(name, id));
    }
  }
}

export default connect(mapState, mapDispatch)(PlaylistCreator);
