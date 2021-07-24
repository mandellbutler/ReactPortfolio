import React from 'react';
import { useHistory } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'





function Navbar() {
  const history = useHistory();
  return (
    <div className="navbar sticky-top navbar-expand-lg">
      <nav>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <p className="nav-elements"><Link className="materialLink nav-item nav-link active" onClick={(event) => {
              history.push('/myWork')
            }} color='primary'>myWork</Link></p>
            <p><Link className="materialLink nav-item nav-link" onClick={(event) => {
              history.push('/aboutMe')
            }} color='primary'>aboutMe</Link></p>
            <p><Link className="materialLink nav-item nav-link" onClick={(event) => {
              history.push('/resume')
            }} color='primary'>resume</Link></p>
            <p><Link className="materialLink nav-item nav-link" onClick={(event) => {
              history.push('/contact')
            }} color='primary'>contact</Link></p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;