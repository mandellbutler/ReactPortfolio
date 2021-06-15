import './App.css';
import React from 'react';
import Header from './components/Header';
import Project from './pages/Project';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/myWork'>
          <Project />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/aboutMe'>
          <About />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

