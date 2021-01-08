import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import DashBoard from '../pages/DashBoard';
import HomePage from '../pages/HomePage';
import Product from '../pages/Product';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/signin" component={SignIn} />

    <Route path="/products" component={DashBoard} isPrivate />
    <Route path="/teste/:id+" component={Product} isPrivate />
  </Switch>
);

export default Routes;
