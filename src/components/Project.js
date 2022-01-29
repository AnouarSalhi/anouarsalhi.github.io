import React from 'react'
import './style/Project.css'
import reactDOM from 'react-dom';
function Project(props) {
  const [display,setDisplay]=React.useState('hidden')
  React.useEffect(()=>{

    return ()=>{

    }

  },[display]);
//      <span>Projects</span> <span className="aboutLine"></span><br/><br/><br/>
/* <div className="show" style={{visibility:display,transition:"0s"}} >
         <div className="projectDetails">
         <button onClick={()=>setDisplay("hidden")}>click</button>
         <iframe width="100%" height="415px"  src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
          
       </div>*/  
return (
    
      <div className='col-lg-6 col-md-6 col-sm-6'>
        <div className='projectContainer'>
          <img className='imageProject' src={'/images/'+props.imageName}/>
          <h5 className='projectTitle'>{props.title}</h5>
          <p className='projectDesc'>{props.desc}</p>
          <div className='projectTech'>
               {props.technologies}<br/>
          </div>
        
         
          <a className="githubBtn"  href={props.link} target="_blank"><i class="fab fa-github"></i> Git Hub </a>
        </div>
          
                      
      </div>
      
       
  
  );
}

export default Project;
