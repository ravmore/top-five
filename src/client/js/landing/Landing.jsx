import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import SpotifyAuth from '../spotify-auth/SpotifyAuth';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      doAuth: false,
    };

    this.handleAuthClick = this.handleAuthClick.bind(this);
  }

  handleAuthClick(e) {
    e.preventDefault();
    this.setState({ doAuth: true });
  }

  render() {
    return (
      <div>
        Top Five
        <button
          onClick={this.handleAuthClick}
        >Auth</button>
        <SpotifyAuth
          getToken={this.state.doAuth}
          location={this.props.location}
        ></SpotifyAuth>
      </div>
    );
  }
};

export default connect()(Landing);;