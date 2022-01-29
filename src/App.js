import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import Header from './components/Header'
import Stack from './components/Stack'
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Stack/>
      <Container/>
      <Contact/>
      <Testimonial />
      </div>
  );
}

export default App;
