import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/style/bootstrap.min.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Container from './components/Container'
import Footer from './components/Footer'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route,Routes} from'react-router-dom';
import Thanks from './components/Thanks';

ReactDOM.render(
  <React.StrictMode>
     
    
     <Router>
        <Navbar/>
         
       <Routes>
          
           <Route path="/home" element={<App/>} />
           <Route path="/" element={<App/>} />
           <Route path="/projects" element={<Container/>} />
           <Route path="/thanks" element={<Thanks/>} />
           <Route  path="/about" element={<About/>}  />
        </Routes>
        
     </Router>
    
    <Footer/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
