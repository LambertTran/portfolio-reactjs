import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

/** import components **/
import HomePage from './components/homepage/homepage';
import ProjectPage from './components/projectpage/projectpage';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/projects" component={ProjectPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  ,document.getElementById('root')
)