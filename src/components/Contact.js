import React from 'react'
import './style/bootstrap.min.css'
import './style/Contact.css'

function Contact() {
  return (
    
      
      <div className="container stackContainer " id='contact'>
         <h5 className="head">Contact Me</h5>
           <div className="row contactRow">
           <div className='col-md-6'>
            <div>
              <img   className='contactImage' src='images/cont.png' />
             <a className='attribute' target="_blank"  href="http://www.freepik.com">Designed by Freepik</a>
            </div>
             
           </div>
            <div className='col-md-6'>
               <form action="https://formspree.io/f/xeqnajzj" method='post'>
                <div className="form-group">
                   
                    <input type="text" className="form-control" placeholder="Full Name" id="email"/>
                </div>
                <div className="form-group">
                
                    <input type="email" className="form-control iny" name='_replyto' placeholder="Email" id="pwd"/>
                </div>
                <div className="form-group">
                
                    <input type="text" name='Subject' className="form-control" placeholder="Subject" id="pwd"/>
                </div>
                <div className="form-group">
                   
                    <textarea type="text" name='message' rows="4" className="form-control" placeholder="Message" maxLength={200} id="pwd"/>
                </div>
                <button type="submit" className="btn btn-primary submit"><i className="fas fa-paper-plane"></i>Submit</button>
                </form>
            </div>
           </div>
     
    </div>
  );
}

export default Contact;
