import React from 'react';
import axios from 'axios';

class SpotifyAuth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tokenData: null,
    };
  }

  componentWillMount() {
    this.authLogic();
  }

  authLogic() {
    const params = this.props.location.search
      .slice(1)
      .split('&')
      .map(param => param.split('='))
      .reduce((memo, tuple) => {
        memo[tuple[0]] = tuple[1];
        return memo;
      }, {});

    if (this.state.tokenData) {
      return;
    } else if (params.code || this.state.code) {
      this.getToken(params.code);
    } else {
      this.getCode();
    }
  }

  getToken(code) {
    axios.get(`/spotify/auth/token?code=${code}`)
      .then(({data}) => {
        //this.props.onTokenData(data);
        this.setState({ tokenData: data });
      })
      .catch(e => null);
  }

  getCode() {
    axios.get('/spotify/auth')
      .then(({data}) => {
        //console.log(data)
        window.location.href = data;
      })
      .catch(e => null);
  }

  render() {
    return (
      <div>
        {console.log(this.state.tokenData)}
      </div>
    );
  }
};

export default SpotifyAuth;