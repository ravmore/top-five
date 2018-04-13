import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SpotifyAuth from '../spotify-auth/SpotifyAuth';
import SearchBar from '../search-bar/searchbar';
import SelectedSongs from '../selectedSongs/selectedSongs';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doAuth: false,
    };

    this.handleAuthClick = this.handleAuthClick.bind(this);
  }

  componentDidMount() {
    if (!this.props.token.access_token)
      this.props.history.push('/landing');
  }

  componentDidUpdate() {
  }

  handleAuthClick(e) {
    e.preventDefault();
    this.setState({ doAuth: true });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1>Your Home Page</h1>
        </div>
        <SelectedSongs />
        <SearchBar />
      </div>
    );
  }
};

export default connect(mapStateToProps, null)(Landing);;

function mapStateToProps({ token }, ownProps) {
  return {
    ...ownProps,
    token,
  };
};
