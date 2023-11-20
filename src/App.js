import {Routes,Route,BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home  from './components/Home';
import Aboutus from './components/Aboutus';
import Skills from './components/Skills';
import Contact from './components/Contact';

import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
       <Routes>
        <Route path="/home" element={<Home/>}/>
         <Route path="/about" element={<Aboutus/>}/>
         <Route path="/skills" element={<Skills/>}/>
         <Route path="/contact" element={<Contact/>}/>
         
         <Route path='/projects' element={<Projects/>}/>
       </Routes>
     </BrowserRouter>

    {/* <Navbar/>
    <Home/>
    <Aboutus/>
    <Skills/> */}
    </div>
  );
}

export default App;
