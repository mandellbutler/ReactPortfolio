import React from 'react';
// import { useHistory } from 'react-router-dom'
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div>
      <section className="container .p-3 col-sm-6 col-md-6">
        <h3>ABOUT ME</h3>
        <aside className="bio">
          <p>
            My name is Mandell Butler and I am Full Stack Web Developer. And this is my bio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, fugit blanditiis explicabo aperiam quam unde dolorum laudantium, ex, fugiat magnam exercitationem. Velit quaerat quia fugiat architecto doloribus. Distinctio, error similique.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, fugit blanditiis explicabo aperiam quam unde dolorum laudantium, ex, fugiat magnam exercitationem. Velit quaerat quia fugiat architecto doloribus. Distinctio, error similique.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, fugit blanditiis explicabo aperiam quam unde dolorum laudantium, ex, fugiat magnam exercitationem. Velit quaerat quia fugiat architecto doloribus. Distinctio, error similique.
          </p>
        </aside>
      </section>
    </div>
  );
}

export default About;