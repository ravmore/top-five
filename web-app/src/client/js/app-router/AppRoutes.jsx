import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import PageNotFound from '../page-not-found/PageNotFound';
import SpotifyAuth from '../spotify-auth/SpotifyAuth';

const Routes = props => (
	<Switch>
    <Route exact path="/spotify/auth" component={SpotifyAuth} />
		<Route exact path="/" component={Landing} />
		<Route path="*" component={PageNotFound} />
	</Switch>
);

export default Routes;