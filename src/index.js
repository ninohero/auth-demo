import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';
import Feature from './components/Feature';
import SignOut from './components/SignOut';

const store = createStore(
  reducers, {
    auth: { authenticated: localStorage.getItem('token')}
  },
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={SignUp} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={SignOut} />>
      </App>
    </BrowserRouter>
  </Provider>, document.querySelector('#root'));
