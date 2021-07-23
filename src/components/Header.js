import React from 'react';
//use-History listens to popstate events while the component is mounted and rerenders when the url changes.
//it is useful when the app's url changes during the deployment to Github or Heroku.
import { useHistory } from 'react-router-dom'
import headshot from '../assets/images/headshot.png';
// Here we are importing a CSS file as a dependency
import Link from '@material-ui/core/Link';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'



// import { palette } from '@material-ui/system';


function Header() {
  const history = useHistory();
  return (
    <div id="header-container">
      <header className="d-flex">
        <figure className="headshot">
          <img src={headshot} alt="Mandell Posed in Suit Jacket" />
        </figure>
        <section className="namecard">
          <h1>Mandell Butler</h1>
          <h3>Full Stack Web Developer</h3>
        </section>
        <nav className="navbar">
          <p><Link className="materialLink" onClick={(event) => {
            history.push('/myWork')
          }} color='primary'>myWork</Link></p>
          <p><Link className="materialLink" onClick={(event) => {
            history.push('/aboutMe')
          }} color='primary'>aboutMe</Link></p>
          <p><Link className="materialLink" onClick={(event) => {
            history.push('/contact')
          }} color='primary'>Contact</Link></p>
          <p><Link className="materialLink" onClick={(event) => {
            history.push('/resume')
          }} color='primary'>resume</Link></p>
        </nav>
      </header>
    </div>
  );
}

export default Header;