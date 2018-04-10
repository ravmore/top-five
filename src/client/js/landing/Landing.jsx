import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import SpotifyAuth from '../spotify-auth/SpotifyAuth';
import SearchBar from '../search-bar/searchbar';
<<<<<<< HEAD
=======
import SelectedSongs from '../selectedSongs/selectedSongs';
>>>>>>> 2ca4f8b76c66ecee5fa29231283a04e822ae7a3d

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
<<<<<<< HEAD
        <button
          onClick={this.handleAuthClick}
        >Auth</button>
        <SpotifyAuth
          getToken={this.state.doAuth}
          location={this.props.location}
        ></SpotifyAuth>
        <SearchBar />
=======
        {
          this.props.token.access_token ? null :
          <button
            onClick={this.handleAuthClick}
          >Auth</button>
        }
          <SpotifyAuth
            getToken={this.state.doAuth}
            location={this.props.location}
          />
        <SearchBar />
        <SelectedSongs />
>>>>>>> 2ca4f8b76c66ecee5fa29231283a04e822ae7a3d
      </div>
    );
  }
};

<<<<<<< HEAD
export default connect()(Landing);;
=======
export default connect(mapStateToProps, null)(Landing);;

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    token: state.token,
  };
};
>>>>>>> 2ca4f8b76c66ecee5fa29231283a04e822ae7a3d
