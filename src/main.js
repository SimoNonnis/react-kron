import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';
import NoMatch from './components/NoMatch';


const routes = (
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/users"   component={Users} />
    <Route path="/posts"  component={Posts} />
    <Route path="/comments"  component={Comments} />
    <Route path="*" component={NoMatch} />
  </Route>
</Router>);
const root = document.getElementById('root');


// Start the App
render(
  routes,
  root
);
