import React from 'react';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'
import Button from '../components/Navbar/Button'
import nyc from "../assets/images/mbgraphic.JPG"
import '../styles/Homepage.css'



function Homepage() {
  const history = useHistory();

  return (
    <div className="homepage-main">
      <div className="homepage-container">
        <figure className="image-container">
          <img className="homepage-image" src={nyc} alt="Mandell as a graphic cartoon" />
        </figure>
        <div className="feature-container">
          <div className="homepage-quote">
            <p>"Websites for the Living" (or Not)</p>
          </div>
          <Button buttonSize="btn--large" onClick={(event) => {
            history.push("/aboutMe")
          }}>
            Enter
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;