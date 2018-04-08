import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { setTokenAction } from '../redux/actions';

// Required Props:
//    locaiton  (object)  - The location object pased down from react-router-dom
// Optional Props:
//    basePath  (string)  - The base path to prepend to the location.pathname string
//    getToken  (bool)    - If true, will get spotify token, else will do nothing
//    onError   (func)    - A function to be called if an error occurs in auth

class SpotifyAuth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: this.props.token,
      error: null,
      params: null,
    };
  }

  componentDidMount() {
    if (!this.props.location) {
      this.setState({ error: 'No locaiton property'});
    }
    const params = this.props.location.search
      .slice(1)
      .split('&')
      .map(param => param.split('='))
      .reduce((memo, tuple) => {
        memo[tuple[0]] = tuple[1];
        return memo;
      }, {});

      this.setState({ params });
  }

  componentDidUpdate() {
    if (!this.state.token.access_token && !this.state.error && this.props.getToken) {
      this.authLogic();
    }
  }

  onToken() {
    if (!!this.props.onToken)
      this.props.onToken(this.state.token);
  }

  onError() {
    if (!!this.props.onError)
      this.props.onError(this.state.error);
  }

  authLogic() {
    const basePath = this.props.basePath || '/r';
    if (this.state.params.code) {
      this.getToken(this.state.params.code, `${basePath}${this.props.location.pathname}`);
    } else {
      this.getCode(`${basePath}${this.props.location.pathname}`);
    }
  }

  getToken(code, redirect = '/r') {
    axios.post(`/spotify/auth/token?code=${code}`, {
      redirect,
    })
      .then(({data}) => {
        if (!!data.error)
          this.setState({ error: data.error });
        else {
          this.setState({ token: data });
        }
      })
      .catch(e => null);
  }

  getCode(redirect = '/r') {
    axios.post('/spotify/auth', {
      redirect,
    })
      .then(({data}) => {
        if (!!data.error)
          this.setState({ error: data.error });
        else
          window.location.href = data;
      })
      .catch(e => this.setState({ error: e }));
  }

  render() {
    return <div />;
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpotifyAuth);

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    token: state.token,
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    ...ownProps,
    onToken: (token) => {
      dispatch(setTokenAction(token));
    },
  };
};