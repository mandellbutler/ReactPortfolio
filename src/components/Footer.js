import React from 'react';
// Here we are importing a CSS file as a dependency
// import Box from '@material-ui/core/Box';
// import { FaRegCopyright } from 'react-icons/fa';
import '../styles/Footer.css'



function Display() {
  return (
    <div>
      <footer>
        <p>
          <i className="far fa-copyright"> MANDELL BUTLER DEV'D YOUR WEB, INC 2021</i>
          {/* <FaRegCopyright /> MANDELL BUTLER DEV'D YOUR WEB, INC 2021 */}
        </p>
      </footer>
    </div>
  );
}

export default Display;