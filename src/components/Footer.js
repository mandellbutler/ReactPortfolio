import React from 'react';
// Here we are importing a CSS file as a dependency
// import Box from '@material-ui/core/Box';
// import { FaRegCopyright } from 'react-icons/fa';
import '../styles/Footer.css'



function Display() {
  return (
    <div>
      <footer>
        <div className="copyright-container">
          <p className="copyright">
            <i className="far fa-copyright"> 2021 Mandell Butler, Inc</i>
          </p>
        </div>
        <div className="email-container">
          <p className="email">
            Email<span className="email-span"> | </span> mandell.butler@outlook.com
          </p>
        </div>
        <div className="design-container">
          <p className="design-header">This site was designed & developed, using the following Dev Tools:</p>
          <ul className="design-list">
            <li className="design-item">React.js</li>
            <li className="design-item">Node.js</li>
            <li className="design-item">Javascript</li>
            <li className="design-item">Bootstrap</li>
            <li className="design-item">Material UI</li>
            <li className="design-item">Font Awesome</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Display;