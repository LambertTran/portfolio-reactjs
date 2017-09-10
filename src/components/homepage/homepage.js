import React,{Component} from 'react';

/** import components **/
import NavBar from '../share/navbar';
import HomeContents from './homepage-contents';

class HomePage extends Component{
  render(){
    return(
      <div>
        <NavBar />
        <HomeContents />
      </div>
    )
  }
}

export default  HomePage;