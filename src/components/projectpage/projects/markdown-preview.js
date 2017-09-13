import React from 'react';

import RenderProject from '../share/render-project';
import markdown1 from '../images/markdown-1.png';
import markdown2 from '../images/markdown-2.png';


export default function MarkDownPreView(){
  var title = 'Markdown Preview'; 
  var imgList = [markdown1,markdown2];
  var webLink = "http://markdown-preview.s3-website-us-west-1.amazonaws.com/";
  var codeLink = ["https://github.com/LambertTran/markdown-preview"];
  var techUse = ['ReactJS','HTML5','Sass'];
  var about = 'This application implements ReactJS single page application.' +  
              'Taking user inputs and transform into markdown in real time.'
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