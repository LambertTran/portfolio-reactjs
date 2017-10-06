import React,{Component} from 'react';

export default class RenderWork extends Component{
  render(){
    const passedData = this.props;
    return(
      <div>
        <div className="row">
          <div className="col-12 col-md-6">
            <img 
              src={passedData.image}
              className="img-fluid" 
              alt="Responsive image"
            />
          </div>
          <div className="col-12 col-md-6 work">
            <h3>{passedData.name}</h3>
            <li>{passedData.techs}</li>
            <p>{passedData.description} </p>
          </div>
        </div>
        <hr className="work-hr" />
      </div>
    )
  }
}