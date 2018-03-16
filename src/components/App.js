/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import ProductDetailsContainer from './ProductDetailsContainer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/details/:id" component={ProductDetailsContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
