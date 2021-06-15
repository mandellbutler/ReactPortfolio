import React from 'react';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div>
      <section class="container .p-3 col-sm-6 col-md-6">
        <h3>ABOUT ME</h3>
        <aside class="bio">
          <p>
            My name is Mandell Butler and I am Full Stack Web Developer. And this is my bio!
              </p>
        </aside>
      </section>
    </div>
  );
}

export default About;