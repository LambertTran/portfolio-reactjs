import React, {Component} from 'react';
import NavBar from '../share/navbar';
import ProjectItem from './project-item';

import project1 from './images/screen.png';
class ProjectPage extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
            <ProjectItem img={project1} />
            <ProjectItem img={project1} />
            <ProjectItem img={project1} />
            <ProjectItem img={project1} />
            <ProjectItem img={project1} />
          </div>
        </div>
      </div>
    )
  }  
}

export default ProjectPage;