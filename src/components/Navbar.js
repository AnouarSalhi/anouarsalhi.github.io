//import './App.css';
//import './scripte.js';
import React from 'react'
//import ReactDOM from 'react'
import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';
//import ReactDom from "react-dom";

class Navbar extends React.Component {
    componentDidMount(){
		//const script=
	}
	handleClick=()=>{
		const hamburger=document.querySelector(".navBarBtn");
    	const navMenu=document.querySelector(".nav-menu");
		hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
	}
	render(){
		return (
    <header className="header">
		
		 
    	  <nav className="navbar">
		<div className="progress-container">
        
         <div className="progress-bar" id="myBar"></div>
         </div> 
    	  	  <Link to="home" className="nav-logo"><img src="./images/lastlogo.png"/></Link>
    	  	  <ul className="nav-menu">
    	  	  	 <li className="nav-item" onClick={this.handleClick}>
    	  	  	 	<Link to="home" className="nav-link">Home</Link>
    	  	  	 </li>
    	  	  	 <li className="nav-item" onClick={this.handleClick}>
    	  	  	 	<Link to="projects" className="nav-link">Projects</Link>
    	  	  	 </li>
    	  	  	 
    	  	  	 <li className="nav-item" onClick={this.handleClick}>
    	  	  	 	<Link to="about" className="nav-link">About</Link>
    	  	  	 </li>
				<li className="nav-item resume" onClick={this.handleClick}>
    	  	  	 	<a href="./cv/cvUpDate.pdf" /*download="CV_Anouar_Salhi" */type="email" className="nav-link">Resume</a>
    	  	  	 </li>
					 
    	  	  </ul>
    	  	  <div className="navBarBtn" onClick={this.handleClick}>
    	  	  	  <span className="bar bar1"></span>
    	  	  	  <span className="bar bar2"></span>
    	  	  	  <span className="bar bar3"></span>
    	  	  </div>
    	  </nav>
    </header>
  );
	}
  
}

export default Navbar;
