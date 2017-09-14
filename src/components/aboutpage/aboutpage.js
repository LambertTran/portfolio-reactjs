import React, {Component} from 'react';
import NavBar from '../share/navbar';
import AboutPageConTent from './about-page-content';
class AboutPage extends Component{
  render(){
    return (
      <div>
        <NavBar />
        <AboutPageConTent />
      </div>
    )
  }
}

export default AboutPage;