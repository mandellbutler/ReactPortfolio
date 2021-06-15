import React from 'react';
import horiseon from '../assets/images/horiseon.jpeg';
import otw from '../assets/images/otw.jpeg';
import planner from '../assets/images/planner.jpeg';
import password from '../assets/images/password.jpeg';
import movie from '../assets/images/movie.jpeg';
import cupcakes from '../assets/images/cupcakes.jpeg';
import bridal from '../assets/images/bridal.jpeg';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
  {
    title: 'horiseon',
    href: 'https://franklincodes1.github.io/GroupProject1/',
    image: {
      src: horiseon,
      alt: 'A man leading a team strategy meeting.'
    }
  },
  {
    title: 'On The Way',
    href: 'https://franklincodes1.github.io/GroupProject1/',
    image: {
      src: otw,
      alt: 'Image of gps mapping application'
    }
  },
  {
    title: 'Work Day Scehduler',
    href: 'https://mandellbutler.github.io/Day-Planner/',
    image: {
      src: planner,
      alt: 'Image of a work day scheduler with organized rows.'
    }
  },
  {
    title: 'Password Generator',
    href: 'https://mandellbutler.github.io/Password-Genie/',
    image: {
      src: password,
      alt: 'Image of a password generating application'
    }
  },
  {
    title: 'Movie Logger',
    href: 'https://github.com/mandellbutler/projectTwo',
    image: {
      src: movie,
      alt: 'Image of a movie logger application, displaying old movie posters.'
    }
  },
  {
    title: 'Devine Cupcakes',
    href: 'https://github.com/mandellbutler',
    image: {
      src: cupcakes,
      alt: 'Image of a gourmet cupcake display.'
    }
  },
  {
    title: "Kayla's Bridal",
    href: 'https://github.com/mandellbutler',
    image: {
      src: bridal,
      alt: 'Image of a gorgeous wedding dress draped in the sun.'
    }
  },
]

function Project() {
  return (
    <div>
      {projects.map((project) => {

        return (
          <section class="card text-white m-1">
            <div class="card-header">{project.title}</div>
            <figure class="card-body project-image">
              <a href={project.href} target="_blank" rel="noreferrer">
                <img src={project.image.src} alt={project.image.alt}></img>
              </a>
            </figure>
          </section>
        )
      }
      )}

      {/* 
      <section class="card text-white m-1">
        <div class="card-header">Horiseon SEO</div>
        <figure class="card-body project-image">
          <a href="https://mandellbutler.github.io/Horiseon-seo/" target="_blank" rel="noreferrer">
            <img src={horiseon} alt="A man leading a team strategy meeting."></img>
          </a>
        </figure>
      </section>
      <section class="card text-white m-1">
        <div class="card-header">On The Way</div>
        <figure class="card-body project-image">
          <a href="https://franklincodes1.github.io/GroupProject1/" target="_blank" rel="noreferrer">
            <img src={otw} alt="A Gps mapping application"></img>
          </a>
        </figure>
      </section>
      <section class="card text-white m-1">
        <div class="card-header">Work Day Scehduler</div>
        <figure class="card-body project-image">
          <a href="https://mandellbutler.github.io/Day-Planner/" target="_blank" rel="noreferrer">
            <img src={planner} alt="A work day scheduler with organized rows."></img>
          </a>
        </figure>
      </section>
      <section class="card text-white m-1">
        <div class="card-header">Password Generator</div>
        <figure class="card-body project-image">
          <a href="https://mandellbutler.github.io/Password-Genie/" target="_blank" rel="noreferrer">
            <img src={password} alt="A Password generating application"></img>
          </a>
        </figure>
      </section>
      <section class="card text-white m-1">
        <div class="card-header">Movie Logger</div>
        <figure class="card-body project-image">
          <a href="https://github.com/mandellbutler/projectTwo" target="_blank" rel="noreferrer">
            <img src={movie} alt="A movie logging app displaying old movie posters."></img>
          </a>
        </figure>
      </section>
      <section class="card text-white m-1">
        <div class="card-header">Devine Cupcakes</div>
        <figure class="card-body project-image">
          <a href="https://github.com/mandellbutler" target="_blank" rel="noreferrer">
            <img src={cupcakes} alt="Gourmet cupcakes on display."></img>
          </a>
        </figure>
      </section>
      <section class="card text-white m-1">
        <div class="card-header">Kayla's Bridal</div>
        <figure class="card-body project-image">
          <a href="https://github.com/mandellbutler" target="_blank" rel="noreferrer">
            <img src={bridal} alt="A gorgeous wedding dress draped in the sun."></img>
          </a>
        </figure>
      </section> */}
    </div>
  );
}

export default Project;