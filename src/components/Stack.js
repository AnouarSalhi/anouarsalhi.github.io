import React from 'react'
import './style/Stack.css'
import './style/bootstrap.min.css'


function Stack() {
  return (
    
      
      <div className="container stackContainer ">
         <h5 className="head">Technologies Stack</h5>
           <div className="row r">
               
           <div className="col-md-3 col-sm-4 col-6  selemengts">
                 <div className="stackElement">
                     <img className="imageStack align-middle"  src="/images/laravel-logo.png"/>
                     <h5>Laravel</h5>
                 </div>
             </div>

             <div className="col-md-3 col-sm-4 col-6  selemengts">
             <div className="stackElement">
                     <img className="imageStack" width="120px" height="120px" src="/images/php (1).png"/>
                     <h5>PHP</h5>
                 </div>
             </div>
               
             <div className="col-md-3 col-sm-4  col-6 selemengts">
             <div className="stackElement">
                     <img className="imageStack" width="120px" height="120px" src="/images/react.png"/>
                     <h5>React Js</h5>
                 </div>
             </div>

            <div className="col-md-3 col-sm-4 col-6  selemengts">
                            <div className="stackElement">
                                <img className="imageStack" width="120px" height="120px" src="/images/java.png"/>
                                <h5>Java</h5>
                            </div>
            </div>
         
          
          

             <div className="col-md-3 col-sm-4 col-6  selemengts">
             <div className="stackElement">
                     <img className="imageStack" width="120px" height="120px" src="/images/photoshop.png"/>
                     <h5>Photoshop</h5>
                 </div>
             </div>
               
             <div className="col-md-3 col-sm-4 col-6  selemengts">
             <div className="stackElement">
                     <img className="imageStack" width="120px" height="120px" src="/images/bootstrap (1).png"/>
                     <h5>Bootstrap</h5>
                  </div>
             </div>
             <div className="col-md-3 col-sm-4 col-6  selemengts">
             <div className="stackElement">
                     <img className="imageStack" width="120px" height="120px" src="/images/git.png"/>
                     <h5>Git</h5>
                  </div>
             </div>
      
            
             
            

            
               
             

             
         
      </div>
     
    </div>
  );
}

export default Stack;
