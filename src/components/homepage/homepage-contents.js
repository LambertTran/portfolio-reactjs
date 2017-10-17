import React from 'react';

import HomeButtons from './home-buttons';


export default function HomeContents(){
  return(
    <div className="home-contents">
      <div>
        <h1>Lambert Tran</h1>
        <h3>Web Developer</h3>
      </div>
      <div>
        <HomeButtons />
      </div>
    </div>
  )
}

