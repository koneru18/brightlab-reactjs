import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import configureStore from './store/configureStore';
import './styles/styles.css'; //Webpack can import CSS files too!
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/app'; 
import { ApolloProvider } from 'react-apollo';
import client from './store/createClient';

/* const store = configureStore();

render((
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>
), document.getElementById('app')); */

render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('app-root')
);