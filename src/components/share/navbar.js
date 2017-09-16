import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';

export default function NavBar(){
  return(
    <header>
      <div className="header-container">
        <img src={logo} />
        <nav>
          <ul>
            <li><NavLink to ='/'>Home</NavLink></li>
            <li><NavLink to ='/projects'>Projects</NavLink></li>
            <li><NavLink to ='/contact'>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}