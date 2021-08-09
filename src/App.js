import './App.css';
import React from 'react';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import About from './pages/About';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route } from "react-router-dom";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <Router>
      <div>
        <Route exact path='/ReactPortfolio'>
          <Homepage />
        </Route>
        <Route exact path='/myWork'>
          <Project />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/aboutMe'>
          <About />
        </Route>
        <Route exact path='/resume'>
          <Resume />
        </Route>
      </div>
    </Router>
  );
}

export default App;

