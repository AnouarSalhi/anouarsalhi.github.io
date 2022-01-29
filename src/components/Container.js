import React from 'react'
//import './style/About.css'
import './style/bootstrap.min.css'
import './style/Container.css'

import Project from './Project'


function Container() {
  return (
    <div className="containerr" id="projects">
      
      <div className="container updateContainer">
        <div className="heading">
          <h5 className="head">My last work</h5>
        </div>
        
         <div className="row">
             <Project title="Club managment website." imageName="main.png" desc="It's an application represent a club and manage its activities and membres." technologies="Laravel, Bootstrap, Html, Css, Javascript" link="https://github.com/AnouarSalhi/club-management-web-application"/>
             <Project title="Ecomerce web application." imageName="shoply.png" desc="A website where customers buy the product, the seller sells their goods." technologies="Php, MVC, Bootstrap, Html, Css" link="https://github.com/AnouarSalhi/ecommerce-web-application"/>
             <Project title="Portfolio website." imageName="myportfolio.png" desc="My personal website which in I display my skills and projects." technologies="React, Bootstrap, Html, Css, Javascript"/>
             
            
             
           {/*  <Project title="Club managment website." imageName="main.png" technologies="Laravel, Bootstrap, Html, Css, Javascript"/>
             <Project title="Blogging web Application." imageName="main.png" technologies="React, Html, Css, Javascript"/>*/}
         </div>
         <div className="row">
           
         </div>
      </div>
     
    </div>
  );
}

export default Container;
