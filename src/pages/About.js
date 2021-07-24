import React from 'react';
// import { useHistory } from 'react-router-dom'
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css'


function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        <h3 className="about-elements">ABOUT ME</h3>
        <p className="about-elements">
          My name is Mandell Butler and I am Full Stack Web Developer. And this is my bio!
        </p>
        <p className="about-elements">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, fugit blanditiis explicabo aperiam quam unde dolorum laudantium, ex, fugiat magnam exercitationem. Velit quaerat quia fugiat architecto doloribus. Distinctio, error similique.
        </p>
        <p className="about-elements">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, fugit blanditiis explicabo aperiam quam unde dolorum laudantium, ex, fugiat magnam exercitationem. Velit quaerat quia fugiat architecto doloribus. Distinctio, error similique.
        </p>
        <p className="about-elements">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, fugit blanditiis explicabo aperiam quam unde dolorum laudantium, ex, fugiat magnam exercitationem. Velit quaerat quia fugiat architecto doloribus. Distinctio, error similique.
        </p>
      </section>
    </div>
  );
}

export default About;