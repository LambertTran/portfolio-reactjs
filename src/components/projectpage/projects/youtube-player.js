import React from 'react';

import RenderProject from '../share/render-project';
import youtube1 from '../images/youtube-1.png';
import youtube2 from '../images/youtube-2.png';


export default function YoutubePlayer(){
  var title = 'Youtube Player'; 
  var imgList = [youtube1,youtube2];
  var webLink = "http://youtube-player-reactjs.s3-website-us-west-1.amazonaws.com/";
  var codeLink = ["https://github.com/LambertTran/youtube-player-reactjs"];
  var techUse = ['ReactJS','HTML5','CSS3'];
  var about = 'This application implements ReactJS singlie page application. ' +  
              'The app will take user input and make GET request every second. ' +
              'A list of videos is, then, displayed and a video player defaulted ' +
              'the first video in the list. User can pick different video to play.'
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