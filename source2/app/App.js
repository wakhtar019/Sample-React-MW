import React, { Component } from 'react';
import './App.css';
import {
  Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './layout/Header/Header';
import Home from './layout/Home/Home';
import {NotFound} from './common/components';
import {CreateOrder, SearchOrder, OrderInfo, DashBoard} from './order/components';

import Module from './module/Module';
import history from '../history';

class App extends Component {
  render() {
    return (
      <Router  history={history}>
        <div>
          <Header theme="blue"/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/module" component={Module} />
            <Route exact path="/notfound" component={NotFound} />
            
            <Route exact path='/CreateOrder' component={CreateOrder} />
            <Route exact path='/SearchOrder' component={SearchOrder} />
            <Route exact path='/Order/:orderId' component={OrderInfo} />
            <Route exact path='/DashBoard' component={DashBoard} />

            <Redirect to="/NotFound" />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;

App.propTypes = {

}
