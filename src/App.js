import './App.css';
import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Project from './components/Project';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Project />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

export default App;

