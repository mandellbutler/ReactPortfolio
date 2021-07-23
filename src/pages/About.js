import React from 'react';
// import { useHistory } from 'react-router-dom'
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css'


function About() {
  return (
    <div className="bio-container">
      <section className="bio">
        <h3 className="bio-elements">ABOUT ME</h3>
        <p className="bio-elements">
          My name is Mandell Butler and I am Full Stack Web Developer. And this is my bio!
        </p>
        <p className="bio-elements">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, fugit blanditiis explicabo aperiam quam unde dolorum laudantium, ex, fugiat magnam exercitationem. Velit quaerat quia fugiat architecto doloribus. Distinctio, error similique.
        </p>
        <p className="bio-elements">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, fugit blanditiis explicabo aperiam quam unde dolorum laudantium, ex, fugiat magnam exercitationem. Velit quaerat quia fugiat architecto doloribus. Distinctio, error similique.
        </p>
        <p className="bio-elements">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, fugit blanditiis explicabo aperiam quam unde dolorum laudantium, ex, fugiat magnam exercitationem. Velit quaerat quia fugiat architecto doloribus. Distinctio, error similique.
        </p>
      </section>
    </div>
  );
}

export default About;