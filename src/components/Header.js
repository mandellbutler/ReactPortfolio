import React from 'react';
//use-History listens to popstate events while the component is mounted and rerenders when the url changes.
//it is useful when the app's url changes during the deployment to Github or Heroku.
import { useHistory } from 'react-router-dom'
import headshot from '../assets/images/headshot.png';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from '@material-ui/core/Link';

function Header() {
  const history = useHistory();
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
          <p><Link onClick={(event) => {
            history.push('/myWork')
          }} color='primary'>myWork</Link></p>
          <p><Link onClick={(event) => {
            history.push('/aboutMe')
          }} color='primary'>aboutMe</Link></p>
          <p><Link onClick={(event) => {
            history.push('/contact')
          }} color='primary'>Contact</Link></p>
          <p><a href="https://github.com/mandellbutler">Github</a></p>
          <p><a href="https://www.linkedin.com/in/mandellbutler/">Linkedin</a></p>
        </nav>
      </header>
    </div>
  );
}

export default Header;