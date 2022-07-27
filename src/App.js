
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './Layout'

import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    

    
    </div>
  );
}

export default App;
