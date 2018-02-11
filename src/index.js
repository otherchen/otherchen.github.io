/*
  @todo:
  1. add basic react structure
  2. add sass capabilities (through webpack)
  4. add auto deployment to github pages
  5. buy keyboard and/or pixel 2
  6. learn how to model/track/animate/color-grade
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom';

const Home = () => {
  return <div>HOME PAGE</div>;
}

const MovieBlog = () => {
  return <div>MOVIE BLOG</div>;
}

const routes = (
  <Router>
        <div>
          <Route path="/*" render={() => {
            console.log("WHAT:!!!");
            return (
              <div>
                what!!!
                <Route path="/home" component={Home} />
                <Route path="/movie-blog" component={MovieBlog} />
              </div>
            );
          }} />
        </div>

  </Router>
);

ReactDOM.render(routes, document.getElementById("content"));
