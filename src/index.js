import React from 'react';
import ReactDOM from 'react-dom';
import { 
  HashRouter, 
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './HomePage';
import MovieBlog from './MovieBlog';
import NotFound from './NotFound';

/** 
* Injecting global styles
*/
import './styles/global';

/** 
* Note: Github Pages only supports hash routing.
* Browser routing won't work since GH will treat it
* as a backend route and thus, won't recognize it.
*/
const routes = (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movie-blog" component={MovieBlog} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

ReactDOM.render(routes, document.getElementById("content"));
