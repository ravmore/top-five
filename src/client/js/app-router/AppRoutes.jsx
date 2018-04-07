import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import getStore from '../redux/store';
import Landing from '../landing/Landing';
import PageNotFound from '../page-not-found/PageNotFound';
import SpotifyAuth from '../spotify-auth/SpotifyAuth';

const store = getStore();

const Routes = props => (
  <Provider store={store}>
  	<Switch>
      <Route exact path="/spotify/auth" component={SpotifyAuth} />
  		<Route exact path="/landing" component={Landing} />
  		<Route path="*" component={PageNotFound} />
  	</Switch>
  </Provider>
);

export default Routes;