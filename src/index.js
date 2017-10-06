import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

/** import components **/
/* main route */
import HomePage from './components/homepage/homepage';
import WorkPage from './components/workpage/workpage';
import ProjectPage from './components/projectpage/projectpage';
import ContactPage from './components/contactpage/contactpage';

/* sub route */
import TodoApp from './components/projectpage/projects/todo-app';
import WikiSearch from './components/projectpage/projects/wiki-search';
import MarkDownPreview from './components/projectpage/projects/markdown-preview';
import YoutubePlayer from './components/projectpage/projects/youtube-player';


ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/work" component={WorkPage} />
          <Route path="/projects/wikisearch" component={WikiSearch} />
          <Route path="/projects/todoapp" component={TodoApp} />
          <Route path="/projects/mardownpreview" component={MarkDownPreview} />
          <Route path="/projects/youtubeplayer" component={YoutubePlayer} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  ,document.getElementById('root')
)