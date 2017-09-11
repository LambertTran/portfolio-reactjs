import React,{Component} from 'react';
import NavBar from '../../share/navbar';
import SlideShowImage from './slide-show-images';

class RenderProject extends Component{
  render(){
    var webLink = this.props.webLink;
    var codeLink= this.props.codeLink;
    var imgList = this.props.imgList;
    var techUse = this.props.techUse;
    var about   = this.props.about; 
    return(
      <div>
        <NavBar />
          <div className="container">
            <h1>Wiki Search Engine</h1><hr/>
            <div>
              <a href={webLink} className="btn btn-primary" role="button">View Page</a>
              <a href={codeLink} className="btn btn-primary" role="button">View Code</a>
            </div><hr/>
            <SlideShowImage images={imgList} />
            <div>
              <h3>About this project</h3><hr/>
              <p>{about}</p>
            </div>
            <div>
              <h3>Techs I used</h3><hr/>
              <ul>
                {techUse.map((each,i) => <li key={i}>{each}</li>)}
              </ul>
            </div>
          </div>
      </div>
    )
  }
}

export default RenderProject;