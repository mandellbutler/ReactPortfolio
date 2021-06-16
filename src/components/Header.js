import React from 'react';
//use-History listens to popstate events while the component is mounted and rerenders when the url changes.
//it is useful when the app's url changes during the deployment to Github or Heroku.
import { useHistory } from 'react-router-dom'
import headshot from '../assets/images/headshot.png';
// Here we are importing a CSS file as a dependency
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

// import { palette } from '@material-ui/system';


function Display() {
  const history = useHistory();
  return (
    <header style={{ width: '100%' }}>
      <Box display="flex" flexDirection="row" justifyContent="flex-start" p={1}>
        <Box display="flex" flexDirection="column" alignSelf="flex-start">
          <figure className="headshot">
            <img src={headshot} alt="Mandell Posed in Suit Jacket" />
          </figure>
        </Box>
        <Box display="flex" flexDirection="column" alignContent="center" p={1} style={{ width: '100%' }}>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <Box display="flex" flexDirection="row" justifyContent="center">
              <section>
                <h1>Mandell Butler</h1>
                <div>
                  Full Stack Web Developer
                </div>
              </section>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
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
          </Box>
        </Box>
      </Box>
    </header >
  );
}

export default Display;