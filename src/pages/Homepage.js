import React from 'react';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom'
import Button from '../components/Navbar/Button'
import '../styles/Homepage.css'



function Homepage() {
  const history = useHistory();

  return (
    <div className="homepage-container">
      <div className="homepage">
        <Button buttonSize="btn--large" onClick={(event) => {
          history.push("/aboutMe")
        }}>
          Enter
        </Button>
      </div>
    </div>
  );
}

export default Homepage;