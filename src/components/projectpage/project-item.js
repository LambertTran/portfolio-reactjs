import React, {Component} from 'react';

class ProjectItem extends Component{
  render(){
    return(
      <div className="col-12 col-md-6">
        <img src={this.props.img} className="img-fluid" alt="Responsive image"/>
      </div>
    )
  }
}

export default ProjectItem;