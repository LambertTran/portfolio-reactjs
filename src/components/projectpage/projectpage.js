import React, {Component} from 'react';
import NavBar from '../share/navbar';
import ProjectItem from './project-item';

/** images **/
import todo from './images/todo.png';
import wikisearch from './images/wiki-search.png';
import markdown from './images/markdown.png';
import youtubeplayer from './images/youtube-player.png';

class ProjectPage extends Component{
  render(){

    return(
      <div>
        <NavBar />
        <section className="container page-width">
          <div className="row">
            <ProjectItem img={todo} path="/projects/todoapp" />
            <ProjectItem img={youtubeplayer} path="/projects/youtubeplayer" />
            <ProjectItem img={markdown} path="/projects/mardownpreview"/>
            <ProjectItem img={wikisearch} path="/projects/wikisearch"/>
          </div>
        </section>
      </div>
    )
  }  
}

export default ProjectPage;