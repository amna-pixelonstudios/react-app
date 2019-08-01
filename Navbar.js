import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './style.css'

// component in file
function Navigation() {
  return (
    <BrowserRouter>
      <div className="navbar_left">
        <h3><Link to='/'><a>Logo</a></Link></h3>
      </div>
      <div className="navbar_right">
        <ul>
          <li><Link to="/"><a className="hover_effect">Home</a></Link></li>
          <li><Link to="/about"><a className="hover_effect">About</a></Link></li>
          <li><Link to="/contact"><a className="hover_effect">Contact</a></Link></li>
        </ul>
      </div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
    </BrowserRouter>
  );
}
 
export default Navigation; 