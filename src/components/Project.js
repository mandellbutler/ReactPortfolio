import React from 'react';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';

function Project({ projects }) {
  return (
    <div>
      <section class="card text-white m-1">
        <div class="card-header">Horiseon SEO</div>
        <figure class="card-body project-image">
          <a href="https://mandellbutler.github.io/Horiseon-seo/" target="_blank" rel="noreferrer">
            <img src="./assets/images/horiseon.jpeg" alt="A man leading a team strategy meeting."></img>
          </a>
        </figure>
      </section>
      <section class="card text-white m-1">
        <div class="card-header">On The Way</div>
        <figure class="card-body project-image">
          <a href="https://franklincodes1.github.io/GroupProject1/" target="_blank" rel="noreferrer">
            <img src="./assets/images/otw.jpeg" alt="A Gps mapping application"></img>
          </a>
        </figure>
      </section>
      <section class="card text-white m-1">
        <div class="card-header">Work Day Scehduler</div>
        <figure class="card-body project-image">
          <a href="https://mandellbutler.github.io/Day-Planner/" target="_blank" rel="noreferrer">
            <img src="./assets/images/planner.jpeg" alt="A work day scheduler with organized rows."></img>
          </a>
        </figure>
      </section>
      <section class="card text-white m-1">
        <div class="card-header">Password Generator</div>
        <figure class="card-body project-image">
          <a href="https://mandellbutler.github.io/Password-Genie/" target="_blank" rel="noreferrer">
            <img src="./assets/images/password.jpeg" alt="A Password generating application"></img>
          </a>
        </figure>
      </section>
      <section class="card text-white m-1">
        <div class="card-header">Movie Logger</div>
        <figure class="card-body project-image">
          <a href="https://github.com/mandellbutler/projectTwo" target="_blank" rel="noreferrer">
            <img src="./assets/images/movie.jpeg" alt="A movie logging app displaying old movie posters."></img>
          </a>
        </figure>
      </section>
      <section class="card text-white m-1">
        <div class="card-header">Devine Cupcakes</div>
        <figure class="card-body project-image">
          <a href="https://github.com/mandellbutler" target="_blank" rel="noreferrer">
            <img src="./assets/images/cupcakes.jpeg" alt="Gourmet cupcakes on display."></img>
          </a>
        </figure>
      </section>
      <section class="card text-white m-1">
        <div class="card-header">Kayla's Bridal</div>
        <figure class="card-body project-image">
          <a href="https://github.com/mandellbutler" target="_blank" rel="noreferrer">
            <img src="./assets/images/bridal.jpeg" alt="A gorgeous wedding dress draped in the sun."></img>
          </a>
        </figure>
      </section>
    </div>
  );
}

export default Project;