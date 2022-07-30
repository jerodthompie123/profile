
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './Layout'

import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div>
      <div id="div-header">
      <header><h1>Jerod Thompson-Springer</h1></header>
      </div>
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
      <div id="img-div" >
        <img src="profilepic.jpg"  id="profile-image" alt="Other"/>
      </div>
    </div>
  );
}

export default App;
