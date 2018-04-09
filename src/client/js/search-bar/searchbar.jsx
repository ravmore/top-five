import React, { Component } from 'react';
import { connect } from 'react-redux';

function SearchBar(props){
  console.log('token', props.token);
  return (
    <div>
      
      <input onChange={ (ev)=> console.log(ev.target.value) } />
    </div>
  )
}

const mapState = ({ token })=>{
  return {
    token
  }
};

export default connect(mapState)(SearchBar);

// url: 'https://api.spotify.com/v1/search?q={searchQuery}&type=track%2Cartist'
//
// header
// "Accept: application/json"
// "Content-Type: application/json"
// "Authorization: Bearer ${token}"
