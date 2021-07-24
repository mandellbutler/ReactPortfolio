import React from 'react';
import projects from '../projects';
// Here we are importing a CSS file as a dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Project.css'
// import { Button } from '@material-ui/core';


function Project() {
  return (
    <div id="work" className="portfolio">
      {projects.map((project) => {

        return (
          // <div className="container card-container">
          <div className="card text-white" key={project.href}>
            <h5 className="card-title card-header">{project.title}</h5>
            <figure className="project-image">
              <img src={project.image.src} alt={project.image.alt}></img>
            </figure>
            <div className="container description">
              <p className="card-text description">{project.description}</p>
            </div>
            <div className="container description btn-container">
              <a href={project.github} target="_blank" rel="noreferrer" className="card-link">Github</a>
              <a href={project.live} target="_blank" rel="noreferrer" className="card-link">Live</a>
            </div>
          </div>
          // </div>
        )
      }
      )}
    </div>
  );
}

export default Project;