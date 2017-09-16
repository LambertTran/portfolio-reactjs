import React, {Component} from 'react';
import NavBar from '../share/navbar';
import ContactPageConTent from './contact-page-content';
class ContactPage extends Component{
  render(){
    return (
      <div>
        <NavBar />
        <ContactPageConTent />
      </div>
    )
  }
}

export default ContactPage;