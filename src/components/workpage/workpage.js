import React,{Component} from 'react';

/** import components **/
import NavBar from '../share/navbar';
import RenderWork from './share/render-work';
/** import images **/
import laptop from './images/laptop-container.png';

export default class WorkPage extends Component{
  render() {
    
    const   description="Auto 27 is a start up car dealership in Sacramento " +
                        "region. They are the best at helping people get their " +
                        "dream car."
    return (
      <div>
        <NavBar />
        <section className="container page-width">
          <div>
            <RenderWork 
              image={laptop}
              name="Auto 27"
              techs="Mongo, Node, Express, React, AWS, Sass"
              description={description}
            />
            
          </div>
        </section>
      </div>
    );
  }
}