import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import { SiMongodb, SiMysql, SiHeroku, SiJquery, SiPostman } from 'react-icons/si';

// import { useHistory } from 'react-router-dom'
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/About.css'


function About() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="about-container">
        <section className="about-section">
          <h3 className="about-elements">ABOUT ME</h3>
          <br />
          <p className="about-elements">
            My name is Mandell Butler. I am an Artist, turned Full Stack Web Developer, specializing in intuitive web applications that inspire, deliver value and facilitate growth.
          </p>
          <p className="about-elements">
            Born and raised in Houston, Tx, I received an academic scholarship to attend Prairie View A&M University’s School of Mechanical Engineering. After my first semester, however, I made the transformative decision to change majors and pursue my passion as an artist. Graduating with a degree in Theatre, I would go on to spend my post graduate years working as a professional Actor in New York, Los Angeles, and New Orleans--while also working extensively in the fields of Hospitality and Sales.
          </p>
          <p className="about-elements">
            Today, web development serves as my continued evolution as an artist, and is heavily rooted in Hospitality and Sales. My approach is forward focused and relationship driven, bridging the gap between businesses and their consumers. To put it plainly, I build innovative and intuitive products that facilitate long lasting relationships with users, thus promoting scaled growth for business owners.
          </p>
          <p className="about-elements">
            For more information about how I can help create the perfect website or application for your business needs, please feel free to <span><a id="about-contact-link" href="/contact">contact me!</a></span>
          </p>
        </section>
        <section className="about-tech">
          <aside className="icons-main">
            <h4 className="tech-title">My Tech:</h4>
            <div className="icons-container">
              <div className="tech-icons">
                <i id="html-icon" className="fab fa-html5"></i><p>HTML5</p>
                <i className="fab fa-css3-alt"></i><p>CSS3</p>
                <i className="fab fa-js-square"></i><p>JavaScript</p>
                <SiJquery size={50} /><p>JQuery</p>
                <i className="fab fa-react"></i><p>React</p>
              </div>
              <div className="tech-icons">
                <SiMongodb className="react-icons" size={40} /><p>MongoDB</p>
                <SiMysql size={50} /><p>MySQL</p>
                <SiPostman size={50} /><p>Postman</p>
                <SiHeroku size={50} /><p>Heroku</p>
                <i className="fab fa-github"></i><p>GitHub</p>
              </div>
            </div>
          </aside>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;