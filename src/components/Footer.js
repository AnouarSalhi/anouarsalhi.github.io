import React from 'react'
//import './style/About.css'
import './style/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footerSocial">
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          
            
          </div>
     <span>Designed and built with <img className='love' src='/images/love.png'/> by <a href="#">Anouar Salhi</a>.</span> 
      
    </div>
  );
}

export default Footer;
