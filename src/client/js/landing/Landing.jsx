import React from 'react';

import SpotifyAuth from '../spotify-auth/SpotifyAuth';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enter: false,
    };

    this.handleEnterClick = this.handleEnterClick.bind(this);
    this.handleOnToken = this.handleOnToken.bind(this);
  }

  handleEnterClick(e) {
    e.preventDefault();
    this.setState({ enter: true });
  }

  handleOnToken(token) {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div>
        <h1>Welcome to Top Five</h1>
        <button
          type="button"
          onClick={this.handleEnterClick}
        >Enter</button>
        <SpotifyAuth
          getToken={this.state.enter}
          location={this.props.location}
          onToken={this.handleOnToken}
        />
      </div>
    );
  }
};

export default Home;