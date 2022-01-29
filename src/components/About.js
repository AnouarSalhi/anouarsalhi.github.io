import React from 'react'
//import './style/About.css'
import './style/About.css'

function About() {
  return (
    <div className="about">
      <h5 className="head">About</h5>
      <img className="myImage" src="./images/pic.jpg"/>
    <div className="aboutDesc">
      <h6 className="who">Who I'm</h6>
      <p >Hello! my name is Anouar,I'm from morocco, I'm a software engineering student and programming geek and enthusiast, I enjoy creating things that's live on the internet,So it's reachable to everyone from any browser and device,My interest in web developement started back in 2020,I started learning web developement from scratch besides my studies in university  computer science engineering ,Although my studies in the IT field I always prefer Self-Education to go deep in programming. </p>
      <div className="technologies">
              <h5>Here are a few technologies I have been working with :</h5>
              <p>Html, Css, Jvascript, React jS.</p>
              <p>Php, Laravel, JAVA, MySql, JSON.</p>
              <p>UML, Photoshop</p>
      </div>
      <div className="lang">
              <h5>Languages:</h5>
              <p>Arabic</p>
              <p>English</p>
              <p>French</p>
      </div>
      
      </div>  
      
      
    </div>
  );
}

export default About;
