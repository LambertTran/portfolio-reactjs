import React, {Component} from 'react';
import NavBar from '../share/navbar';
import ProjectItem from './project-item';

/** images **/
import project1 from './images/screen.png';
import wikisearch from './images/wiki-search.png';
import markdown from './images/markdown.png';


class ProjectPage extends Component{
  render(){

    return(
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <ProjectItem img={wikisearch} path="/projects/wikisearch" name='wiki' />
            <ProjectItem img={markdown} path="/projects/mardownpreview" name='markdown' />
            <ProjectItem img={project1} path="/" />
            <ProjectItem img={project1} path="/" />
            <ProjectItem img={project1} path="/" />
          </div>
        </div>
      </div>
    )
  }  
}

export default ProjectPage;