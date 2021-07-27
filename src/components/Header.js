import React from 'react';
import headshot from '../assets/images/headshot.png';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'


function Header() {


  return (
    <div id="header-container">
      <figure className="headshot" >
        <img className="img-fluid" src={headshot} alt="Mandell Posed in Suit Jacket" />
      </figure>
      <header className="d-flex">
        <section className="namecard">
          <h1>Mandell Butler</h1>
          <h3>Full Stack Web Developer</h3>
        </section>
      </header>
    </div>
  );
}

export default Header;