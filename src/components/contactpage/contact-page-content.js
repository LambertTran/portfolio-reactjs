import React from 'react';

export default function ContactPageContent(){
  return(
    <div className="container">
      <div>
        <h1>About me</h1>
        <p>My name is Lambert Tran, I am majoring Chemical Engineering. Yet,
           I found my passion on Web Development. I love to make cool and website,
           and make life become easier.
        </p>
      </div>
      <div>
        <h4>Contact:</h4>
        <p><a href="mailto:lb.tran648@gmail.com">lb.tran648@gmail.com</a></p>
      </div>
      <div className="home-icon-container">
        <ul className="home-icon">
          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="https://github.com/LambertTran"><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a href="https://www.linkedin.com/in/lam-tran-26106546/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>
    </div>
    </div>
  )
}