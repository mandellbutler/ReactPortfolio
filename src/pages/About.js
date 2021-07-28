import React from 'react';
import Header from '../components/Header'
import { SiMongodb, SiMysql, SiHeroku, SiJquery } from 'react-icons/si';

// import { useHistory } from 'react-router-dom'
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css'


function About() {
  return (
    <div>
      <Header />
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
        <section className="about-tech">
          <aside className="icons-main">
            <h4 className="tech-title">My Tech:</h4>
            <div className="icons-container">
              <div className="tech-icons">
                <i id="html-icon" class="fab fa-html5"></i><p>HTML5</p>
                <i class="fab fa-css3-alt"></i><p>CSS3</p>
                <i class="fab fa-js-square"></i><p>Javascript</p>
                <SiJquery size={40} /><p>JQuery</p>
                <i class="fab fa-react"></i><p>React</p>
              </div>
              <div className="tech-icons">
                <SiMongodb className="react-icons" size={40} /><p>MongoDB</p>
                <SiMysql size={40} /><p>MySQL</p>
                <SiHeroku size={40} /><p>Heroku</p>
                <i class="fab fa-github"></i><p>GitHub</p>
              </div>
            </div>

          </aside>
        </section>
      </div>
    </div>
  );
}

export default About;