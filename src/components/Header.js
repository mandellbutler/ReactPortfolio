import React from 'react';
import headshot from '../assets/images/headshot.png';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div>
      <header className="container header">
        <figure className="headshot">
          <img src={headshot} alt="Mandell Posed in Suit Jacket" />
        </figure>
        <section className="namecard">
          <h1>Mandell Butler</h1>
          <div>
            Full Stack Web Developer
          </div>
        </section>
        <nav className="navbar">
          <p><a href="#work">myWork</a></p>
          <p><a href="#biography">aboutMe</a></p>
          <p><a href="#contact">Contact</a></p>
          <p><a href="https://github.com/mandellbutler">Github</a></p>
          <p><a href="https://www.linkedin.com/in/mandellbutler/">Linkedin</a></p>
        </nav>
      </header>
    </div>
  );
}

export default Header;