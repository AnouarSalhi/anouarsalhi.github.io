import React from 'react'
import './style/Header.css'
function Header(){
    return(
        <div className="myHeader">
          <span className="gmail">itsanouarsalhi@gmail.com</span>
          <div className="social">
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          
            
          </div>
          <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12" style={{wordWrap:"break-word"}}>
                      <p className="hi"><img src='/images/hi.png' style={{marginBottom:"10px",marginRight:"3px"}} width="20px" height="23px"/>Hi, My name is</p>
                      <h1 className="myName">Anouar Salhi.</h1>
                      <h1 className="shortDesc">I build things for <br></br> the web.</h1>
                      <p className="longDesc">I'm a software developer specializing in building exceptional web applications.Currently,I'm focused on building high quality applications.</p>
                      <div className="center">
                        <a className="CheckBtn2" href="#projects">View My Work  </a>
                        <a className="CheckBtn" href="#contact">Get In Touch </a>
                      </div>
                      
                      
                </div>
                <div className="col-md-6 immage">
                      <img className="image" src="/images/header-img.png" />
                </div>

              </div>
          </div>
          <div className="line"></div>
          <div className="hedo">
            <div className="part1">
              
              </div>
            <div className="part2">
             
            </div>
          </div>
          
          
        </div>
    )
}
export default Header;