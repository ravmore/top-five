import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import getStore from '../redux/store';
import PageNotFound from '../page-not-found/PageNotFound';
import Home from '../home/Home';
import Landing from '../landing/Landing';

const store = getStore();

const Routes = props => (
  <Provider store={store}>
  	<Switch>
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/home" component={Home} />
  		<Route path="*" component={PageNotFound} />
  	</Switch>
  </Provider>
);

export default Routes;