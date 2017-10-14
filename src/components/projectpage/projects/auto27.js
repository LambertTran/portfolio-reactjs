import React from 'react';

import RenderProject from '../share/render-project';
import auto1 from '../images/auto1.png';
import auto2 from '../images/auto2.png';
import auto4 from '../images/auto4.png';
import auto6 from '../images/auto6.png';



export default function Auto27(){
  var title = 'Auto27 (in progress)'; 
  var imgList = [auto1,auto2,auto4,auto6];
  var webLink = "https://auto27.us/";
  var codeLink= '';
  var techUse = ['ReactJS','Redux','ExpressJS','NodeJS','AWS','MongoDB','HTML5','Sass'];
  var about = "Auto 27 is a start up car dealership in Sacramento " +
              "region. They are the best at helping people get their " +
              "dream car." + '\n\n' + "This project is built on MERN stack " +
              "NodeJs server handle administration, including login and modify car data. "+
              "All the images are stored in AWS S3 bucket, and the links to these images "+
              " are stored in a Mongo database along with other car descriptions " + "\n\n" +
              "The front-end is created using React - Redux framwork. Client site makes " +
              "GET request to server endpoint API to fetch car data and display";
  return(
    <RenderProject 
      title = {title}
      webLink={webLink}
      codeLink={codeLink}
      imgList={imgList}
      techUse={techUse}
      about={about}
    />
  )
}