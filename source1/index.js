import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import './assets/css/layout.css';
import './assets/css/fabric.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store';
import {UUMAI} from './appInsights';

UUMAI.init({instrumentationKey:'f38f3284-8970-4158-8eb6-ffc932df3977'});

window.store = store;



ReactDOM.render((
    <Provider store={store}>
  
    <BrowserRouter  >
     
     {/* <div>
     <Route  exact path="/" component={App} />
     </div> */}

     <App  />
    

    </BrowserRouter>
    </Provider>
  ), document.getElementById('root'))
registerServiceWorker();
