import React from 'react'
import './style/Testimonial.css'
import reactDOM from 'react-dom';
function Testimonial(props) {
   
return (
     <div className='container testimonials'>
          <div className="heading">
          <h5 className="head">Testimonials</h5>
        </div>
        <div className='row'>
           {/** testimonial1 */}
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    
                        <div className='testimonialContainer'>
                        <img className='testimonialImage' src="/images/21.jpg"/>
                        <div className='stars'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        
                       
                        <p className='testimonialText'>Anouar is a fast learner who enjoys programming, and loves problems solving.</p>
                     <h6 className='testimonialName'>Jhon Doe</h6>
                    <div className='testimonialJob'>
                        Software Engineer<br/>
                     </div>
                         
                    
                </div>
                        
                                    
                    </div>
                    
                    {/** testimonial1 */}
                <div className='col-lg-6 col-md-6 col-sm-6'>
                    
                    <div className='testimonialContainer'>
                    <img className='testimonialImage' src="/images/3.jpg"/>
                    <div className='stars'>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    
                   
                    <p className='testimonialText'>Anouar is a fast learner who enjoys programming, and loves problems solving.</p>
                     <h6 className='testimonialName'>Isabella</h6>
                    <div className='testimonialJob'>
                        Web Designer<br/>
                     </div>
                     
                
            </div>
                    
                                
                </div>
                
        </div>
     </div>
      
  
  );
}

export default Testimonial;
