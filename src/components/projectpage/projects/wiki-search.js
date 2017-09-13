import React from 'react';

import RenderProject from '../share/render-project';
import wiki1 from '../images/wiki-1.png';
import wiki2 from '../images/wiki-2.png';


export default function WikiSearch(){
  var title = 'Wiki Search'; 
  var imgList = [wiki1,wiki2];
  var webLink = "http://wiki-search-engine.s3-website-us-west-1.amazonaws.com/";
  var codeLink = ["https://github.com/LambertTran/lamberttran.github.io/tree/master/projects/wikiSearch"];
  var techUse = ['HTML5','CSS3','JQuery'];
  var about = 'This application makes a GET request to' +  
              'Wikipeadia server using key words user entered.' +
              'Then, using JQuery to iterate through the JSON response' +
              'and display the result to user.'
  return(
    <RenderProject
      title={title} 
      webLink={webLink}
      codeLink={codeLink}
      imgList={imgList}
      techUse={techUse}
      about={about}
    />
  )
}