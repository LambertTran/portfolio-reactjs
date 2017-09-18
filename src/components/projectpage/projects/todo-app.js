import React from 'react';

import RenderProject from '../share/render-project';
import todo1 from '../images/todo-1.png';
import todo2 from '../images/todo-2.png';
import todo3 from '../images/todo-3.png';


export default function YoutubePlayer(){
  var title='Todo App';
  var imgList = [todo1,todo2,todo3];
  var webLink = "http://todo-react-redux.s3-website-us-west-1.amazonaws.com/";
  var codeLink = ["https://github.com/LambertTran/todo-app-react-redux",
                  "https://github.com/LambertTran/node-server-todoApp"];
  var techUse = ['ReactJS','Redux','ExpressJS','NodeJS','MongoDB','HTML5','CSS3'];
  var about = 'This is a MERN-stack single page application. React-redux handles' +
              'client page, Express and Nodejs on server-side.'+
              '\n\n' +
              'Client side makes CRUD requests to server to log in, create ' + 
              'new tasks,...and display user data' +
              '\n\n' +
              'Server then processes all requests and updates any new documents ' +
              'to MongoDB database. In addition, to secure user data, server ' + 
              'will verify user with authenticated token everytime a user signs in. ' +
              'Furthermore, user password is also hassed and store in differernt collection' 
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