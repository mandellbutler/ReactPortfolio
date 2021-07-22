import React from 'react';
// Here we are importing a CSS file as a dependency
import Cupcakes from '../assets/images/cupcakes.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';


const sectionStyle = {
  width: "50%",
  height: "600px",
  backgroundImage: "url(" + Cupcakes + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

function Homepage() {
  return (
    <div style={sectionStyle}>
      <h3>Welcome to my Portfolio</h3>
    </div>
  );
}

export default Homepage;